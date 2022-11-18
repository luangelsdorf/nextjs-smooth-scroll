import { useEffect } from 'react';
import '../styles/globals.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';
import smoothScroll from '../src/utils/smoothScroll';
import useSmoothScroll from '../src/hooks/useSmoothScroll';

function MyApp({ Component, pageProps }) {

  const scroller = useSmoothScroll();

  return (
    <div id="viewport">
      <div id="content">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
