import { useRef } from "react";

function useScrollTo() {
    const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const handleScrollTo = (page: string) => { 
  
        const section = sectionsRefs.current[page];
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${page}`);
        }
      }
  return {
    sectionsRefs,
    handleScrollTo
    
  }
}

export default useScrollTo