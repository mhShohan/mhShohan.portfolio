'use client';

import Sidebar from '@/components/layout/sidebar/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
