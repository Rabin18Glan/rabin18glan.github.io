import useScrollToContext from "../../context/useScrollToContext";
import { pageList } from "../../pageList";

function Main() {

  const {sectionsRefs} = useScrollToContext();
  return (

    pageList.map((page) => (

      <div
        key={page.id}
        ref={(el) => { sectionsRefs!.current[page.page] = el; }}
        id={page.page}
        className='bg-white dark:bg-black '
      >

{page.pageSection}
      </div>

    ))
  )
}

export default Main