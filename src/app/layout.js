// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Login page',
  description: 'Login page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
