import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "rc-dropdown/assets/index.css";
import "react-notion-x/src/styles.css";
import Layout from "../src/components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
