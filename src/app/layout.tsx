import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, SidebarLayout } from "@royportas/design-system";
import BoltIcon from "@mui/icons-material/Bolt";

export const metadata: Metadata = {
  title: "Next App Template",
  description: "Generated by create next app",
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
          <ThemeProvider>
            <SidebarLayout
              items={[
                {
                  key: "home",
                  icon: <BoltIcon />,
                  label: "Home",
                },
              ]}
              slotProps={{
                children: {
                  width: "100%",
                },
              }}
            >
              {children}
            </SidebarLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
