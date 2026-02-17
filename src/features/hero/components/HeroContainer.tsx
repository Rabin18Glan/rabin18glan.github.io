import { ReactNode } from "react"
import { Section } from "../../../layouts/wrappers"

function HeroContainer({ children }:{children:ReactNode}) {
    return (
        <Section 
            id='hero' 
            fullHeight 
            showGlow 
            containerClassName="flex flex-col md:flex-row-reverse justify-center items-center gap-12"
        >
            {children}
        </Section>
    )
}

export default HeroContainer