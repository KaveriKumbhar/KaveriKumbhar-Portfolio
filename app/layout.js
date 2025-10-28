import "./globals.css";

export const metadata = {
  title: "Kaveri Kumbhar | Web Developer Portfolio",
  description: "Professional portfolio of Kaveri Kumbhar - Web Developer specializing in Next.js, React, Node.js, and modern web technologies. Explore my projects, services, and get in touch!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
