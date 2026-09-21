"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  badge?: string;
  breadcrumbs?: Crumb[];
  title: string;
  titleAccent?: string;   // coloured span at end
  subtitle?: string;
  body?: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ badge, breadcrumbs, title, titleAccent, subtitle, body, cta }: PageHeroProps) {
  return (
    <Box
      sx={{
        bgcolor: "#0d2137",
        pt: { xs: 9, md: 12 },
        pb: { xs: 8, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top gold rule */}
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg,transparent,#b8975a,transparent)" }} />
      {/* radial glow */}
      <Box sx={{ position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 70% at 80% 50%, rgba(184,151,90,0.07) 0%, transparent 65%)" }} />

      <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 }, position: "relative" }}>
        {/* breadcrumbs */}
        {breadcrumbs && (
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0.5, mb: 3 }}>
            {breadcrumbs.map((c, i) => (
              <Box key={c.label} sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                {i > 0 && <NavigateNextIcon sx={{ fontSize: 13, color: "rgba(184,151,90,0.5)" }} />}
                {c.href ? (
                  <Box component={Link} href={c.href} sx={{ color: "#b8975a", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", "&:hover": { color: "#fff" }, transition: "color 0.2s" }}>
                    {c.label}
                  </Box>
                ) : (
                  <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {c.label}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}

        {badge && (
          <Chip
            label={badge}
            size="small"
            sx={{
              mb: 2.5, bgcolor: "rgba(184,151,90,0.12)", color: "#b8975a",
              fontWeight: 600, fontSize: "0.68rem", letterSpacing: "0.08em",
              border: "1px solid rgba(184,151,90,0.28)", borderRadius: "20px",
            }}
          />
        )}

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
            color: "#fff", fontWeight: 700, lineHeight: 1.13,
            mb: subtitle || body ? 2.5 : 0, maxWidth: 780,
            "& span": { color: "#b8975a" },
          }}
        >
          {title}
          {titleAccent && <><br /><span>{titleAccent}</span></>}
        </Typography>

        {subtitle && (
          <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.75, mb: body ? 2 : 0, maxWidth: 640 }}>
            {subtitle}
          </Typography>
        )}

        {body && (
          <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 620, mb: cta ? 3.5 : 0 }}>
            {body}
          </Typography>
        )}

        {cta && (
          <Button
            component={Link}
            href={cta.href}
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ py: 1.3, px: 3 }}
          >
            {cta.label}
          </Button>
        )}
      </Box>
    </Box>
  );
}
