import { ReactNode } from "react"

function ContactContainer({ children }:{children:ReactNode}) {
    return (
        <div className="flex flex-col lg:flex-row gap-10 justify-center">

            {children}

        </div>

    )
}

export default ContactContainer