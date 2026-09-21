import { NextRequest, NextResponse } from "next/server";
import { localeForCountry } from "@/lib/locale";

export const dynamic = "force-dynamic";

type IpWhoisResponse = {
  success?: boolean;
  country_code?: string;
  country?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  security?: { anonymous?: boolean; vpn?: boolean; proxy?: boolean; tor?: boolean };
};

function isPublicIp(ip: string) {
  if (!ip || ip === "::1" || ip.startsWith("fc") || ip.startsWith("fd")) return false;
  if (ip.includes(":")) return true;
  const octets = ip.split(".").map(Number);
  if (octets.length !== 4 || octets.some((octet) => !Number.isInteger(octet) || octet < 0 || octet > 255)) return false;
  const [first, second] = octets;
  return first !== 0 && first !== 10 && first !== 127 && !(first === 169 && second === 254) && !(first === 172 && second >= 16 && second <= 31) && !(first === 192 && second === 168);
}

function requesterIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",").map((value) => value.trim()) ?? [];
  const candidates = [...forwarded, request.headers.get("x-real-ip") ?? ""];
  return candidates.find(isPublicIp) ?? "";
}

export async function GET(request: NextRequest) {
  const ip = requesterIp(request);
  if (!isPublicIp(ip)) {
    return NextResponse.json({ locale: "en-CH", location: null, tunnel: { detected: false, checked: false } });
  }

  try {
    const response = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?security=1`, {
      signal: AbortSignal.timeout(2500),
      cache: "no-store",
    });
    const result = await response.json() as IpWhoisResponse;
    if (!response.ok || !result.success) throw new Error("IP lookup failed");

    const tunnelDetected = Boolean(result.security?.anonymous || result.security?.vpn || result.security?.proxy || result.security?.tor);
    const hasCoordinates = typeof result.latitude === "number" && typeof result.longitude === "number";

    return NextResponse.json({
      locale: tunnelDetected ? "en-CH" : localeForCountry(result.country_code),
      tunnel: { detected: tunnelDetected, checked: true },
      location: hasCoordinates
        ? { city: result.city ?? "", country: result.country ?? "", latitude: result.latitude, longitude: result.longitude }
        : null,
    });
  } catch {
    return NextResponse.json({ locale: "en-CH", location: null, tunnel: { detected: false, checked: false } });
  }
}
