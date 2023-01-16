import { createContext, useState } from "react";

export const ComicContext = createContext("");

export function ComicProvider({ children }) {
  const [breakpoint, setBreakpoint] = useState(() => 0);

  function getBreakpoint() {
    if (window.innerWidth < 768) {
      setBreakpoint(1);
    } else if (window.innerWidth < 1024) {
      setBreakpoint(2);
    } else {
      setBreakpoint(3);
    }
  }

  return (
    <ComicContext.Provider value={{ breakpoint, setBreakpoint }}>
      {children}
    </ComicContext.Provider>
  );
}
