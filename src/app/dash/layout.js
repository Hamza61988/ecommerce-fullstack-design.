// app/(protected)/dash/layout.js
import Footer from '../components/footer';

export const metadata = {
  title: 'My App',
  description: 'Final Year Project Example',
};

export default function DashLayout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
