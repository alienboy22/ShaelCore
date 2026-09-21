"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShieldIcon from "@mui/icons-material/Shield";
import LanguageIcon from "@mui/icons-material/Language";
import NatureIcon from "@mui/icons-material/Nature";
import BarChartIcon from "@mui/icons-material/BarChart";
import PageHero from "../../../components/PageHero";

const NAVY = "#0d2137";
const GOLD = "#b8975a";
const CREAM = "#f5f2ed";

const benefits = [
  { iconName: "AccessTimeIcon", text: "More time for you – leave investment decisions to our experts" },
  { iconName: "TrendingUpIcon", text: "Daily market monitoring and active management with strict risk control" },
  { iconName: "ShieldIcon",     text: "Tailored solutions using the best products available globally" },
  { iconName: "LanguageIcon",   text: "Broadly diversified portfolio with currency hedging" },
  { iconName: "NatureIcon",      text: "ESG risks and opportunities are integral to our investment process" },
  { iconName: "BarChartIcon",   text: "Personal support, comprehensive reporting and Research portal access" },
];

const mandates = [
  { name: "VP Vida Essential", min: "CHF 250,000", impl: "Fund-based, rapid market adjustment",     for: "Investors focused on costs and diversification",                 highlighted: false },
  { name: "VP Vida Advanced",  min: "CHF 750,000", impl: "Collective and direct investments",        for: "Greater customisation, access to research recommendations",      highlighted: true  },
  { name: "VP Vida Custom",    min: "CHF 2,000,000",impl: "Bespoke strategy & personal requirements",for: "Complex assets and highly specific requirements",                highlighted: false },
];

const partnerPoints = [
  { title: "International with EEA Access",        desc: "HQ in Liechtenstein with offices in Switzerland, Luxembourg, Singapore and BVI – ideal for cross-border structures." },
  { title: "Stability",                             desc: "Liechtenstein's stable legal framework and high regulatory certainty support complex wealth management solutions." },
  { title: "Personalised Service",                  desc: "Dedicated local contacts available via video, phone or in person." },
  { title: "International Investment Expertise",    desc: "Access to international markets, customised structuring, and exclusive investment ideas." },
  { title: "Independence Since 1956",               desc: "Conservative balance sheet policy – reliability, discretion, and foresight." },
];

export default function WealthManagementPage() {
  return (
    <>
      <PageHero
        badge="VP Vida Mandates"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Private Banking", href: "/private-banking/investing/private-banking" }, { label: "Wealth Management" }]}
        title="Wealth Management"
        titleAccent="with VP Vida"
        subtitle="Benefit from our investment know-how with an actively managed portfolio that consistently aligns with your objectives, risk tolerance and sustainability preferences."
        body="Leave wealth management to our experts. A discretionary mandate lets you focus on what matters most – while your wealth is invested professionally."
        cta={{ label: "Arrange an Appointment", href: "/contact" }}
      />

      {/* Benefits */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ mb: 7 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mb: 2.5 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: NAVY }}>
              Benefits of Wealth Management
            </Typography>
          </Box>
          <Grid container spacing={2.5}>
            {benefits.map((b) => (
              <Grid key={b.text} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Box sx={{
                  display: "flex", alignItems: "flex-start", gap: 2,
                  p: 3, border: "1px solid #e2ddd6", borderRadius: "6px",
                  transition: "all 0.2s",
                  "&:hover": { borderColor: GOLD, boxShadow: "0 4px 16px -4px rgba(13,33,55,0.1)" },
                }}>
                  <Box sx={{ width: 36, height: 36, bgcolor: CREAM, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {b.iconName === "AccessTimeIcon" && <AccessTimeIcon sx={{ color: GOLD, fontSize: 18 }} />}
                    {b.iconName === "TrendingUpIcon" && <TrendingUpIcon sx={{ color: GOLD, fontSize: 18 }} />}
                    {b.iconName === "ShieldIcon" && <ShieldIcon sx={{ color: GOLD, fontSize: 18 }} />}
                    {b.iconName === "LanguageIcon" && <LanguageIcon sx={{ color: GOLD, fontSize: 18 }} />}
                    {b.iconName === "NatureIcon" && <NatureIcon sx={{ color: GOLD, fontSize: 18 }} />}
                    {b.iconName === "BarChartIcon" && <BarChartIcon sx={{ color: GOLD, fontSize: 18 }} />}
                  </Box>
                  <Typography sx={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.7 }}>{b.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Mandates */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mx: "auto", mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: NAVY }}>
              Our VP Vida Mandates
            </Typography>
            <Typography sx={{ color: "#9ca3af", fontSize: "0.82rem", mt: 1 }}>
              * All mandates also available as Plus mandate with enhanced sustainability focus
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {mandates.map((m) => (
              <Grid key={m.name} size={{ xs: 12, md: 4 }}>
                <Card sx={{
                  height: "100%", display: "flex", flexDirection: "column",
                  bgcolor: m.highlighted ? NAVY : "#fff",
                  border: m.highlighted ? `1px solid rgba(184,151,90,0.3)` : "1px solid #e2ddd6",
                  boxShadow: m.highlighted ? "0 16px 48px -12px rgba(13,33,55,0.4)" : undefined,
                  transform: m.highlighted ? "translateY(-4px)" : undefined,
                }}>
                  <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {m.highlighted && (
                      <Chip label="Most Popular" size="small" sx={{ bgcolor: `${GOLD}20`, color: GOLD, fontWeight: 700, fontSize: "0.68rem", alignSelf: "flex-start", mb: 2, border: `1px solid ${GOLD}30` }} />
                    )}
                    <Typography variant="h4" sx={{ fontFamily: "Georgia,serif", color: m.highlighted ? "#fff" : NAVY, mb: 0.5, fontSize: "1.4rem" }}>
                      {m.name}
                    </Typography>
                    <Typography sx={{ color: m.highlighted ? "rgba(255,255,255,0.4)" : "#9ca3af", fontSize: "0.74rem", mb: 3 }}>
                      Also available as Plus mandate
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 2.5 }}>
                      {[
                        { l: "Minimum Investment", v: m.min },
                        { l: "Implementation",     v: m.impl },
                        { l: "Suitable For",       v: m.for },
                      ].map((row) => (
                        <Box key={row.l}>
                          <Typography variant="overline" sx={{ color: GOLD, fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                            {row.l}
                          </Typography>
                          <Typography sx={{ color: m.highlighted ? "rgba(255,255,255,0.85)" : "#4a5568", fontSize: "0.88rem", mt: 0.3, fontWeight: row.l === "Minimum Investment" ? 700 : 400 }}>
                            {row.v}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      component={Link}
                      href="/contact"
                      variant="contained"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        mt: 4,
                        bgcolor: m.highlighted ? GOLD : NAVY,
                        color: m.highlighted ? NAVY : "#fff",
                        "&:hover": { bgcolor: m.highlighted ? "#cdb07a" : GOLD, color: m.highlighted ? NAVY : NAVY },
                      }}
                    >
                      Get in Touch
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Investment process + sustainability */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mb: 2.5 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.2rem" }, color: NAVY, mb: 5 }}>
                Our Investment Process
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
                {[
                  { n: "01", t: "Strategic Focus",        d: "Long-term perspective. Our strategy is based on in-depth market analysis with the objective of steady asset growth over several years." },
                  { n: "02", t: "Tactical Flexibility",   d: "Regular adjustments (monthly or ad hoc) to capitalise on opportunities and mitigate risks at an early stage." },
                  { n: "03", t: "Transparent Reporting",  d: "Comprehensive, clear reporting through our Research portal – including the same assessments our advisors rely on." },
                ].map((s) => (
                  <Box key={s.n} sx={{ display: "flex", gap: 3 }}>
                    <Typography sx={{ fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "1.8rem", color: `${GOLD}40`, lineHeight: 1, flexShrink: 0, width: 44 }}>
                      {s.n}
                    </Typography>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: NAVY, mb: 0.6, fontSize: "0.96rem" }}>{s.t}</Typography>
                      <Typography sx={{ color: "#6b7280", fontSize: "0.88rem", lineHeight: 1.72 }}>{s.d}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                component={Link}
                href="/research"
                sx={{
                  display: "inline-flex", alignItems: "center", gap: 0.7, mt: 4,
                  color: NAVY, fontWeight: 600, fontSize: "0.88rem",
                  textDecoration: "none", "&:hover": { color: GOLD },
                  "& svg": { transition: "transform 0.2s" },
                  "&:hover svg": { transform: "translateX(4px)" },
                  transition: "color 0.2s",
                }}
              >
                Read our publication "Our View" <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ bgcolor: CREAM, borderRadius: "8px", p: 4.5 }}>
                <Box sx={{ width: 40, height: 40, bgcolor: "#d1fae5", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                  <NatureIcon sx={{ color: "#065f46", fontSize: 20 }} />
                </Box>
                <Typography variant="h4" sx={{ fontFamily: "Georgia,serif", color: NAVY, mb: 2 }}>
                  Focus on Sustainability
                </Typography>
                <Typography sx={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.78, mb: 3.5 }}>
                  Our investment strategies are also available as Plus strategies, in which sustainability
                  factors play a greater role in investment decisions. This option is particularly suitable
                  for clients with a strong preference for sustainability.
                </Typography>
                <Button component={Link} href="/sustainability" variant="contained" endIcon={<ArrowForwardIcon />}>
                  Invest Sustainably
                </Button>
              </Box>

              {/* Why ShaelCore */}
              <Box sx={{ mt: 3, bgcolor: NAVY, borderRadius: "8px", p: 4 }}>
                <Typography variant="overline" sx={{ color: GOLD, fontSize: "0.62rem", letterSpacing: "0.1em", mb: 2.5, display: "block" }}>
                  Your Reliable Partner
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {partnerPoints.map((p) => (
                    <Box key={p.title} sx={{ display: "flex", gap: 1.5 }}>
                      <Box sx={{ width: 3, bgcolor: GOLD, borderRadius: 2, flexShrink: 0, mt: 0.3 }} />
                      <Box>
                        <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "0.84rem" }}>{p.title}</Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem", mt: 0.3, lineHeight: 1.6 }}>{p.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 7, md: 10 } }}>
        <Box sx={{ maxWidth: 580, mx: "auto", px: { xs: 2.5, sm: 5 }, textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: NAVY, mb: 2, fontFamily: "Georgia,serif" }}>Ready to get started?</Typography>
          <Typography sx={{ color: "#4a5568", mb: 4, lineHeight: 1.8, fontSize: "0.95rem" }}>
            Our advisors will help you find the right VP Vida mandate for your situation and goals.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            <Button component={Link} href="/contact" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ py: 1.3, px: 3 }}>
              Arrange an Appointment
            </Button>
            <Button component={Link} href="/private-banking/investing/investment-advisory" variant="outlined" sx={{ py: 1.3, px: 3 }}>
              Explore Investment Advisory
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
