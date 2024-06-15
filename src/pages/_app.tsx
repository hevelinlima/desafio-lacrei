import Header from "@/components/Header";
import { GlobalStyle } from "@/styles/global";
import { Container } from "@/styles/pages/app";
import { defaultTheme } from "@/styles/theme/default";
import { typography } from "@/styles/typography";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {

  const combinedTheme = {
    ...defaultTheme,
    ...typography,
  };

  return(
    <ThemeProvider theme={combinedTheme}>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
