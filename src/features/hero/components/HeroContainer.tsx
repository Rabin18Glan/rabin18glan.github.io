import { ReactNode } from "react"

function HeroContainer({ children }:{children:ReactNode}) {
    return (
        <div id='hero' className="xl:px-64 mt-16 md:mt-20 flex flex-col md:flex-row-reverse justify-center items-center bg-white dark:bg-black dark:text-white text-gray-700" >
            {children}

        </div>
    )
}

export default HeroContainer