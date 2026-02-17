
import React, { createContext, MouseEventHandler, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pageList } from "../pageList";

interface ScrollToContextType {
  sectionsRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }> | null;
  handleScrollTo: (page: string) => MouseEventHandler<HTMLAnchorElement|HTMLButtonElement>;
}

const ScrollToContext = createContext<ScrollToContextType>({
  sectionsRefs: null,
  handleScrollTo: () => () => {},
});

const ScrollToProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && location.pathname === '/') {
      const timer = setTimeout(() => {
        const section = sectionsRefs.current[hash];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const handleScrollTo = (page: string): MouseEventHandler<HTMLAnchorElement|HTMLButtonElement> => {
    return (event) => {
      event.preventDefault(); 
      
      const pageInfo = pageList.find(p => p.page === page);
      
      if (pageInfo?.isRoute) {
        navigate(`/${page}`);
        return;
      }

      if (location.pathname !== '/') {
        navigate(`/#${page}`);
      } else {
        const section = sectionsRefs.current[page];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${page}`);
        }
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
