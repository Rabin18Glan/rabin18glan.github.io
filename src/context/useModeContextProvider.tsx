"use client";

import { useContext, useEffect } from "react";
import { ModeContext } from "./ModeContextProvider";
import { useMediaQuery } from "@mui/material";

export default function useModeContext(){
    const {mode,setMode}=useContext(ModeContext);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(()=>{
        setMode(prefersDarkMode?'dark':'light')
    },[prefersDarkMode])

    return {mode,setMode}
}