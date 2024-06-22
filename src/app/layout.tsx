import "@mantine/core/styles.css";
import "../styles/variables.scss";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "Snail SC",
  description: "I have followed setup instructions carefully",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  mainfest: "/site.webmainfest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
