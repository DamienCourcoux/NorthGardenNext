import styles from '../styles/Home.module.css';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import StartProject from '../components/StartProject/startProject';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// temporaire
import slide1 from '../public/slide1.jpeg';
import slide2 from '../public/slide2.jpeg';
import slide3 from '../public/slide3.jpeg';
import slide4 from '../public/slide4.jpeg';
import slide5 from '../public/slide5.jpg';
import slide6 from '../public/slide6.jpg';
import slide7 from '../public/slide7.jpg';
import slide8 from '../public/slide8.jpg';
import slide9 from '../public/slide9.jpg';
import slide10 from '../public/slide10.jpg';
import slide11 from '../public/slide11.jpeg';
import slide12 from '../public/slide12.jpg';

import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';

import Presentation from '../public/presentation.jpeg';

export default function Home() {
    // temporaire
    const sliders = [
      { "_id": 1, "picture": slide1 },
      { "_id": 2, "picture": slide2 },
      { "_id": 3, "picture": slide3 },
      { "_id": 4, "picture": slide4 },
      { "_id": 5, "picture": slide5 },
      { "_id": 6, "picture": slide6 },
      { "_id": 7, "picture": slide7 },
      { "_id": 8, "picture": slide8 },
      { "_id": 9, "picture": slide9 },
      { "_id": 10, "picture": slide10 },
      { "_id": 11, "picture": slide11 },
      { "_id": 12, "picture": slide12 }
  ]

  const arrowStyles = {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
      color: '#fff',
      transition: 'all .2s linear'
  };
  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.home}>
        {
          sliders.length > 0 && (
            <Carousel
                autoPlay
                emulateTouch
                swipeable
                infiniteLoop
                interval={7000}
                transitionTime={2000}
                showStatus={false}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev) => hasPrev && (<BiLeftArrowCircle onClick={onClickHandler} title={"Image précedente"} style={{ ...arrowStyles, left: 15 }} className="arrowStyles" />)}
                renderArrowNext={(onClickHandler, hasNext) => hasNext && (<BiRightArrowCircle onClick={onClickHandler} title={"Image suivante"} style={{ ...arrowStyles, right: 15 }} className="arrowStyles" />)}
            >
                {
                    sliders.map((slider) => (
                        <Image key={slider._id} priority className={styles.sliderImage} src={slider.picture} alt="img du slider" />
                    ))
                }
            </Carousel>
          )
        }
        <div className={styles.presentation}>
          <Image className={styles.image} src={Presentation} alt="img représentant une massif avec une fontaine" />
          <div className={styles.text}>
            <h1 className={`${styles.title} northgarden`}>Présentation</h1>
            <p className={styles.paragraph}>
              <span className={styles.span}>Paysagiste d&apos;une nouvelle aire </span>
              de l&apos;entreprise
              <span className={`${styles.span} northgarden`}> North Garden </span>
              exerçant
              <span className={styles.span}> sur Évreux et ses alentours. </span>
              À votre disposition pour
              <span className={styles.span}> entretenir votre jardin.</span>
            </p>
          </div>
        </div>
      </section>
      <StartProject />
    </Layout>
  )
}
