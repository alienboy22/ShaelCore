import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type MarketQuote = {
  symbol: string;
  price: number;
  changePercent: number;
  source: "Binance" | "Alpaca";
};

type BinanceTicker = { symbol: string; lastPrice: string; priceChangePercent: string };
type AlpacaSnapshot = {
  latestTrade?: { p?: number };
  dailyBar?: { c?: number };
  prevDailyBar?: { c?: number };
};

async function binanceQuotes(): Promise<MarketQuote[]> {
  const response = await fetch(
    "https://api.binance.com/api/v3/ticker/24hr?symbols=%5B%22BTCUSDT%22%2C%22ETHUSDT%22%2C%22BNBUSDT%22%2C%22XRPUSDT%22%2C%22SOLUSDT%22%5D",
    { cache: "no-store", signal: AbortSignal.timeout(4000) },
  );
  if (!response.ok) throw new Error("Binance quote request failed");

  const tickers = await response.json() as BinanceTicker[];
  return tickers.map((ticker) => ({
    symbol: ticker.symbol.replace("USDT", "/USD"),
    price: Number(ticker.lastPrice),
    changePercent: Number(ticker.priceChangePercent),
    source: "Binance",
  }));
}

async function alpacaQuotes(): Promise<MarketQuote[]> {
  const key = process.env.ALPACA_DATA_API_KEY;
  const secret = process.env.ALPACA_DATA_API_SECRET;
  if (!key || !secret) return [];

  const response = await fetch("https://data.alpaca.markets/v2/stocks/snapshots?symbols=NVDA,AAPL,MSFT,AMZN,TSLA", {
    headers: { "APCA-API-KEY-ID": key, "APCA-API-SECRET-KEY": secret },
    cache: "no-store",
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) throw new Error("Alpaca quote request failed");

  const snapshots = await response.json() as Record<string, AlpacaSnapshot>;
  return Object.entries(snapshots).flatMap(([symbol, snapshot]) => {
    const price = snapshot.latestTrade?.p ?? snapshot.dailyBar?.c;
    const previousClose = snapshot.prevDailyBar?.c;
    if (typeof price !== "number" || typeof previousClose !== "number" || previousClose === 0) return [];
    return [{ symbol, price, changePercent: ((price - previousClose) / previousClose) * 100, source: "Alpaca" as const }];
  });
}

export async function GET() {
  const [crypto, stocks] = await Promise.allSettled([binanceQuotes(), alpacaQuotes()]);
  const quotes = [
    ...(crypto.status === "fulfilled" ? crypto.value : []),
    ...(stocks.status === "fulfilled" ? stocks.value : []),
  ];

  return NextResponse.json(
    { quotes, updatedAt: new Date().toISOString(), stocksAvailable: stocks.status === "fulfilled" && stocks.value.length > 0 },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
