
import { useMediaQuery } from "@mui/material";
import { useContext, useEffect } from "react";
import { ModeContext } from "./ModeContextProvider";

export default function useModeContext(){
    const {mode,setMode}=useContext(ModeContext);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(()=>{
        setMode(prefersDarkMode?'dark':'light')
    },[prefersDarkMode])

    return {mode,setMode}
}