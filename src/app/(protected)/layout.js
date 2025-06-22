'use client';

import useAuthRedirect from '../hooks/useAuthRedirect';

export default function ProtectedLayout({ children }) {
  const loading = useAuthRedirect();

  if (loading) return null

  return <>{children}</>;
}
