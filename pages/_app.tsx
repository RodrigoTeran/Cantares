import Head from "next/head";
import { createContext } from "react";
import { AppProps } from "next/app";

// App Context
interface ValueAppProvider {}

export const AppContext = createContext<Partial<ValueAppProvider>>({});

// Styles
import "../styles/globals.scss";

// Variants
import LayoutFade from "../components/variants/Fade";

// Components
import Nav from "../components/Nav/index";

export default function CantaresApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cantares</title>
      </Head>
      <AppContext.Provider value={{}}>
        <LayoutFade>
          <Nav />
          <main className="layout_content">
            <Component {...pageProps} />
          </main>
        </LayoutFade>
      </AppContext.Provider>
    </>
  );
}
