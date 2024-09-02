import { ReactNode } from "react"

function HeroContainer({ children }:{children:ReactNode}) {
    return (
        <div id='hero'  className="px-6 xl:px-64 pt-7 md:pt-16 flex flex-col md:flex-row-reverse justify-center items-center bg-white dark:bg-black dark:text-white text-gray-700" >
            {children}

        </div>
    )
}

export default HeroContainer