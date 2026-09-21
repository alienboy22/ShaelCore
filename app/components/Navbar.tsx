"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { LinkComponent } from "@/lib/LinkComponent";
import { localeLabel } from "@/lib/locale";
import { useLocale } from "@/app/locale/LocaleProvider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

// Wrapper component for Next.js Link with Material-UI components
const LocalLinkComponent = LinkComponent;

const nav = [
  {
    label: "Private Banking",
    href: "/private-banking/investing/private-banking",
    children: [
      { label: "Private Banking Overview", href: "/private-banking/investing/private-banking" },
      { label: "Wealth Management",        href: "/private-banking/investing/wealth-management" },
      { label: "Investment Advisory",      href: "/private-banking/investing/investment-advisory" },
      { label: "Wealth Planning",          href: "/private-banking/investing/wealth-planning" },
      { label: "Financing",                href: "/private-banking/financing" },
    ],
  },
  {
    label: "Intermediaries",
    href: "/intermediaries/services/custodian-bank",
    children: [
      { label: "Custodian Bank",    href: "/intermediaries/services/custodian-bank" },
      { label: "Fund Solutions",    href: "/intermediaries/services/custodian-bank" },
      { label: "Execution Only",    href: "/intermediaries/services/custodian-bank" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us/company-portrait",
    children: [
      { label: "Company Portrait",      href: "/about-us/company-portrait" },
      { label: "Sustainability",         href: "/sustainability" },
      { label: "Research & Our View",    href: "/research" },
    ],
  },
  { label: "Contact", href: "/contact", children: [] },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { locale } = useLocale();
  const [scrolled, setScrolled]         = useState(false);
  const [drawerOpen, setDrawerOpen]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState<string | null>(null);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [searchVal, setSearchVal]       = useState("");
  const [anchor, setAnchor]             = useState<{ el: HTMLElement; label: string } | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cancelScheduledClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = (e: React.MouseEvent<HTMLElement>, label: string) => {
    cancelScheduledClose();
    setAnchor({ el: e.currentTarget, label });
  };
  const closeMenu = () => {
    cancelScheduledClose();
    setAnchor(null);
  };
  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimer.current = setTimeout(() => {
      setAnchor(null);
      closeTimer.current = null;
    }, 120);
  };

  return (
    <>
      {/* ── Top utility bar ── */}
      <Box
        sx={{
          bgcolor: "#0d2137",
          display: { xs: "none", md: "block" },
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1201,
        }}
      >
        <Box
          sx={{
            maxWidth: 1280,
            mx: "auto",
            px: 3,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.07em" }}>
            Switzerland · Private Banking &amp; Intermediaries
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Box
              component="a"
              href="tel:+41432126000"
              sx={{
                display: "flex", alignItems: "center", gap: 0.6,
                color: "rgba(255,255,255,0.55)", fontSize: "0.72rem",
                textDecoration: "none",
                "&:hover": { color: "#b8975a" },
                transition: "color 0.2s",
              }}
            >
              <PhoneIcon sx={{ fontSize: 11 }} /> +41 43 212 60 00
            </Box>
            <Box
              component={LocalLinkComponent}
              href="/contact"
              sx={{
                color: "rgba(255,255,255,0.55)", fontSize: "0.72rem",
                textDecoration: "none",
                "&:hover": { color: "#b8975a" },
                transition: "color 0.2s",
              }}
            >
              Contact
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "rgba(255,255,255,0.55)", fontSize: "0.72rem" }}>
              <LanguageIcon sx={{ fontSize: 11 }} /> {localeLabel(locale)}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Main navbar ── */}
      <AppBar
        elevation={scrolled ? 2 : 0}
        sx={{
          top: { xs: 0, md: 34 },
          bgcolor: "#ffffff",
          borderBottom: "1px solid",
          borderColor: scrolled ? "transparent" : "#e8e2d9",
          transition: "box-shadow 0.25s, border-color 0.25s",
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1280,
            mx: "auto",
            width: "100%",
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 60, md: 68 },
          }}
          disableGutters
        >
          {/* Logo */}
          <Box
            component={LocalLinkComponent}
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", flexShrink: 0 }}
          >
            <Box
              sx={{
                width: 36, height: 36,
                bgcolor: "#0d2137",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "2px",
              }}
            >
              <Typography sx={{ color: "#b8975a", fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.04em" }}>
                SC
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#0d2137",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Shaelcore
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#b8975a",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  mt: 0.2,
                }}
              >
                Partnership for Progress
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" }, justifyContent: "center", gap: 0.5 }}>
            {nav.map((item) =>
              item.children.length > 0 ? (
                <Button
                  key={item.label}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        fontSize: "1rem !important",
                        transition: "transform 0.2s",
                        transform: anchor?.label === item.label ? "rotate(180deg)" : "rotate(0)",
                      }}
                    />
                  }
                  onMouseEnter={(e) => openMenu(e, item.label)}
                  onMouseLeave={scheduleClose}
                  onClick={(e) => openMenu(e, item.label)}
                  sx={{
                    color: anchor?.label === item.label || pathname.startsWith(item.href)
                      ? "#0d2137"
                      : "#374151",
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    px: 1.8,
                    py: 0.9,
                    borderRadius: "2px",
                    bgcolor: anchor?.label === item.label ? "#f5f2ed" : "transparent",
                    "&:hover": { bgcolor: "#f5f2ed", color: "#0d2137" },
                  }}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  component={LocalLinkComponent}
                  href={item.href}
                  sx={{
                    color: pathname === item.href ? "#0d2137" : "#374151",
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    px: 1.8,
                    py: 0.9,
                    borderRadius: "2px",
                    "&:hover": { bgcolor: "#f5f2ed", color: "#0d2137" },
                  }}
                >
                  {item.label}
                </Button>
              )
            )}
          </Box>

          {/* Right actions */}
          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 1.5 }}>
            {searchOpen ? (
              <Box
                sx={{
                  display: "flex", alignItems: "center",
                  borderBottom: "1px solid #b8975a",
                  pb: 0.3, gap: 1,
                }}
              >
                <InputBase
                  autoFocus
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search…"
                  sx={{ fontSize: "0.84rem", color: "#0d2137", width: 160 }}
                />
                <IconButton size="small" onClick={() => { setSearchOpen(false); setSearchVal(""); }}>
                  <CloseIcon sx={{ fontSize: 14, color: "#9ca3af" }} />
                </IconButton>
              </Box>
            ) : (
              <IconButton size="small" onClick={() => setSearchOpen(true)} sx={{ color: "#374151" }}>
                <SearchIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
            
            {status === "authenticated" && session?.user ? (
              <>
                <Button
                  component={Link}
                  href="/dashboard"
                  variant="text"
                  sx={{ fontSize: "0.8rem", textTransform: "none", color: "#0d2137" }}
                >
                  Dashboard
                </Button>
                <Button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  variant="contained"
                  color="primary"
                  sx={{ fontSize: "0.8rem", px: 2.5, py: 0.9, whiteSpace: "nowrap" }}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  href="/auth/login"
                  variant="text"
                  sx={{ fontSize: "0.8rem", textTransform: "none", color: "#0d2137" }}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  color="primary"
                  sx={{ fontSize: "0.8rem", px: 2.5, py: 0.9, whiteSpace: "nowrap" }}
                >
                  Arrange Appointment
                </Button>
              </>
            )}
          </Box>

          {/* Mobile burger */}
          <Box sx={{ display: { xs: "flex", lg: "none" }, ml: "auto" }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#0d2137" }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ── Dropdown popover ── */}
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor?.el}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        slotProps={{
          paper: {
            onMouseEnter: cancelScheduledClose,
            onMouseLeave: closeMenu,
            sx: {
              mt: 0.5,
              minWidth: 240,
              borderRadius: "3px",
              boxShadow: "0 8px 32px -8px rgba(13,33,55,0.18)",
              border: "1px solid #e8e2d9",
              py: 0.5,
              pointerEvents: "auto",
            },
          },
        }}
        disableRestoreFocus
        sx={{ pointerEvents: "none" }}
      >
        <MenuList dense sx={{ py: 0.5 }}>
          {nav
            .find((n) => n.label === anchor?.label)
            ?.children.map((child) => (
              <MenuItem
                key={`${anchor?.label}-${child.label}`}
                component={LocalLinkComponent}
                href={child.href}
                onClick={closeMenu}
                sx={{
                  px: 2.5,
                  py: 1.2,
                  fontSize: "0.84rem",
                  color: "#374151",
                  borderLeft: "3px solid transparent",
                  "&:hover": {
                    bgcolor: "#f5f2ed",
                    borderLeftColor: "#b8975a",
                    color: "#0d2137",
                  },
                  transition: "all 0.15s",
                }}
              >
                {child.label}
              </MenuItem>
            ))}
        </MenuList>
      </Popover>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: { sx: { width: 300, bgcolor: "#ffffff" } },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2.5, py: 2 }}>
          <Box
            component={LocalLinkComponent}
            href="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.2, textDecoration: "none" }}
            onClick={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 30, height: 30, bgcolor: "#0d2137", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ color: "#b8975a", fontWeight: 800, fontSize: "0.7rem" }}>SC</Typography>
            </Box>
            <Typography sx={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#0d2137", fontSize: "1rem" }}>
              Shaelcore
            </Typography>
          </Box>
          <IconButton onClick={() => setDrawerOpen(false)} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Divider />
        <List dense sx={{ px: 1, pt: 1 }}>
          {nav.map((item) => (
            <Box key={item.label}>
              {item.children.length > 0 ? (
                <>
                  <ListItemButton
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                    sx={{ borderRadius: "2px", px: 2 }}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: { sx: { fontSize: "0.9rem", fontWeight: 500, color: "#0d2137" } },
                      }}
                    />
                    {mobileOpen === item.label ? (
                      <ExpandLess sx={{ color: "#b8975a", fontSize: 18 }} />
                    ) : (
                      <ExpandMore sx={{ color: "#9ca3af", fontSize: 18 }} />
                    )}
                  </ListItemButton>
                  <Collapse in={mobileOpen === item.label} timeout="auto" unmountOnExit>
                    <List dense disablePadding sx={{ pl: 2.5, borderLeft: "2px solid #b8975a", ml: 2, my: 0.5 }}>
                      {item.children.map((child) => (
                        <ListItemButton
                          key={child.href}
                          component={LocalLinkComponent}
                          href={child.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{ borderRadius: "2px", px: 1.5, py: 0.8 }}
                        >
                          <ListItemText
                            primary={child.label}
                            slotProps={{
                              primary: { sx: { fontSize: "0.82rem", color: "#4a5568" } },
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={LocalLinkComponent}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ borderRadius: "2px", px: 2 }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: { sx: { fontSize: "0.9rem", fontWeight: 500, color: "#0d2137" } },
                    }}
                  />
                </ListItemButton>
              )}
            </Box>
          ))}
        </List>
        <Box sx={{ mt: "auto", p: 2.5 }}>
          <Button
            fullWidth
            variant="contained"
            component={LocalLinkComponent}
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            sx={{ py: 1.2 }}
          >
            Arrange Appointment
          </Button>
          {status === "authenticated" && session?.user ? (
            <>
              <Button
                fullWidth
                component={Link}
                href="/dashboard"
                onClick={() => setDrawerOpen(false)}
                sx={{ mt: 1.2, py: 1.1, color: "#0d2137" }}
              >
                Dashboard
              </Button>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => { setDrawerOpen(false); void signOut({ callbackUrl: "/" }); }}
                sx={{ mt: 1.2, py: 1.1, color: "#0d2137", borderColor: "#b8975a" }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button
              fullWidth
              component={Link}
              href="/auth/login"
              onClick={() => setDrawerOpen(false)}
              sx={{ mt: 1.2, py: 1.1, color: "#0d2137" }}
            >
              Sign In
            </Button>
          )}
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              component="a"
              href="tel:+41432126000"
              sx={{ display: "flex", alignItems: "center", gap: 0.6, color: "#6b7280", fontSize: "0.78rem", textDecoration: "none" }}
            >
              <PhoneIcon sx={{ fontSize: 13 }} /> +41 43 212 60 00
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
