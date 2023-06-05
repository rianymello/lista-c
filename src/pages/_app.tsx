import '../styles/global.css';
import Banner from './Banner';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Banner />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
