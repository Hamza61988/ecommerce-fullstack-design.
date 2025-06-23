// app/(protected)/dash/layout.js
import Footer from '../components/footer';

export const metadata = {
  title: "Home Page",
  description: "Home Page of this project",
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
