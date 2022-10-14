import { useEffect } from "react";
import "../styles/globals.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import javascript from "highlight.js/lib/languages/javascript";

import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Navbar, Text } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.initHighlightingOnLoad();
  }, []);
  return (
    <NextUIProvider>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Anzy
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="/">
            블로그
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
