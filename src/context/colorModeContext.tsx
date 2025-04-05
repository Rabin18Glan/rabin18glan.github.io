import { createContext, useContext, useState, ReactNode } from 'react';

type ColorModeContextType = {
  isDark: boolean;
  toggleColorMode: () => void;
};

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleColorMode = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ColorModeContext.Provider value={{ isDark, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used within a ColorModeProvider');
  }
  return context;
}
