import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Mock user database (in production, use a real database)
const users = [
  {
    id: "1",
    email: "demo@shaelcore.com",
    name: "John Investor",
    password: "$2b$10$Q6w0DZsahAzJG0OC3MCPKOo6ngKOYA/P.WkJzgedQ3K16w8Ay//Ii", // "demo123"
    role: "client",
    portfolio_value: "CHF 2,500,000",
    accounts: [
      { id: "acc-001", name: "Managed Portfolio", balance: "CHF 2,500,000", type: "Wealth Management" },
    ],
  },
  {
    id: "2",
    email: "advisor@shaelcore.com",
    name: "Sarah Advisor",
    password: "$2b$10$Q6w0DZsahAzJG0OC3MCPKOo6ngKOYA/P.WkJzgedQ3K16w8Ay//Ii", // "demo123"
    role: "advisor",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "demo@shaelcore.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = users.find((u) => u.email === credentials.email);
        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET || "development-secret-key",
};

export default NextAuth(authOptions);
