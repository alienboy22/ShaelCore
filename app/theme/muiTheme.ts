"use client";
import { createTheme } from "@mui/material/styles";

const shaelcoreTheme = createTheme({
  palette: {
    mode: "light",
    primary:   { main: "#101418", contrastText: "#ffffff" },
    secondary: { main: "#B86F43", contrastText: "#101418" },
    background:{ default: "#F7F4EC", paper: "#ffffff" },
    text: {
      primary:   "#101418",
      secondary: "#505B5A",
    },
    divider: "#D8CDBB",
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700, letterSpacing: "-0.015em" },
    h3: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 600 },
    h4: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 600 },
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
            background: "#101418",
            "&:hover": { background: "#B86F43", color: "#101418" },
            transition: "background 0.2s, color 0.2s",
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            background: "#B86F43",
            color: "#101418",
            "&:hover": { background: "#F0B968" },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: "#101418",
            "&:hover": { background: "#101418", color: "#ffffff" },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: "0 1px 4px rgba(16,20,24,0.07)",
          border: "1px solid #D8CDBB",
          transition: "box-shadow 0.22s, transform 0.22s",
          "&:hover": {
            boxShadow: "0 8px 28px -6px rgba(16,20,24,0.13)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: "#D8CDBB" } },
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
            "& fieldset": { borderColor: "#D8CDBB" },
            "&:hover fieldset": { borderColor: "#B86F43" },
            "&.Mui-focused fieldset": { borderColor: "#101418" },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "1px solid #D8CDBB",
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
          "&:hover": { background: "#E9E1D2" },
        },
        content: { margin: "14px 0", fontWeight: 500 },
      },
    },
  },
});

export default shaelcoreTheme;
