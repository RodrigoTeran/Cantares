import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
  } from "next/document";
  
  class CantaresDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render(): JSX.Element {
      return (
        <Html>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default CantaresDocument;