import "../styles/globals.css";
import { MangaProvider } from "../Context/MangaContext";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MangaProvider>{getLayout(<Component {...pageProps} />)}</MangaProvider>
  );
}

export default MyApp;
