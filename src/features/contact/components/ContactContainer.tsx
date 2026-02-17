import { ReactNode } from "react"

function ContactContainer({ children }:{children:ReactNode}) {
    return (
        <div className="flex flex-col lg:flex-row gap-10 justify-center text-gray-900 dark:text-white">

            {children}

        </div>

    )
}

export default ContactContainer