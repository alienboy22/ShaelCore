"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import shaelcoreTheme from "./muiTheme";

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={shaelcoreTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
