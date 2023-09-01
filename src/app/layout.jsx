import "./globals.css";

export const metadata = {
  title: "Google Clone NextJS 13",
  description: "Google clone created using NextJS 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
