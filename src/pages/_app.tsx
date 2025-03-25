import '@mantine/core/styles.css';
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "@material-tailwind/react";
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");

  return isAdminRoute ? (
    <MantineProvider theme={theme}>
      <ThemeProvider><Component {...pageProps} /></ThemeProvider>
    </MantineProvider>
  ) : (
    <MantineProvider theme={theme}>
      <ThemeProvider><Layout>
        <Component {...pageProps} />
      </Layout></ThemeProvider>
    </MantineProvider>
  );
}
