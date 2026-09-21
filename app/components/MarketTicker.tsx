"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type MarketQuote = { symbol: string; price: number; changePercent: number; source: "Binance" | "Alpaca" };
type MarketResponse = { quotes: MarketQuote[]; updatedAt: string; stocksAvailable: boolean };

const featuredSymbols = ["BTC/USD", "ETH/USD", "BNB/USD", "XRP/USD", "SOL/USD", "NVDA", "AAPL", "MSFT", "AMZN", "TSLA"];

const price = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });

export default function MarketTicker() {
  const [market, setMarket] = useState<MarketResponse | null>(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/market-data", { cache: "no-store" });
        if (response.ok && active) setMarket(await response.json() as MarketResponse);
      } catch {
        // Keep the last valid market snapshot visible during a temporary outage.
      }
    };

    void load();
    const timer = window.setInterval(() => void load(), 15_000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  const quotesBySymbol = new Map(market?.quotes.map((quote) => [quote.symbol, quote]) ?? []);
  const quotes = featuredSymbols.map((symbol) => quotesBySymbol.get(symbol));

  return (
    <Box
      component="aside"
      aria-label="Live market data"
      sx={{
        position: "fixed", top: { xs: 60, md: 102 }, left: 0, right: 0, zIndex: 1199,
        height: 32, display: "flex", alignItems: "center", overflow: "hidden",
        bgcolor: "#102a45", color: "#fff", borderTop: "1px solid rgba(184,151,90,0.35)",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Typography sx={{ color: "#d2b06c", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
          LIVE MARKETS
        </Typography>
        <Box className="market-ticker-viewport" sx={{ flex: 1, overflow: "hidden", ml: { xs: 1.25, md: 2.5 } }}>
          <Box className="market-ticker-track" sx={{ display: "flex", width: "max-content", gap: { xs: 2, md: 3 } }}>
            {[...quotes, ...quotes].map((quote, index) => (
              <Box key={`${featuredSymbols[index % featuredSymbols.length]}-${index}`} sx={{ display: "flex", alignItems: "center", gap: 0.65, flexShrink: 0 }}>
                <Typography sx={{ fontSize: "0.7rem", fontWeight: 600 }}>{featuredSymbols[index % featuredSymbols.length]}</Typography>
                <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.78)" }}>
                  {quote ? price.format(quote.price) : "--"}
                </Typography>
                <Typography sx={{ fontSize: "0.66rem", color: quote && quote.changePercent >= 0 ? "#5ed39d" : "#ff9a9a" }}>
                  {quote ? `${quote.changePercent >= 0 ? "+" : ""}${quote.changePercent.toFixed(2)}%` : "--"}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
