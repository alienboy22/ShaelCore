"use client";

import { useState, forwardRef } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkComponent } from "@/lib/LinkComponent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const NAVY = "#0d2137";
const GOLD = "#b8975a";
const CREAM = "#f5f2ed";

// Wrapper component for Next.js Link with Material-UI components
const LocalLinkComponent = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }
>(({ href = "", ...props }, ref) => (
  <Link ref={ref} href={href} {...props} />
));
LocalLinkComponent.displayName = "LocalLinkComponent";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setSuccess(true);

    // Simulate API call
    setTimeout(async () => {
      // In production, you'd save to database here
      // For demo, just sign in with credentials
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/dashboard");
      } else {
        setError("Registration failed. Try demo@shaelcore.com with the default password");
        setSuccess(false);
        setLoading(false);
      }
    }, 1500);
  };

  if (success) {
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
        <Card sx={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
          <CardContent sx={{ p: 5 }}>
            <Box
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#10b981",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: "2rem" }}>✓</Typography>
            </Box>
            <Typography variant="h5" sx={{ color: NAVY, mb: 1 }}>
              Welcome to Shaelcore!
            </Typography>
            <Typography sx={{ color: "#6b7280", mb: 3 }}>
              Your account has been created. Redirecting to dashboard...
            </Typography>
            <CircularProgress />
          </CardContent>
        </Card>
      </Box>
    );
  }

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
          boxShadow: "0 8px 32px -8px rgba(13,33,55,0.15)",
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
              <PersonAddIcon sx={{ color: GOLD, fontSize: 28 }} />
            </Box>
            <Typography
              sx={{
                fontFamily: "Georgia, serif",
                fontSize: "1.8rem",
                color: NAVY,
                mb: 0.5,
              }}
            >
              Create Account
            </Typography>
            <Typography sx={{ color: "#9ca3af", fontSize: "0.9rem" }}>
              Join Shaelcore today
            </Typography>
          </Box>

          {/* Error */}
          {error && (
            <Alert severity="error" sx={{ mb: 3, fontSize: "0.85rem" }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              size="small"
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              size="small"
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              size="small"
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={loading}
              size="small"
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={loading}
              endIcon={loading ? <CircularProgress size={20} /> : <ArrowForwardIcon />}
              sx={{ mt: 2, py: 1.2, fontWeight: 600 }}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Box>

          {/* Footer */}
          <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #e2ddd6", pt: 3 }}>
            <Typography sx={{ color: "#6b7280", fontSize: "0.9rem", mb: 1.5 }}>
              Already have an account?
            </Typography>
            <Button
              component={LocalLinkComponent}
              href="/auth/login"
              variant="outlined"
              fullWidth
              sx={{
                borderColor: GOLD,
                color: NAVY,
                "&:hover": { borderColor: NAVY, bgcolor: CREAM },
              }}
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
