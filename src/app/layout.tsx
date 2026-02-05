import ThemeRegistry from '@/components/ThemeRegistry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pastel Pink Dashboard",
  description: "Beautiful pastel pink themed dashboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
