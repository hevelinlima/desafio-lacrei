import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Loading } from "@/components/Skeleton";
import { GlobalStyle } from "@/styles/global";
import { Container } from "@/styles/pages/app";
import { defaultTheme } from "@/styles/theme/default";
import { typography } from "@/styles/typography";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {

  const combinedTheme = {
    ...defaultTheme,
    ...typography,
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return() => clearTimeout(timer);
  }, [])

  if (loading) {
    return <Loading />;
  }

  return(
    <ThemeProvider theme={combinedTheme}>
      <Header />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
