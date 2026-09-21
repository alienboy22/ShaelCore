"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const cols = {
  "Private Banking": [
    { label: "Private Banking",     href: "/private-banking/investing/private-banking" },
    { label: "Wealth Management",   href: "/private-banking/investing/wealth-management" },
    { label: "Investment Advisory", href: "/private-banking/investing/investment-advisory" },
    { label: "Wealth Planning",     href: "/private-banking/investing/wealth-planning" },
    { label: "Financing",           href: "/private-banking/financing" },
  ],
  "Intermediaries": [
    { label: "Custodian Bank",  href: "/intermediaries/services/custodian-bank" },
    { label: "Fund Solutions",  href: "/intermediaries/services/custodian-bank" },
    { label: "Execution Only",  href: "/intermediaries/services/custodian-bank" },
  ],
  "About Us": [
    { label: "Company Portrait",   href: "/about-us/company-portrait" },
    { label: "Sustainability",     href: "/sustainability" },
    { label: "Research & Our View",href: "/research" },
    { label: "Locations",          href: "/contact" },
  ],
  "Legal": [
    { label: "Contact",         href: "/contact" },
    { label: "Legal Notice",    href: "/contact" },
    { label: "Privacy Policy",  href: "/contact" },
    { label: "Cookie Settings", href: "/contact" },
    { label: "Imprint",         href: "/contact" },
  ],
};

const offices = [
  { city: "Vaduz",      country: "Liechtenstein" },
  { city: "Zurich",     country: "Switzerland" },
  { city: "Luxembourg", country: "Luxembourg" },
  { city: "Singapore",  country: "Singapore" },
  { city: "Road Town",  country: "BVI" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0d2137", color: "#fff" }}>
      {/* ── CTA Banner ── */}
      <Box sx={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <Box
          sx={{
            maxWidth: 1280,
            mx: "auto",
            px: { xs: 2, sm: 4 },
            py: { xs: 4, md: 5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Georgia, serif", color: "#fff", fontWeight: 600, mb: 0.6 }}
            >
              Start your journey with Shaelcore
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem" }}>
              Our advisors are here to help you achieve your financial goals.
            </Typography>
          </Box>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ whiteSpace: "nowrap", flexShrink: 0, py: 1.3, px: 3 }}
          >
            Arrange an Appointment
          </Button>
        </Box>
      </Box>

      {/* ── Main grid ── */}
      <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2, sm: 4 }, pt: 7, pb: 5 }}>
        <Grid container spacing={5}>
          {/* Brand column */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              component={Link}
              href="/"
              sx={{ display: "inline-flex", alignItems: "center", gap: 1.4, textDecoration: "none", mb: 2.5 }}
            >
              <Box
                sx={{
                  width: 38, height: 38,
                  bgcolor: "#b8975a",
                  borderRadius: "2px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Typography sx={{ color: "#0d2137", fontWeight: 800, fontSize: "0.82rem" }}>SC</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Georgia, serif", color: "#fff", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.1 }}>
                  Shaelcore
                </Typography>
                <Typography sx={{ color: "#b8975a", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", mt: 0.2 }}>
                  Partnership for Progress
                </Typography>
              </Box>
            </Box>

            <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.75, mb: 3, maxWidth: 240 }}>
              Founded 1956 in Vaduz, Liechtenstein. One of the three system‑relevant banks in Liechtenstein.
            </Typography>

            {/* Social */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/shaelcore",
                  svg: (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10V9h4v1.5A5 5 0 0 1 16 8zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                    </svg>
                  ),
                },
                {
                  label: "X",
                  href: "https://x.com/shaelcore",
                  svg: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <IconButton
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  size="small"
                  sx={{
                    width: 32, height: 32,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                    borderRadius: "50%",
                    "&:hover": { borderColor: "#b8975a", color: "#b8975a" },
                    transition: "all 0.2s",
                  }}
                >
                  {s.svg}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(cols).map(([cat, links]) => (
            <Grid key={cat} size={{ xs: 6, sm: 3, lg: 2 }}>
              <Typography
                variant="overline"
                sx={{ color: "#b8975a", fontSize: "0.65rem", letterSpacing: "0.1em", mb: 2, display: "block" }}
              >
                {cat}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, display: "flex", flexDirection: "column", gap: 1.2 }}>
                {links.map((l) => (
                  <Box component="li" key={l.label}>
                    <Box
                      component={Link}
                      href={l.href}
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.82rem",
                        textDecoration: "none",
                        "&:hover": { color: "#fff" },
                        transition: "color 0.2s",
                      }}
                    >
                      {l.label}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── Locations strip ── */}
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Typography
            variant="overline"
            sx={{ color: "#b8975a", fontSize: "0.65rem", letterSpacing: "0.1em", mb: 2.5, display: "block" }}
          >
            Our Locations
          </Typography>
          <Grid container spacing={2}>
            {offices.map((o) => (
              <Grid key={o.city} size={{ xs: 6, sm: 4, md: "auto" }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.8 }}>
                  <LocationOnIcon sx={{ fontSize: 13, color: "#b8975a", mt: 0.3, flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ color: "#fff", fontSize: "0.82rem", fontWeight: 500, lineHeight: 1.2 }}>
                      {o.city}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>
                      {o.country}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Contact strip ── */}
        <Box sx={{ mt: 3.5, display: "flex", flexWrap: "wrap", gap: 3.5 }}>
          <Box
            component="a"
            href="tel:+41432126000"
            sx={{
              display: "flex", alignItems: "center", gap: 0.8,
              color: "rgba(255,255,255,0.45)", fontSize: "0.82rem",
              textDecoration: "none",
              "&:hover": { color: "#b8975a" },
              transition: "color 0.2s",
            }}
          >
            <PhoneIcon sx={{ fontSize: 14 }} /> +41 43 212 60 00
          </Box>
          <Box
            component="a"
            href="mailto:info.zurich@shaelcore.com"
            sx={{
              display: "flex", alignItems: "center", gap: 0.8,
              color: "rgba(255,255,255,0.45)", fontSize: "0.82rem",
              textDecoration: "none",
              "&:hover": { color: "#b8975a" },
              transition: "color 0.2s",
            }}
          >
            <EmailIcon sx={{ fontSize: 14 }} /> info.zurich@shaelcore.com
          </Box>
        </Box>
      </Box>

      {/* ── Bottom bar ── */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.07)" }} />
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: { xs: 2, sm: 4 },
          py: 2.5,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
        }}
      >
        <Typography sx={{ color: "rgba(255,255,255,0.28)", fontSize: "0.74rem" }}>
          © {new Date().getFullYear()} Shaelcore Ltd. All rights reserved. Regulated by FMA Liechtenstein.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5 }}>
          {["Legal Notice", "Privacy Policy", "Cookie Settings", "Imprint"].map((t) => (
            <Box
              key={t}
              component={Link}
              href="/contact"
              sx={{
                color: "rgba(255,255,255,0.28)", fontSize: "0.74rem",
                textDecoration: "none",
                "&:hover": { color: "rgba(255,255,255,0.6)" },
                transition: "color 0.2s",
              }}
            >
              {t}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
