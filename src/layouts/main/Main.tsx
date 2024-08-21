import { MutableRefObject, Ref } from "react";
import { pageList } from "../../pageList";

function Main({ sectionRef }:{sectionRef:MutableRefObject<{ [key: string]: HTMLDivElement | null }>}) {

  return (

    pageList.map((page) => (

      <div
        key={page.id}
        ref={(el) => { sectionRef.current[page.page] = el; }}
        id={page.page}
        className='bg-white dark:bg-black '
      >
        {page.pageSection}
      </div>

    ))
  )
}

export default Main