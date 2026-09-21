"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from "@mui/icons-material/Language";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useLocale } from "@/app/locale/LocaleProvider";

/* ─── colour palette shortcuts ─── */
const NAVY  = "#0d2137";
const GOLD  = "#b8975a";
const CREAM = "#f5f2ed";

/* ─── data ─── */
const pillars = [
  {
    icon: LanguageIcon,
    title: "International Reach – Local Roots",
    body:  "Five strategically selected locations in leading financial centres, combining an international presence with first-class local expertise.",
    href:  "/about-us/company-portrait",
  },
  {
    icon: TrendingUpIcon,
    title: "Financial Solutions with a Long-Term Perspective",
    body:  "Tailored financial solutions built around your goals. Our proactive approach and in-depth experience ensure sustainable success across generations.",
    href:  "/private-banking/investing/private-banking",
  },
  {
    icon: EmojiEventsIcon,
    title: "Excellence That Sets Standards",
    body:  "Numerous commendations confirm the consistent quality of our advice, products and services. We set standards – today and in the future.",
    href:  "/about-us/company-portrait",
  },
];

const stats = [
  { value: "CHF 53.7B", label: "Assets Under Management",    sub: "As of 31 December 2025" },
  { value: "994",       label: "Committed Employees",        sub: "Across 5 global offices" },
  { value: "70+",       label: "Years of Excellence",        sub: "Founded 4 April 1956" },
  { value: "A–",        label: "S&P Credit Rating",          sub: "Strong financial foundation" },
];

const services = [
  {
    icon: TrendingUpIcon,
    title: "Wealth Management",
    body:  "Leave investment decisions to our experts. Benefit from actively managed, broadly diversified portfolios aligned with your objectives.",
    href:  "/private-banking/investing/wealth-management",
  },
  {
    icon: StarBorderIcon,
    title: "Investment Advisory",
    body:  "You retain control. We contribute market views, investment ideas, and continuous portfolio monitoring – as much support as you choose.",
    href:  "/private-banking/investing/investment-advisory",
  },
  {
    icon: SecurityIcon,
    title: "Wealth Planning",
    body:  "Retirement, succession, international asset structures – we bring all financial considerations together into a tailored long-term plan.",
    href:  "/private-banking/investing/wealth-planning",
  },
  {
    icon: PeopleIcon,
    title: "Intermediary Services",
    body:  "Comprehensive custodian bank services for asset managers, family offices and fund structures across Luxembourg and Liechtenstein.",
    href:  "/intermediaries/services/custodian-bank",
  },
];

const locations = [
  { city: "Vaduz",      country: "Liechtenstein", desc: "Headquarters" },
  { city: "Zurich",     country: "Switzerland",   desc: "Swiss hub" },
  { city: "Luxembourg", country: "Luxembourg",    desc: "Fund solutions" },
  { city: "Singapore",  country: "Singapore",     desc: "Asia-Pacific" },
  { city: "Road Town",  country: "BVI",           desc: "Offshore expertise" },
];

const reasons = [
  "Tailor-made asset management and wealth planning",
  "Comprehensive, independent investment consulting",
  "High-quality service – understanding complex requirements",
  "Trust, transparency and reliability",
  "Protection of privacy at every step",
];

export default function HomePage() {
  const { location } = useLocale();
  const localMarket = location ? `${location.city}, ${location.country}` : null;

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "88vh", md: "90vh" },
          bgcolor: NAVY,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* subtle grid texture */}
        <Box
          sx={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(rgba(184,151,90,0.07) 1px,transparent 1px),
                              linear-gradient(90deg,rgba(184,151,90,0.07) 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
            pointerEvents: "none",
          }}
        />
        {/* radial glow */}
        <Box
          sx={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(184,151,90,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* top gold rule */}
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

        <Box sx={{ position: "relative", maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 }, width: "100%", py: 10 }}>
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            {/* Left copy */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Chip
                label="Switzerland · Liechtenstein · Since 1956"
                size="small"
                sx={{
                  mb: 3, bgcolor: "rgba(184,151,90,0.12)",
                  color: GOLD, fontWeight: 600,
                  fontSize: "0.68rem", letterSpacing: "0.08em",
                  border: `1px solid rgba(184,151,90,0.3)`,
                  borderRadius: "20px",
                }}
              />

              <Typography
                variant="h1"
                className="fade-up"
                sx={{
                  fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  mb: 3,
                  "& span": { color: GOLD },
                }}
              >
                Wealth Management<br />
                <span>from Liechtenstein</span>
              </Typography>

              {localMarket && (
                <Typography
                  className="fade-up"
                  sx={{ color: "rgba(255,255,255,0.58)", fontSize: "0.76rem", letterSpacing: "0.04em", mb: 2.5 }}
                >
                  Regional insight for {localMarket}
                </Typography>
              )}

              <Typography
                className="fade-up-d1"
                sx={{ color: "rgba(255,255,255,0.72)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.75, mb: 4, maxWidth: 520 }}
              >
                Your goals are our shared goals. We support you holistically and over the long term –
                as a strong, reliable partner combining stability, personal advice, and innovative
                financial solutions.
              </Typography>

              <Box className="fade-up-d2" sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 5 }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ py: 1.4, px: 3.5, fontSize: "0.9rem" }}
                >
                  Arrange an Appointment
                </Button>
                <Button
                  component={Link}
                  href="/private-banking/investing/private-banking"
                  variant="outlined"
                  sx={{
                    py: 1.4, px: 3.5, fontSize: "0.9rem",
                    borderColor: "rgba(255,255,255,0.25)",
                    color: "#fff",
                    "&:hover": { borderColor: GOLD, color: GOLD, bgcolor: "transparent" },
                  }}
                >
                  Explore Private Banking
                </Button>
              </Box>

              {/* mini-stats */}
              <Box
                className="fade-up-d3"
                sx={{
                  display: "flex", flexWrap: "wrap", gap: 4,
                  pt: 4, borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {[
                  { v: "CHF 53.7B", l: "AUM" },
                  { v: "994", l: "Employees" },
                  { v: "5", l: "Locations" },
                ].map((s) => (
                  <Box key={s.l}>
                    <Typography sx={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "1.7rem", color: GOLD, lineHeight: 1 }}>
                      {s.v}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", mt: 0.3 }}>
                      {s.l}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Right cards grid */}
            <Grid size={{ xs: 12, lg: 6 }} sx={{ display: { xs: "none", lg: "block" } }}>
              <Grid container spacing={2}>
                {[
                  { icon: SecurityIcon,       title: "Partnership for Progress", body: "70 years of trust, stability and innovation." },
                  { icon: EmojiEventsIcon,     title: "Award-Winning Service",    body: "Best medium-sized bank – ASWM 2026." },
                  { icon: LanguageIcon,        title: "Global Presence",          body: "5 strategic financial centres worldwide." },
                  { icon: AccountBalanceIcon,  title: "Independent Since 1956",   body: "Conservative balance sheet, long-term vision." },
                ].map((card, i) => (
                  <Grid key={card.title} size={6}>
                    <Box
                      sx={{
                        bgcolor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        borderRadius: "6px",
                        p: 2.5,
                        mt: i % 2 !== 0 ? 2 : 0,
                        transition: "all 0.22s",
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.09)",
                          borderColor: `rgba(184,151,90,0.35)`,
                        },
                      }}
                    >
                      <card.icon sx={{ color: GOLD, fontSize: 22, mb: 1.2 }} />
                      <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.88rem", mb: 0.6 }}>
                        {card.title}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", lineHeight: 1.6 }}>
                        {card.body}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          THREE PILLARS
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Box className="gold-rule" sx={{ mx: "auto", mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, color: NAVY }}>
              Why Shaelcore
            </Typography>
            <Typography sx={{ color: "#6b7280", mt: 1.5, maxWidth: 460, mx: "auto", fontSize: "0.95rem" }}>
              Three pillars that define our approach to every client relationship.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {pillars.map((p) => (
              <Grid key={p.title} size={{ xs: 12, md: 4 }}>
                <Card
                  component={Link}
                  href={p.href}
                  className="card-lift"
                  sx={{
                    textDecoration: "none", height: "100%",
                    display: "flex", flexDirection: "column",
                    "&:hover .arrow-icon": { transform: "translateX(4px)" },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box
                      sx={{
                        width: 48, height: 48, borderRadius: "6px",
                        bgcolor: NAVY,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <p.icon sx={{ color: GOLD, fontSize: 22 }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: NAVY, mb: 1.5, fontFamily: "Georgia,serif", fontSize: "1.1rem" }}>
                      {p.title}
                    </Typography>
                    <Typography sx={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.75 }}>
                      {p.body}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.6, mt: 3, color: GOLD, fontSize: "0.84rem", fontWeight: 600 }}>
                      Learn more{" "}
                      <ArrowForwardIcon className="arrow-icon" sx={{ fontSize: 15, transition: "transform 0.2s" }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          STATS BAND
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container>
            {stats.map((s, i) => (
              <Grid key={s.label} size={{ xs: 6, md: 3 }}>
                <Box
                  sx={{
                    textAlign: "center",
                    py: { xs: 3, md: 0 },
                    borderRight: i < 3 ? { md: "1px solid rgba(255,255,255,0.1)" } : "none",
                    px: 2,
                  }}
                >
                  <Typography sx={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: { xs: "2rem", md: "2.6rem" }, color: GOLD, lineHeight: 1 }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ color: "#fff", fontSize: "0.86rem", fontWeight: 500, mt: 1 }}>
                    {s.label}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.74rem", mt: 0.4 }}>
                    {s.sub}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", mb: 7, flexWrap: "wrap", gap: 2 }}>
            <Box>
              <Box className="gold-rule" sx={{ mb: 2 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, color: NAVY }}>
                Our Services
              </Typography>
            </Box>
            <Box
              component={Link}
              href="/private-banking/investing/private-banking"
              sx={{
                display: "flex", alignItems: "center", gap: 0.5,
                color: NAVY, fontSize: "0.88rem", fontWeight: 600,
                textDecoration: "none",
                "&:hover": { color: GOLD },
                transition: "color 0.2s",
                "& svg": { transition: "transform 0.2s" },
                "&:hover svg": { transform: "translateX(4px)" },
              }}
            >
              View all services <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </Box>
          </Box>

          <Grid container spacing={3}>
            {services.map((svc) => (
              <Grid key={svc.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  component={Link}
                  href={svc.href}
                  className="card-lift"
                  sx={{
                    textDecoration: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover .svc-icon-box": { bgcolor: NAVY },
                    "&:hover .svc-icon": { color: GOLD },
                    "&:hover .svc-arrow": { transform: "translateX(4px)" },
                  }}
                >
                  <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
                    <Box
                      className="svc-icon-box"
                      sx={{
                        width: 42, height: 42, borderRadius: "6px",
                        bgcolor: CREAM,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        mb: 2.5,
                        transition: "background 0.22s",
                      }}
                    >
                      <svc.icon className="svc-icon" sx={{ color: NAVY, fontSize: 20, transition: "color 0.22s" }} />
                    </Box>
                    <Typography sx={{ fontWeight: 600, color: NAVY, mb: 1, fontSize: "0.95rem" }}>
                      {svc.title}
                    </Typography>
                    <Typography sx={{ color: "#6b7280", fontSize: "0.84rem", lineHeight: 1.72 }}>
                      {svc.body}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2.5, color: GOLD, fontSize: "0.8rem", fontWeight: 600 }}>
                      Discover
                      <ArrowForwardIcon className="svc-arrow" sx={{ fontSize: 13, transition: "transform 0.2s" }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          ABOUT SPLIT
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container spacing={8} sx={{ alignItems: "flex-start" }}>
            {/* copy */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box className="gold-rule" sx={{ mb: 2.5 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" }, color: NAVY, mb: 3 }}>
                About Shaelcore
              </Typography>
              <Typography sx={{ color: "#4a5568", lineHeight: 1.8, mb: 2.5, fontSize: "0.95rem" }}>
                Shaelcore was founded on 4 April 1956 by Guido Feger in Vaduz, Liechtenstein. With
                above-average capitalisation, strong liquidity and around 1,000 committed employees,
                we are one of the three system-relevant banks in Liechtenstein.
              </Typography>
              <Typography sx={{ color: "#4a5568", lineHeight: 1.8, mb: 4, fontSize: "0.95rem" }}>
                Our purpose – <em>"Partnership for Progress"</em> – reflects what drives us:
                identifying opportunities together with you, taking responsibility, and shaping
                progress for nearly 70 years.
              </Typography>

              <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0, mb: 4, display: "flex", flexDirection: "column", gap: 1.5 }}>
                {reasons.map((r) => (
                  <Box key={r} component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: GOLD, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                    <Typography sx={{ color: "#4a5568", fontSize: "0.88rem" }}>{r}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                component={Link}
                href="/about-us/company-portrait"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                More about Shaelcore
              </Button>
            </Grid>

            {/* shareholders + stock */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography sx={{ fontWeight: 600, color: NAVY, mb: 2.5, fontSize: "1rem" }}>
                Anchor Shareholders
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
                {[
                  { name: "Stiftung Fürstlicher Kommerzienrat Guido Feger", role: "Largest Shareholder · Founded 1954" },
                  { name: "U.M.M. Hilti-Stiftung",                          role: "Strategic Anchor Shareholder" },
                  { name: "Marxer Stiftung für Bank- und Unternehmenswerte", role: "Strategic Anchor Shareholder" },
                ].map((s) => (
                  <Box
                    key={s.name}
                    sx={{
                      bgcolor: "#fff",
                      border: "1px solid #e2ddd6",
                      borderRadius: "4px",
                      p: 2.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      transition: "box-shadow 0.2s",
                      "&:hover": { boxShadow: "0 4px 16px -4px rgba(13,33,55,0.1)" },
                    }}
                  >
                    <Box sx={{ width: 3, height: 36, bgcolor: GOLD, borderRadius: 2, flexShrink: 0 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: "0.84rem", color: NAVY }}>{s.name}</Typography>
                      <Typography sx={{ fontSize: "0.74rem", color: "#9ca3af", mt: 0.3 }}>{s.role}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  bgcolor: NAVY, borderRadius: "4px", p: 3,
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3,
                }}
              >
                <Box>
                  <Typography variant="overline" sx={{ color: GOLD, fontSize: "0.62rem", letterSpacing: "0.1em" }}>
                    SIX Swiss Exchange
                  </Typography>
                  <Typography sx={{ color: "#fff", fontWeight: 600, mt: 0.3 }}>
                    Ticker: <span style={{ color: GOLD }}>VPBN</span>
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", mt: 0.3 }}>
                    Rated A– by Standard & Poor's
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography sx={{ color: GOLD, fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "1.5rem" }}>
                    CHF 100K
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}>
                    Deposit guarantee
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          QUOTE / RESEARCH BAND
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <FormatQuoteIcon sx={{ color: `${GOLD}40`, fontSize: 56, mb: 1 }} />
              <Typography
                sx={{
                  fontFamily: "Georgia,serif",
                  fontSize: { xs: "1.2rem", md: "1.55rem" },
                  color: "#fff",
                  fontWeight: 400,
                  lineHeight: 1.65,
                  mb: 3,
                  maxWidth: 620,
                }}
              >
                The markets change on a daily basis. But your decisions should still exude a sense of calm.
              </Typography>
              <Divider sx={{ borderColor: `${GOLD}30`, mb: 3, width: 60 }} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Typography sx={{ color: NAVY, fontWeight: 700, fontSize: "0.78rem" }}>TZ</Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", fontSize: "0.86rem", fontWeight: 600 }}>Thomas Ziegler</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.76rem" }}>Head of Markets</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "6px",
                  p: 4,
                }}
              >
                <Typography variant="overline" sx={{ color: GOLD, fontSize: "0.62rem", letterSpacing: "0.1em", mb: 2, display: "block" }}>
                  Market Intelligence
                </Typography>
                <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "1rem", mb: 1.5, fontFamily: "Georgia,serif" }}>
                  Research & Our View
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", lineHeight: 1.72, mb: 3 }}>
                  Our CIO Office continuously analyses international financial markets. As a client, you
                  access the same assessments and investment ideas our advisors rely on daily.
                </Typography>
                <Button
                  component={Link}
                  href="/research"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderColor: `${GOLD}60`,
                    color: GOLD,
                    "&:hover": { borderColor: GOLD, bgcolor: `${GOLD}10` },
                  }}
                >
                  To the Research Portal
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          LOCATIONS
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 }, textAlign: "center" }}>
          <Box className="gold-rule" sx={{ mx: "auto", mb: 2 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, color: NAVY, mb: 1.5 }}>
            Five Locations. One Standard.
          </Typography>
          <Typography sx={{ color: "#6b7280", mb: 6, fontSize: "0.95rem" }}>
            International reach with first-class local expertise.
          </Typography>
          <Grid container spacing={2.5} sx={{ justifyContent: "center" }}>
            {locations.map((loc) => (
              <Grid key={loc.city} size={{ xs: 6, sm: 4, md: "auto" }}>
                <Box
                  component={Link}
                  href="/contact"
                  className="card-lift"
                  sx={{
                    display: "block",
                    textDecoration: "none",
                    bgcolor: CREAM,
                    border: "1px solid #e2ddd6",
                    borderRadius: "6px",
                    p: 3,
                    minWidth: 130,
                    textAlign: "center",
                    "&:hover": { borderColor: GOLD },
                  }}
                >
                  <LocationOnIcon sx={{ color: GOLD, fontSize: 20, mb: 1 }} />
                  <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: "0.88rem" }}>{loc.city}</Typography>
                  <Typography sx={{ color: "#9ca3af", fontSize: "0.76rem" }}>{loc.country}</Typography>
                  <Typography sx={{ color: GOLD, fontSize: "0.72rem", mt: 0.5, fontWeight: 500 }}>{loc.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 680, mx: "auto", px: { xs: 2.5, sm: 5 }, textAlign: "center" }}>
          <Box className="gold-rule" sx={{ mx: "auto", mb: 3 }} />
          <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.6rem" }, color: NAVY, mb: 2 }}>
            Start Your Financial Journey
          </Typography>
          <Typography sx={{ color: "#4a5568", fontSize: "1rem", lineHeight: 1.8, mb: 5 }}>
            For nearly 70 years, Shaelcore has combined stability, personal advice and innovative
            financial solutions. Let's plan your route to greater financial security.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{ py: 1.4, px: 3.5, fontSize: "0.9rem" }}
            >
              Arrange an Appointment
            </Button>
            <Button
              component={Link}
              href="/research"
              variant="outlined"
              sx={{ py: 1.4, px: 3.5, fontSize: "0.9rem" }}
            >
              Read Our Research
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
