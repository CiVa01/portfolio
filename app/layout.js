import "./globals.scss";

export const metadata = {
  title: "Cis van Aken - Portfolio",
  description:
    "Master of Science in Human-Computer Interaction, B.Sc. in Artificial Intelligence",
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
