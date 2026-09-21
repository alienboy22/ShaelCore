"use client";
import { createTheme } from "@mui/material/styles";

const shaelcoreTheme = createTheme({
  palette: {
    mode: "light",
    primary:   { main: "#0d2137", contrastText: "#ffffff" },
    secondary: { main: "#b8975a", contrastText: "#0d2137" },
    background:{ default: "#fafaf8", paper: "#ffffff" },
    text: {
      primary:   "#0d2137",
      secondary: "#4a5568",
    },
    divider: "#e2ddd6",
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 700, letterSpacing: "-0.015em" },
    h3: { fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 600 },
    h4: { fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 600 },
    h5: { fontFamily: "'Inter', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Inter', sans-serif", fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.01em" },
    caption: { fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em" },
    overline: { fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.1em" },
  },
  shape: { borderRadius: 2 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          padding: "10px 24px",
          fontSize: "0.875rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background: "#0d2137",
            "&:hover": { background: "#b8975a", color: "#0d2137" },
            transition: "background 0.2s, color 0.2s",
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "#b8975a",
            color: "#0d2137",
            "&:hover": { background: "#cdb07a" },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#0d2137",
            "&:hover": { background: "#0d2137", color: "#ffffff" },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "0 1px 4px rgba(13,33,55,0.07)",
          border: "1px solid #e2ddd6",
          transition: "box-shadow 0.22s, transform 0.22s",
          "&:hover": {
            boxShadow: "0 8px 28px -6px rgba(13,33,55,0.13)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: "#e2ddd6" } },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 3, fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 600 },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "& fieldset": { borderColor: "#e2ddd6" },
            "&:hover fieldset": { borderColor: "#b8975a" },
            "&.Mui-focused fieldset": { borderColor: "#0d2137" },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid #e2ddd6",
          borderRadius: "4px !important",
          boxShadow: "none",
          "&:before": { display: "none" },
          "&.Mui-expanded": { margin: "0 0 8px" },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0 20px",
          "&.Mui-expanded": { minHeight: 52 },
          "&:hover": { background: "#f5f2ed" },
        },
        content: { margin: "14px 0", fontWeight: 500 },
      },
    },
  },
});

export default shaelcoreTheme;
