
import { useContext } from "react";
import { ScrollToContext } from "./ScrollToProvider";

export default function useScrollToContext(){
    const {sectionsRefs,handleScrollTo}=useContext(ScrollToContext);


    return {sectionsRefs,handleScrollTo}
}