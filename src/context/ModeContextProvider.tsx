"use client";

import React, { createContext, useState } from "react";
import { PaletteMode, useMediaQuery } from "@mui/material";

type ModeContextType = {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
};

const ModeContext = createContext<ModeContextType>({
  mode: 'light',
  setMode: () => {}
});

interface ModeContextProviderProps {
  children: React.ReactNode;
}

const ModeContextProvider: React.FC<ModeContextProviderProps> = ({ children }) => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode?'dark':'light');
  const modeContextValue: ModeContextType = {
    mode,
    setMode
  };

  return (
    <ModeContext.Provider value={modeContextValue}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
export { ModeContext };