import "../styles/globals.css";
import { ComicProvider } from "../Context/ComicContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ComicProvider>{getLayout(<Component {...pageProps} />)}</ComicProvider>
  );
}

export default MyApp;
