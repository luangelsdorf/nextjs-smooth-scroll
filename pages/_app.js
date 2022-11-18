import { useEffect } from 'react';
import '../styles/globals.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import smoothScroll from '../src/utils/smoothScroll';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  function initScroll() {
    ScrollTrigger.killAll();
    const ss = smoothScroll("#content", undefined, 1.5, gsap, ScrollTrigger);
    console.log(ss);
    scrollTo(0, 0);
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    initScroll();

    router.events.on('routeChangeComplete', initScroll);
    return () => router.events.off('routeChangeComplete', initScroll);
  }, []);

  return (
    <div id="viewport">
      <div id="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
