"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const columns = [
  {
    heading: "Wealth & advisory",
    links: [
      { label: "Private banking", href: "/private-banking/investing/private-banking" },
      { label: "Wealth management", href: "/private-banking/investing/wealth-management" },
      { label: "Investment advisory", href: "/private-banking/investing/investment-advisory" },
      { label: "Wealth planning", href: "/private-banking/investing/wealth-planning" },
      { label: "Financing", href: "/private-banking/financing" },
    ],
  },
  {
    heading: "Institutional services",
    links: [
      { label: "Custodian bank", href: "/intermediaries/services/custodian-bank" },
      { label: "Fund solutions", href: "/intermediaries/services/custodian-bank#fund-solutions" },
      { label: "Sustainable investing", href: "/sustainability" },
      { label: "Research & perspectives", href: "/research" },
    ],
  },
  {
    heading: "More possibilities",
    links: [
      { label: "Travel & tours", href: "/travel-tours" },
      { label: "Real estate", href: "/real-estate" },
      { label: "About ShaelCore", href: "/about-us/company-portrait" },
      { label: "Make an enquiry", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#101418", color: "#fff" }}>
      <Box sx={{ bgcolor: "#E9E1D2", color: "#101418" }}>
        <Box sx={{ maxWidth: 1320, mx: "auto", px: { xs: 2.5, md: 4 }, py: { xs: 4, md: 5 }, display: "flex", alignItems: { xs: "flex-start", md: "center" }, justifyContent: "space-between", gap: 3, flexDirection: { xs: "column", md: "row" } }}>
          <Box>
            <Typography sx={{ fontFamily: "Space Grotesk,sans-serif", fontSize: { xs: "1.4rem", md: "1.75rem" }, lineHeight: 1.2, mb: 0.7 }}>
              Big plans start with a simple conversation.
            </Typography>
            <Typography sx={{ color: "#5D6461", fontSize: "0.9rem" }}>
              Tell us what you have in mind. We’ll help you find the right place to begin.
            </Typography>
          </Box>
          <Button component={Link} href="/contact" variant="contained" color="primary" endIcon={<ArrowForwardIcon />} sx={{ py: 1.25, px: 2.5, flexShrink: 0 }}>
            Let’s talk
          </Button>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1320, mx: "auto", px: { xs: 2.5, md: 4 }, pt: { xs: 6, md: 8 }, pb: 5 }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component={Link} href="/" sx={{ display: "inline-flex", alignItems: "center", gap: 1.3, mb: 2.2, textDecoration: "none", color: "#fff" }}>
              <Box sx={{ width: 40, height: 40, border: "1px solid #B86F43", display: "grid", placeItems: "center", color: "#F0B968", fontFamily: "Space Grotesk,sans-serif", fontSize: "1.45rem" }}>S</Box>
              <Box>
                <Typography sx={{ fontFamily: "Space Grotesk,sans-serif", fontWeight: 700, letterSpacing: "0.18em", fontSize: "1.08rem", lineHeight: 1.15 }}>SHAELCORE</Typography>
                <Typography sx={{ color: "#F0B968", fontSize: "0.54rem", letterSpacing: "0.18em" }}>CAPITAL HOLDINGS</Typography>
              </Box>
            </Box>
            <Typography sx={{ color: "rgba(255,255,255,0.62)", maxWidth: 290, fontSize: "0.88rem", lineHeight: 1.8 }}>
              A considered portfolio of wealth and advisory services, travel experiences, and real estate.
            </Typography>
          </Grid>
          {columns.map((column) => (
            <Grid key={column.heading} size={{ xs: 6, md: 2.5 }}>
              <Typography sx={{ color: "#F0B968", fontSize: "0.66rem", letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 700, mb: 2 }}>
                {column.heading}
              </Typography>
              <Box sx={{ display: "grid", gap: 1.25 }}>
                {column.links.map((link) => (
                  <Box key={link.label} component={Link} href={link.href} sx={{ color: "rgba(255,255,255,0.66)", fontSize: "0.82rem", textDecoration: "none", "&:hover": { color: "#fff" } }}>
                    {link.label}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography sx={{ color: "#F0B968", fontSize: "0.66rem", letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 700, mb: 2 }}>
              Connect
            </Typography>
            <Box component={Link} href="mailto:info.zurich@shaelcore.com" sx={{ color: "rgba(255,255,255,0.72)", fontSize: "0.84rem", textDecoration: "none", "&:hover": { color: "#fff" } }}>
              info.zurich@shaelcore.com
            </Box>
            <Typography sx={{ color: "rgba(255,255,255,0.54)", fontSize: "0.82rem", lineHeight: 1.7, mt: 2.1 }}>
              Vaduz · Zurich · Luxembourg<br />Singapore · British Virgin Islands
            </Typography>
            <Box component={Link} href="/auth/login" sx={{ color: "#F0B968", fontSize: "0.82rem", textDecoration: "none", display: "inline-block", mt: 1.8 }}>
              Client login <ArrowForwardIcon sx={{ verticalAlign: "middle", fontSize: 15, ml: 0.4 }} />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, pt: 2.5, borderTop: "1px solid rgba(255,255,255,0.16)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 1.5 }}>
          <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.73rem" }}>
            © {new Date().getFullYear()} ShaelCore Ltd. All rights reserved. Regulated by FMA Liechtenstein.
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.73rem" }}>
            Wealth · Travel · Real estate
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
