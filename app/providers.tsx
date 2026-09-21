"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { LocaleProvider } from "./locale/LocaleProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SessionProvider>{children}</SessionProvider>
    </LocaleProvider>
  );
}
