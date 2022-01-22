import { ReactNode } from 'react';
// guards
import AuthGuard from '../guards/AuthGuard';
// components
import MainLayout from './main';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './LogoOnlyLayout';
import { Stack } from '@mui/material';
import MainHeader from './main/MainHeader';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard' | 'logoOnly' | 'club';
  filter?: boolean;
  tab?: number;
};

export default function Layout({ tab, variant = 'dashboard', filter = false, children }: Props) {
  if (variant === 'logoOnly') {
    return <LogoOnlyLayout> {children} </LogoOnlyLayout>;
  }

  if (variant === 'main') {
    return (
      <MainLayout tab={tab} filter={filter}>
        {children}
      </MainLayout>
    );
  }

  if (variant === 'club') {
    return (
      <Stack sx={{ minHeight: 1, background: 'rgba(243, 247, 248, 1)' }}>
        <MainHeader />
        {children}
      </Stack>
    );
  }

  return (
    <AuthGuard>
      <DashboardLayout> {children} </DashboardLayout>
    </AuthGuard>
  );
}
