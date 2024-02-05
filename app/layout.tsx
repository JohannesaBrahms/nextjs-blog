import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Footer from './components/footer';
import Header from './components/header';
import theme from './theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Failing Forward | Bo Armacki',
  description: 'Personal website of Bojana Armacki',
};

const sections = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'blog',
    path: '/blog',
  },
  {
    name: 'about',
    path: '/about',
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
              <Header title="Blog" sections={sections} />
              <main>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                  {children}
                </Grid>
              </main>
            </Container>
            <Footer title="Footer" description="Failing forward." />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
