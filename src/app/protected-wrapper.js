'use client';

import useAuthRedirect from './hooks/useAuthRedirect';
import Footer from './components/footer';

export default function ProtectedWrapper({ children }) {
  const loading = useAuthRedirect();
  if (loading) return <p>Checking authentication...</p>;

  return (
    <>
      {children}
      <Footer />
    </>
  );
}
