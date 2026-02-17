
import useScrollToContext from "../../context/useScrollToContext";
import { pageList } from "../../pageList";

function Main() {

  const {sectionsRefs} = useScrollToContext();
  // Only render showInHeader components (the sections of the landing page)
  const homeSections = pageList.filter(page => page.showInHeader);

  return (
    homeSections.map((page) => (
      <div
        key={page.id}
        ref={(el) => { if (sectionsRefs) sectionsRefs.current[page.page] = el; }}
        id={page.page}
        className='bg-white dark:bg-dark-bg transition-colors duration-500'
      >
        {page.pageSection}
      </div>
    ))
  )
}

export default Main