import Providers from '@/lib/Providers/Providers';
import { CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import { Toaster } from 'sonner';

const ubuntu = Ubuntu({ subsets: ['cyrillic'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: "mhShohan's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang='en'>
        <body className={ubuntu.className}>
          <AppRouterCacheProvider>
            <>
              <CssBaseline />
              <Toaster />
              {children}
            </>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
