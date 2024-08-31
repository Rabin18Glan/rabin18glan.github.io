import React, { createContext, MouseEventHandler, useRef } from "react";

// Define the shape of the context
interface ScrollToContextType {
  sectionsRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }> | null;
  handleScrollTo: (page: string) => MouseEventHandler<HTMLAnchorElement|HTMLButtonElement>;
}

// Create the context
const ScrollToContext = createContext<ScrollToContextType>({
  sectionsRefs: null,
  handleScrollTo: () => () => {},
});

const ScrollToProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScrollTo = (page: string): MouseEventHandler<HTMLAnchorElement|HTMLButtonElement> => {
    return (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const section = sectionsRefs.current[page];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${page}`);
      }
    };
  };

  return (
    <ScrollToContext.Provider value={{ sectionsRefs, handleScrollTo }}>
      {children}
    </ScrollToContext.Provider>
  );
};

export default ScrollToProvider;
export { ScrollToContext };
