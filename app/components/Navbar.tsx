"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { localeLabel } from "@/lib/locale";
import { useLocale } from "@/app/locale/LocaleProvider";

const serviceGroups = [
  {
    title: "Wealth & advisory",
    links: [
      { label: "Private banking", href: "/private-banking/investing/private-banking" },
      { label: "Wealth management", href: "/private-banking/investing/wealth-management" },
      { label: "Investment advisory", href: "/private-banking/investing/investment-advisory" },
      { label: "Wealth planning", href: "/private-banking/investing/wealth-planning" },
      { label: "Financing", href: "/private-banking/financing" },
    ],
  },
  {
    title: "Institutional services",
    links: [
      { label: "Custodian bank", href: "/intermediaries/services/custodian-bank" },
      { label: "Fund solutions", href: "/intermediaries/services/custodian-bank#fund-solutions" },
      { label: "Sustainable investing", href: "/sustainability" },
      { label: "Research & perspectives", href: "/research" },
    ],
  },
  {
    title: "Travel & experiences",
    links: [
      { label: "Travel & tours", href: "/travel-tours" },
      { label: "Business travel", href: "/travel-tours#business-travel" },
      { label: "Curated journeys", href: "/travel-tours#curated-journeys" },
    ],
  },
  {
    title: "Real estate",
    links: [
      { label: "Residential property", href: "/real-estate#residential" },
      { label: "Commercial property", href: "/real-estate#commercial" },
      { label: "Property advisory", href: "/real-estate#advisory" },
    ],
  },
];

const companyLinks = [
  { label: "About ShaelCore", href: "/about-us/company-portrait" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Research & our view", href: "/research" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { locale } = useLocale();
  const [servicesAnchor, setServicesAnchor] = useState<HTMLElement | null>(null);
  const [companyAnchor, setCompanyAnchor] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const closeMenus = () => {
    setServicesAnchor(null);
    setCompanyAnchor(null);
    setDrawerOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "#101418",
          display: { xs: "none", md: "block" },
          position: "fixed",
          inset: "0 0 auto",
          zIndex: 1201,
        }}
      >
        <Box
          sx={{
            maxWidth: 1320,
            mx: "auto",
            px: 4,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "rgba(255,255,255,0.66)", fontSize: "0.67rem", letterSpacing: "0.08em" }}>
            SHAELCORE CAPITAL HOLDINGS <Box component="span" sx={{ color: "#B86F43", mx: 0.8 }}>·</Box> ZURICH, SWITZERLAND
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.58)", fontSize: "0.68rem" }}>
              {localeLabel(locale)}
            </Typography>
            <Box component={Link} href="/contact" sx={{ color: "#F0B968", textDecoration: "none", fontSize: "0.68rem" }}>
              Make an enquiry
            </Box>
          </Box>
        </Box>
      </Box>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: { xs: 0, md: 30 },
          bgcolor: "rgba(247,244,236,0.97)",
          color: "#101418",
          borderBottom: "1px solid #D8CDBB",
          backdropFilter: "blur(12px)",
          zIndex: 1200,
        }}
      >
        <Toolbar
          disableGutters
          sx={{ maxWidth: 1320, mx: "auto", width: "100%", px: { xs: 2, sm: 3.5 }, minHeight: { xs: 66, md: 72 } }}
        >
          <Box
            component={Link}
            href="/"
            onClick={closeMenus}
            sx={{ display: "flex", alignItems: "center", gap: 1.25, color: "inherit", textDecoration: "none", flexShrink: 0 }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                border: "1px solid #B86F43",
                color: "#101418",
                display: "grid",
                placeItems: "center",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.4rem",
                lineHeight: 1,
              }}
            >
              S
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "Space Grotesk,sans-serif", fontWeight: 700, letterSpacing: "0.18em", fontSize: "1.02rem", lineHeight: 1.15 }}>
                SHAELCORE
              </Typography>
              <Typography sx={{ color: "#8F4E2F", fontSize: "0.52rem", letterSpacing: "0.19em", lineHeight: 1.4 }}>
                CAPITAL HOLDINGS
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flex: 1, display: { xs: "none", lg: "flex" }, alignItems: "center", justifyContent: "center", gap: 0.4 }}>
            <Button
              onClick={(event) => { setCompanyAnchor(null); setServicesAnchor(servicesAnchor ? null : event.currentTarget); }}
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{ color: "#303A3B", fontSize: "0.82rem", px: 1.5, "&:hover": { bgcolor: "#f1eee5" } }}
            >
              Our services
            </Button>
            <Button
              onClick={(event) => { setServicesAnchor(null); setCompanyAnchor(companyAnchor ? null : event.currentTarget); }}
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: "1rem !important" }} />}
              sx={{ color: pathname.startsWith("/about-us") ? "#101418" : "#303A3B", fontSize: "0.82rem", px: 1.5, "&:hover": { bgcolor: "#f1eee5" } }}
            >
              About ShaelCore
            </Button>
            <Button component={Link} href="/contact" sx={{ color: pathname === "/contact" ? "#101418" : "#303A3B", fontSize: "0.82rem", px: 1.5, "&:hover": { bgcolor: "#f1eee5" } }}>
              Contact
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1.2, flexShrink: 0 }}>
            {status === "authenticated" && session?.user ? (
              <>
                <Button component={Link} href="/dashboard" sx={{ color: "#101418", fontSize: "0.8rem" }}>Client portal</Button>
                <Button onClick={() => void signOut({ callbackUrl: "/" })} variant="outlined" sx={{ borderColor: "#B86F43", color: "#101418", px: 2 }}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} href="/auth/login" sx={{ color: "#101418", fontSize: "0.8rem" }}>Client login</Button>
                <Button component={Link} href="/contact" variant="contained" color="primary" sx={{ px: 2.1, py: 0.9, whiteSpace: "nowrap" }}>
                  Start a conversation
                </Button>
              </>
            )}
          </Box>

          <IconButton aria-label="Open navigation" onClick={() => setDrawerOpen(true)} sx={{ display: { xs: "inline-flex", lg: "none" }, ml: "auto", color: "#101418" }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Popover
        open={Boolean(servicesAnchor)}
        anchorEl={servicesAnchor}
        onClose={() => setServicesAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{ paper: { sx: { mt: 1, width: { sm: 720, md: 920 }, maxWidth: "calc(100vw - 24px)", p: 3, border: "1px solid #D8CDBB", borderRadius: 0, boxShadow: "0 18px 48px rgba(16,20,24,0.16)" } } }}
      >
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" }, gap: { xs: 2, md: 3 } }}>
          {serviceGroups.map((group) => (
            <Box key={group.title}>
              <Typography sx={{ color: "#8F4E2F", fontSize: "0.66rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, mb: 1.4 }}>
                {group.title}
              </Typography>
              <Box sx={{ display: "grid", gap: 0.75 }}>
                {group.links.map((item) => (
                  <Box component={Link} key={item.label} href={item.href} onClick={() => setServicesAnchor(null)} sx={{ color: "#303A3B", textDecoration: "none", fontSize: "0.81rem", lineHeight: 1.5, "&:hover": { color: "#8F4E2F" } }}>
                    {item.label}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Popover>

      <Popover
        open={Boolean(companyAnchor)}
        anchorEl={companyAnchor}
        onClose={() => setCompanyAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        slotProps={{ paper: { sx: { mt: 1, minWidth: 240, p: 1, border: "1px solid #D8CDBB", borderRadius: 0, boxShadow: "0 18px 48px rgba(16,20,24,0.16)" } } }}
      >
        {companyLinks.map((item) => (
          <Box component={Link} key={item.label} href={item.href} onClick={() => setCompanyAnchor(null)} sx={{ display: "block", px: 1.5, py: 1.2, color: "#303A3B", textDecoration: "none", fontSize: "0.84rem", "&:hover": { bgcolor: "#E9E1D2" } }}>
            {item.label}
          </Box>
        ))}
      </Popover>

      <Drawer anchor="right" open={drawerOpen} onClose={closeMenus} slotProps={{ paper: { sx: { width: "min(420px, 92vw)", bgcolor: "#F7F4EC" } } }}>
        <Box sx={{ px: 2.5, py: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ color: "#101418", fontFamily: "Space Grotesk,sans-serif", fontWeight: 700, letterSpacing: "0.16em" }}>SHAELCORE</Typography>
          <IconButton aria-label="Close navigation" onClick={closeMenus}><CloseIcon /></IconButton>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button fullWidth onClick={() => setMobileServicesOpen((open) => !open)} sx={{ justifyContent: "space-between", color: "#101418", py: 1.2 }}>
            Our services {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          <Collapse in={mobileServicesOpen} unmountOnExit>
            <Box sx={{ pl: 1, pb: 1 }}>
              {serviceGroups.map((group) => (
                <Box key={group.title} sx={{ mb: 1.5 }}>
                  <Typography sx={{ color: "#8F4E2F", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, px: 1.5, py: 0.8 }}>
                    {group.title}
                  </Typography>
                  {group.links.map((item) => (
                    <Box component={Link} key={item.label} href={item.href} onClick={closeMenus} sx={{ display: "block", px: 1.5, py: 0.75, color: "#505B5A", textDecoration: "none", fontSize: "0.84rem" }}>
                      {item.label}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </Collapse>

          <Button fullWidth onClick={() => setMobileCompanyOpen((open) => !open)} sx={{ justifyContent: "space-between", color: "#101418", py: 1.2 }}>
            About ShaelCore {mobileCompanyOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Button>
          <Collapse in={mobileCompanyOpen} unmountOnExit>
            <Box sx={{ pl: 1, pb: 1 }}>
              {companyLinks.map((item) => (
                <Box component={Link} key={item.label} href={item.href} onClick={closeMenus} sx={{ display: "block", px: 1.5, py: 0.8, color: "#505B5A", textDecoration: "none", fontSize: "0.84rem" }}>
                  {item.label}
                </Box>
              ))}
            </Box>
          </Collapse>
          <Button fullWidth component={Link} href="/contact" onClick={closeMenus} sx={{ justifyContent: "flex-start", color: "#101418", py: 1.2 }}>Contact</Button>
          <Divider sx={{ my: 2 }} />
          {status === "authenticated" && session?.user ? (
            <>
              <Button fullWidth component={Link} href="/dashboard" onClick={closeMenus} variant="contained" sx={{ mb: 1 }}>Client portal</Button>
              <Button fullWidth onClick={() => { closeMenus(); void signOut({ callbackUrl: "/" }); }} variant="outlined">Sign out</Button>
            </>
          ) : (
            <>
              <Button fullWidth component={Link} href="/contact" onClick={closeMenus} variant="contained" sx={{ mb: 1 }}>Start a conversation</Button>
              <Button fullWidth component={Link} href="/auth/login" onClick={closeMenus} variant="outlined">Client login</Button>
            </>
          )}
          <Typography sx={{ color: "#6C7470", fontSize: "0.72rem", mt: 2.5 }}>{localeLabel(locale)}</Typography>
        </Box>
      </Drawer>
    </>
  );
}
