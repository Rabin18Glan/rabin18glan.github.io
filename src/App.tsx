import { useRef } from 'react';
import { Footer, Header, Main } from './layouts';


function Root() {
  const sectionsRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScrollTo = (page: string) => { 

      const section = sectionsRefs.current[page];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${page}`);
      }
    }
    
  return (
    <div>
     <Header onScrollTo={handleScrollTo}/>
      <Main sectionRef={sectionsRefs}/>
      <Footer onScrollTo={handleScrollTo}/>
    </div>
  );
}

export default Root;
