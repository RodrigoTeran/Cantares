import Head from "next/head";
import { createContext } from "react";

// App Context
interface ValueAppProvider {}

export const AppContext = createContext<Partial<ValueAppProvider>>({});

// Styles
import "../styles/globals.scss";

// Variants
import LayoutFade from "../components/variants/Fade";

// Components
import Nav from "../components/Nav/index";

export default function CantaresApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>Cantares</title>
      </Head>
      <AppContext.Provider value={{}}>
        <LayoutFade>
          <main className="layout_content">
            <Nav />
            <Component {...pageProps} />
          </main>
        </LayoutFade>
      </AppContext.Provider>
    </>
  );
}
