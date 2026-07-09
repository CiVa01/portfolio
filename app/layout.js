import "./globals.scss";

export const metadata = {
  title: "Cis van Aken - UX Designer & Researcher",
  description:
    "UX Designer & Researcher who designs human-centred products for AI systems. MSc Human-Computer Interaction, BSc Artificial Intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>
      <body className="cv-bridge">{children}</body>
    </html>
  );
}
