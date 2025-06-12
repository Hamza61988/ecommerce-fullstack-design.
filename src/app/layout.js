import "./globals.css";
import Footer from "./components/footer";

export const metadata = {
  title: "My App",
  description: "Final Year Project Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}