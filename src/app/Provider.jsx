"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function Provider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(function () {
    setMounted(true);
  }, []);
  if (!mounted) return <> {children}</>;

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Provider;
