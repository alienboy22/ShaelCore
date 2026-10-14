import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PeopleIcon from "@mui/icons-material/People";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Private Banking & Wealth Services",
  description: "Explore ShaelCore's private-banking and wealth services, including investment advisory, planning, and financing.",
};

const NAVY = "#101418";
const GOLD = "#B86F43";
const CREAM = "#E9E1D2";

const services = [
  { iconName: "TrendingUpIcon", title: "Wealth Management",   sub: "Your strategy, managed with conviction.", href: "/private-banking/investing/wealth-management",   detail: "Together we define your objectives, risk appetite and strategy. Our specialists make investment decisions on your behalf, guided by our market view, continuously adjusting your portfolio." },
  { iconName: "StarBorderIcon", title: "Investment Advisory", sub: "You decide, backed by our expertise.",     href: "/private-banking/investing/investment-advisory",  detail: "You retain full control. We contribute market views, specific investment ideas, and expertise – monitoring your portfolio as a whole against your strategy and risk profile." },
  { iconName: "SecurityIcon",   title: "Wealth Planning",     sub: "What you've planned for life, considered financially.", href: "/private-banking/investing/wealth-planning", detail: "Retirement, pension planning, wealth transfer, or complex asset structures – we bring together all relevant financial considerations and show how today's decisions shape your future." },
  { iconName: "AccountBalanceIcon", title: "Financing",       sub: "Wealth creates more opportunity when it stays invested.", href: "/private-banking/financing",              detail: "We assess when financing makes more sense than liquidating investments. The result is a solution giving you flexibility without losing sight of your long-term financial goals." },
];

const faqs = [
  { q: "What level of assets does Private Banking start at?", a: "Service scope depends on your circumstances and objectives. Contact us to discuss your needs and the services that may be appropriate for you." },
  { q: "What services are included in Private Banking?", a: "Private Banking includes investment advisory, wealth management, wealth planning, financing, succession planning and international asset structure solutions – tailored to your personal situation." },
  { q: "What is the difference between investment advisory and wealth management?", a: "In investment advisory, you make decisions yourself with expert support. In wealth management, our specialists make investment decisions within a jointly defined strategy." },
  { q: "What does personal support mean?", a: "You have a dedicated client advisor as your central point of contact who knows your goals, understands your situation, and provides long-term support – including access to our full range of expertise." },
  { q: "How does ShaelCore's private-banking service work?", a: "We begin with a conversation about your goals, then explore which wealth-management, advisory, planning, and financing services fit your needs." },
  { q: "Can ShaelCore support international clients?", a: "We can discuss your circumstances and help identify relevant expertise and next steps for your situation." },
  { q: "Can entrepreneurs benefit from Private Banking?", a: "Yes. We provide individual solutions and a holistic view of private and corporate assets, covering liquidity, wealth planning, financing and succession." },
];

export default function PrivateBankingPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Private Banking" }]}
        title="Private Banking"
        titleAccent="with a broader view"
        subtitle="As wealth grows, it becomes about more than the next investment decision. New opportunities emerge, responsibilities evolve, and decisions increasingly involve your family, business or the next generation."
        body="ShaelCore brings private banking together with wealth management, investment advisory, planning, and financing—so you can explore the right combination for your circumstances."
        cta={{ label: "Arrange an Appointment", href: "/contact" }}
      />

      {/* When does banking become Private Banking */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container spacing={8} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mb: 2.5 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: NAVY, mb: 3 }}>
                When does banking become Private Banking?
              </Typography>
              <Typography sx={{ color: "#4a5568", lineHeight: 1.8, mb: 2.5, fontSize: "0.95rem" }}>
                For us, Private Banking does not begin at a certain number. It begins when financial
                decisions call for greater attention and when personal advice, sound expertise, and
                an understanding of the bigger picture make the difference.
              </Typography>
              <Typography sx={{ color: "#4a5568", lineHeight: 1.8, mb: 3.5, fontSize: "0.95rem" }}>
                Because what matters is not only where you are today, but what you want your wealth to achieve.
              </Typography>
              <Box
                component="a"
                href="/contact"
                sx={{
                  display: "inline-flex", alignItems: "center", gap: 0.7,
                  color: NAVY, fontWeight: 600, fontSize: "0.88rem",
                  textDecoration: "none",
                  "&:hover": { color: GOLD },
                  "& svg": { transition: "transform 0.2s" },
                  "&:hover svg": { transform: "translateX(4px)" },
                  transition: "color 0.2s",
                }}
              >
                Find out about Private Banking <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, lg: 6 }}>
              <Box sx={{ bgcolor: CREAM, borderRadius: "6px", p: 4 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2.5, mb: 3.5 }}>
                  <Box sx={{ width: 44, height: 44, bgcolor: NAVY, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <PeopleIcon sx={{ color: GOLD, fontSize: 20 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: NAVY, fontSize: "1rem", mb: 1 }}>
                      One contact. The whole of ShaelCore.
                    </Typography>
                    <Typography sx={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.75 }}>
                      Your personal client advisor knows your situation, understands your goals and
                      will support you over many years to come. If new issues arise, they ensure
                      you have the right expertise at hand at the right time.
                    </Typography>
                  </Box>
                </Box>
                <Button component="a" href="/contact" variant="contained" fullWidth sx={{ py: 1.2 }} endIcon={<ArrowForwardIcon />}>
                  Arrange a Consultation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Services */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mx: "auto", mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: "1.9rem", md: "2.4rem" }, color: NAVY }}>
              Services Working Together
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {services.map((s) => (
              <Grid key={s.title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Card
                  component="a"
                  href={s.href}
                  sx={{
                    textDecoration: "none", height: "100%", display: "flex", flexDirection: "column",
                    transition: "all 0.22s",
                    "&:hover": { boxShadow: "0 10px 30px -8px rgba(16,20,24,0.14)", transform: "translateY(-3px)" },
                    "&:hover .svc-icon-box": { bgcolor: NAVY },
                    "&:hover .svc-icon": { color: GOLD },
                  }}
                >
                  <CardContent sx={{ p: 3.5, flexGrow: 1 }}>
                    <Box className="svc-icon-box" sx={{ width: 44, height: 44, bgcolor: CREAM, borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", mb: 2.5, transition: "background 0.22s" }}>
                      {s.iconName === "TrendingUpIcon" && <TrendingUpIcon className="svc-icon" sx={{ color: NAVY, fontSize: 20, transition: "color 0.22s" }} />}
                      {s.iconName === "StarBorderIcon" && <StarBorderIcon className="svc-icon" sx={{ color: NAVY, fontSize: 20, transition: "color 0.22s" }} />}
                      {s.iconName === "SecurityIcon" && <SecurityIcon className="svc-icon" sx={{ color: NAVY, fontSize: 20, transition: "color 0.22s" }} />}
                      {s.iconName === "AccountBalanceIcon" && <AccountBalanceIcon className="svc-icon" sx={{ color: NAVY, fontSize: 20, transition: "color 0.22s" }} />}
                    </Box>
                    <Typography sx={{ fontWeight: 600, color: NAVY, mb: 0.6, fontSize: "0.96rem" }}>{s.title}</Typography>
                    <Typography sx={{ color: GOLD, fontSize: "0.78rem", fontStyle: "italic", mb: 1.5 }}>{s.sub}</Typography>
                    <Typography sx={{ color: "#6b7280", fontSize: "0.84rem", lineHeight: 1.72 }}>{s.detail}</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2.5, color: GOLD, fontSize: "0.8rem", fontWeight: 600 }}>
                      Discover {s.title} <ArrowForwardIcon sx={{ fontSize: 13 }} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Long-term perspective */}
      <Box sx={{ bgcolor: NAVY, py: { xs: 8, md: 10 } }}>
        <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Grid container spacing={6} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mb: 3 }} />
              <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.3rem" }, color: "#fff", mb: 3 }}>
                A longer-term view of wealth
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, mb: 2.5, fontSize: "0.95rem" }}>
                Financial decisions often connect to family, business, property, and plans for the next generation.
                We bring a broader view to those conversations and help you consider the options available.
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, mb: 4, fontSize: "0.95rem" }}>
                From investment advisory and wealth planning to financing, our services are designed to complement
                one another while keeping your priorities at the centre.
              </Typography>
              <Button component="a" href="/about-us/company-portrait" variant="outlined"
                sx={{ borderColor: `${GOLD}50`, color: GOLD, "&:hover": { borderColor: GOLD, bgcolor: `${GOLD}10` } }}
                endIcon={<ArrowForwardIcon />}
              >
                More about ShaelCore
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "8px", p: 4.5 }}>
                <FormatQuoteIcon sx={{ color: `${GOLD}50`, fontSize: 44, mb: 1.5 }} />
                <Typography sx={{ fontFamily: "Space Grotesk,sans-serif", color: "#fff", fontSize: "1.1rem", lineHeight: 1.7, mb: 3 }}>
                  "Good advice begins with understanding what matters to you—and seeing how each decision fits into the bigger picture."
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ width: 38, height: 38, borderRadius: "50%", bgcolor: GOLD, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography sx={{ color: NAVY, fontWeight: 700, fontSize: "0.72rem" }}>TZ</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ color: "#fff", fontSize: "0.86rem", fontWeight: 600 }}>ShaelCore Private Banking Team</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.76rem" }}>Wealth &amp; advisory</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* FAQ */}
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 800, mx: "auto", px: { xs: 2.5, sm: 5 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: GOLD, mx: "auto", mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: "1.8rem", md: "2.2rem" }, color: NAVY }}>
              Frequently Asked Questions
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {faqs.map((f, i) => (
              <Accordion key={i} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: GOLD }} />}>
                  <Typography sx={{ fontWeight: 500, color: NAVY, fontSize: "0.9rem" }}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: CREAM, px: 2.5, py: 2 }}>
                  <Typography sx={{ color: "#4a5568", fontSize: "0.88rem", lineHeight: 1.78 }}>{f.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA */}
      <Box sx={{ bgcolor: CREAM, py: { xs: 7, md: 10 } }}>
        <Box sx={{ maxWidth: 600, mx: "auto", px: { xs: 2.5, sm: 5 }, textAlign: "center" }}>
          <Typography variant="h3" sx={{ color: NAVY, mb: 2, fontFamily: "Space Grotesk,sans-serif" }}>Ready to begin?</Typography>
          <Typography sx={{ color: "#4a5568", mb: 4, lineHeight: 1.8 }}>
            We can describe our qualities; however, it is in your discussions with us that you will really see
            their true value – when advice turns into trust.
          </Typography>
          <Button component="a" href="/contact" variant="contained" endIcon={<ArrowForwardIcon />} sx={{ py: 1.4, px: 3.5 }}>
            Arrange an Appointment
          </Button>
        </Box>
      </Box>
    </>
  );
}
