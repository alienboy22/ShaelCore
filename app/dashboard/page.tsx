"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/app/locale/LocaleProvider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const NAVY = "#0d2137";
const GOLD = "#b8975a";

const regions = {
  "en-CH": {
    label: "English (Switzerland)", locale: "en-CH", currency: "CHF", portfolio: 2_500_000, performance: 114_500,
    copy: { portal: "Client portal", greeting: "Good to see you", overview: "Here is an overview of your relationship with Shaelcore.", total: "Total portfolio value", performance: "Investment performance", year: "+4.8% this year", since: "Since 1 January 2026", accounts: "Your accounts", accountDescription: "Your current banking relationship at a glance.", primary: "Primary Account", appointment: "Speak with your advisor", next: "Plan your next move", nextBody: "Your advisor can help you review your investment strategy and long-term priorities.", arrange: "Arrange an appointment" },
  },
  "en-US": {
    label: "English (United States)", locale: "en-US", currency: "USD", portfolio: 2_750_000, performance: 126_000,
    copy: { portal: "Client portal", greeting: "Good to see you", overview: "Here is an overview of your relationship with Shaelcore.", total: "Total portfolio value", performance: "Investment performance", year: "+4.8% this year", since: "Since January 1, 2026", accounts: "Your accounts", accountDescription: "Your current banking relationship at a glance.", primary: "Primary Account", appointment: "Speak with your advisor", next: "Plan your next move", nextBody: "Your advisor can help you review your investment strategy and long-term priorities.", arrange: "Arrange an appointment" },
  },
  "en-NG": {
    label: "English (Nigeria)", locale: "en-NG", currency: "NGN", portfolio: 3_750_000_000, performance: 172_500_000,
    copy: { portal: "Client portal", greeting: "Good to see you", overview: "Here is an overview of your relationship with Shaelcore.", total: "Total portfolio value", performance: "Investment performance", year: "+4.8% this year", since: "Since 1 January 2026", accounts: "Your accounts", accountDescription: "Your current banking relationship at a glance.", primary: "Primary Account", appointment: "Speak with your advisor", next: "Plan your next move", nextBody: "Your advisor can help you review your investment strategy and long-term priorities.", arrange: "Arrange an appointment" },
  },
  "en-GB": {
    label: "English (United Kingdom)", locale: "en-GB", currency: "GBP", portfolio: 1_980_000, performance: 91_000,
    copy: { portal: "Client portal", greeting: "Good to see you", overview: "Here is an overview of your relationship with Shaelcore.", total: "Total portfolio value", performance: "Investment performance", year: "+4.8% this year", since: "Since 1 January 2026", accounts: "Your accounts", accountDescription: "Your current banking relationship at a glance.", primary: "Primary Account", appointment: "Speak with your advisor", next: "Plan your next move", nextBody: "Your advisor can help you review your investment strategy and long-term priorities.", arrange: "Arrange an appointment" },
  },
  "de-DE": {
    label: "Deutsch (Deutschland)", locale: "de-DE", currency: "EUR", portfolio: 2_300_000, performance: 105_800,
    copy: { portal: "Kundenportal", greeting: "Schön, Sie zu sehen", overview: "Hier finden Sie einen Überblick über Ihre Beziehung zu Shaelcore.", total: "Gesamtwert des Portfolios", performance: "Anlageperformance", year: "+4,8 % in diesem Jahr", since: "Seit dem 1. Januar 2026", accounts: "Ihre Konten", accountDescription: "Ihre aktuelle Bankbeziehung auf einen Blick.", primary: "Hauptkonto", appointment: "Mit Ihrem Berater sprechen", next: "Planen Sie Ihren nächsten Schritt", nextBody: "Ihr Berater unterstützt Sie bei der Überprüfung Ihrer Anlagestrategie und langfristigen Ziele.", arrange: "Termin vereinbaren" },
  },
} as const;

type RegionKey = keyof typeof regions;

function isRegionKey(value: string | null): value is RegionKey {
  return Boolean(value && value in regions);
}

const regionAliases: Record<string, RegionKey> = {
  "en-us": "en-US",
  "en-ng": "en-NG",
  "en-uk": "en-GB",
  "deu-ger": "de-DE",
};

function regionFromUrl(): RegionKey | null {
  if (typeof window === "undefined") return null;

  const requestedRegion = new URLSearchParams(window.location.search).get("locale");
  if (isRegionKey(requestedRegion)) return requestedRegion;
  return regionAliases[requestedRegion?.toLowerCase() ?? ""] ?? null;
}

function useDashboardRegion() {
  return useSyncExternalStore(
    (notify) => {
      window.addEventListener("popstate", notify);
      return () => window.removeEventListener("popstate", notify);
    },
    regionFromUrl,
    () => null,
  );
}

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const requestedRegion = useDashboardRegion();
  const { locale: detectedLocale, location, ready, setLocale, tunnel } = useLocale();
  const region = requestedRegion ?? detectedLocale;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace(`/auth/login?callbackUrl=${encodeURIComponent(`/dashboard?locale=${region}`)}`);
    }
  }, [region, router, status]);

  if (status !== "authenticated") {
    return (
      <Box sx={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <CircularProgress sx={{ color: GOLD }} />
      </Box>
    );
  }

  const firstName = session.user?.name?.split(" ")[0] || "there";
  const selectedRegion = regions[region];
  const { copy } = selectedRegion;
  const money = (amount: number) => new Intl.NumberFormat(selectedRegion.locale, {
    style: "currency",
    currency: selectedRegion.currency,
    maximumFractionDigits: 0,
  }).format(amount);
  const metrics = [
    { label: copy.total, value: money(selectedRegion.portfolio), detail: copy.year, icon: AccountBalanceWalletIcon },
    { label: copy.performance, value: `+${money(selectedRegion.performance)}`, detail: copy.since, icon: TrendingUpIcon },
  ];

  const changeRegion = (nextRegion: RegionKey) => {
    setLocale(nextRegion);
    window.history.replaceState(null, "", `/dashboard?locale=${nextRegion}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <Box sx={{ bgcolor: "#fafaf8", minHeight: "100vh", py: { xs: 5, md: 8 } }}>
      <Box sx={{ maxWidth: 1180, mx: "auto", px: { xs: 2.5, md: 4 } }}>
        <Typography variant="overline" sx={{ color: GOLD }}>
          {copy.portal}
        </Typography>
        <Typography variant="h1" sx={{ color: NAVY, fontSize: { xs: "2rem", md: "2.75rem" }, mt: 0.5 }}>
          {copy.greeting}, {firstName}.
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1, mb: { xs: 4, md: 5 } }}>
          {copy.overview}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Select
            value={region}
            onChange={(event) => changeRegion(event.target.value as RegionKey)}
            size="small"
            inputProps={{ "aria-label": "Dashboard region and currency" }}
            sx={{ minWidth: 230, bgcolor: "#fff", fontSize: "0.875rem" }}
          >
            {Object.entries(regions).map(([key, value]) => (
              <MenuItem key={key} value={key}>{value.label} · {value.currency}</MenuItem>
            ))}
          </Select>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {metrics.map(({ label, value, detail, icon: Icon }) => (
            <Grid key={label} size={{ xs: 12, md: 6 }}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: 3.25 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Box>
                      <Typography sx={{ color: "text.secondary", fontSize: "0.88rem" }}>{label}</Typography>
                      <Typography sx={{ color: NAVY, fontWeight: 600, fontSize: { xs: "1.55rem", md: "1.9rem" }, mt: 1 }}>
                        {value}
                      </Typography>
                      <Typography sx={{ color: "#16805a", fontSize: "0.85rem", mt: 0.75 }}>{detail}</Typography>
                    </Box>
                    <Box sx={{ display: "grid", placeItems: "center", width: 44, height: 44, borderRadius: "50%", bgcolor: "#f5f2ed" }}>
                      <Icon sx={{ color: GOLD }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {ready && (
          <Card sx={{ mb: 4, overflow: "hidden" }}>
            {location && !tunnel.detected ? (
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 340px" } }}>
                <CardContent sx={{ p: 3.25 }}>
                  <Typography variant="h5" sx={{ color: NAVY, mb: 1 }}>Regional service</Typography>
                  <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    Your approximate network location is {location.city}, {location.country}. We use this only to select regional language and currency defaults.
                  </Typography>
                </CardContent>
                <Box sx={{ minHeight: 190, bgcolor: "#e8e2d9" }}>
                  <iframe
                    title="Approximate network location"
                    src={`https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${location.latitude}%2C${location.longitude}`}
                    style={{ border: 0, display: "block", height: "100%", minHeight: 190, width: "100%" }}
                  />
                </Box>
              </Box>
            ) : (
              <CardContent sx={{ p: 3.25 }}>
                <Typography variant="h5" sx={{ color: NAVY, mb: 1 }}>Regional service</Typography>
                <Typography sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {tunnel.detected
                    ? "A VPN, proxy, or Tor connection was detected, so your network location is not shown on a map. You can still choose your preferred region and currency above."
                    : "Your network location is unavailable, so no map is shown. You can choose your preferred region and currency above."}
                </Typography>
              </CardContent>
            )}
          </Card>
        )}

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card>
              <CardContent sx={{ p: 3.25 }}>
                <Typography variant="h5" sx={{ color: NAVY, mb: 0.5 }}>{copy.accounts}</Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", mb: 3 }}>{copy.accountDescription}</Typography>
                <Divider />
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1.5, py: 2.5, justifyContent: "space-between" }}>
                  <Box>
                    <Typography sx={{ color: NAVY, fontWeight: 600 }}>{copy.primary}</Typography>
                    <Typography sx={{ color: "text.secondary", fontSize: "0.85rem", mt: 0.4 }}>VP Vida Advanced · acc-001</Typography>
                  </Box>
                  <Typography sx={{ color: NAVY, fontWeight: 600 }}>{money(selectedRegion.portfolio)}</Typography>
                </Box>
                <Divider />
                <Button component="a" href="/contact" variant="text" endIcon={<ArrowForwardIcon />} sx={{ color: NAVY, px: 0, pt: 2.5 }}>
                  {copy.appointment}
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card sx={{ height: "100%", bgcolor: NAVY, border: "none" }}>
              <CardContent sx={{ p: 3.25, height: "100%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <Typography variant="h5" sx={{ color: "#fff", mb: 1 }}>{copy.next}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, fontSize: "0.9rem" }}>
                  {copy.nextBody}
                </Typography>
                <Button component="a" href="/contact" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ mt: "auto", pt: 2.5 }}>
                  {copy.arrange}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
