import '../styles/global.css';
import Banner from './Banner';
import Skills from './Skills';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Banner />
      <Skills />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
