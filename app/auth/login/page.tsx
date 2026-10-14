"use client";

import { useState, forwardRef, Suspense } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LockIcon from "@mui/icons-material/Lock";

const NAVY = "#101418";
const GOLD = "#B86F43";
const CREAM = "#E9E1D2";

// Wrapper component for Next.js Link with Material-UI components
const LocalLinkComponent = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }
>(({ href = "", ...props }, ref) => (
  <Link ref={ref} href={href} {...props} />
));
LocalLinkComponent.displayName = "LocalLinkComponent";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("demo@shaelcore.com");
  const [password, setPassword] = useState("demo123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Try demo@shaelcore.com / demo123");
      setLoading(false);
    } else if (result?.ok) {
      router.push(searchParams.get("callbackUrl") || "/dashboard");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: CREAM,
        py: 4,
        px: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 8px 32px -8px rgba(16,20,24,0.15)",
        }}
      >
        <CardContent sx={{ p: 5 }}>
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                bgcolor: NAVY,
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <LockIcon sx={{ color: GOLD, fontSize: 28 }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.8rem",
                color: NAVY,
                mb: 0.5,
              }}
            >
              Welcome Back
            </Typography>
            <Typography sx={{ color: "#9ca3af", fontSize: "0.9rem" }}>
              Sign in to your ShaelCore account
            </Typography>
          </Box>

          {/* Demo credentials note */}
          <Alert severity="info" sx={{ mb: 3, fontSize: "0.85rem" }}>
            <strong>Demo credentials:</strong> demo@shaelcore.com / demo123
          </Alert>

          {/* Error */}
          {error && (
            <Alert severity="error" sx={{ mb: 3, fontSize: "0.85rem" }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="demo@shaelcore.com"
              size="small"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              placeholder="••••••••"
              size="small"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : <ArrowForwardIcon />}
              sx={{ mt: 1, py: 1.2, fontWeight: 600 }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </Box>

          {/* Footer */}
          <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #e2ddd6", pt: 3 }}>
            <Typography sx={{ color: "#6b7280", fontSize: "0.9rem", mb: 1.5 }}>
              Don&apos;t have an account?
            </Typography>
            <Button
              component={LocalLinkComponent}
              href="/auth/register"
              variant="outlined"
              fullWidth
              sx={{
                borderColor: GOLD,
                color: NAVY,
                "&:hover": { borderColor: NAVY, bgcolor: CREAM },
              }}
            >
              Create Account
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
