import styles from '../styles/Home.module.css';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import StartProject from '../components/StartProject/startProject';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';

// temporaire
import brouette from '../public/brouette.jpeg';
import slide5 from '../public/slide5.jpg';
import fontaine from '../public/fontaine.jpeg';

import Presentation from '../public/presentation.jpeg';

export default function Home() {
    // temporaire
    const sliders = [
      { "_id": 1, "picture": fontaine },
      { "_id": 2, "picture": slide5 },
      { "_id": 3, "picture": brouette }
  ]
  
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
                renderArrowPrev={(onClickHandler, hasPrev ) => hasPrev && (<BiLeftArrowCircle onClick={onClickHandler} title={"Image précedente"} className="arrowStyles arrowLeft" />)}
                renderArrowNext={(onClickHandler, hasNext ) => hasNext && (<BiRightArrowCircle onClick={onClickHandler} title={"Image suivante"} className="arrowStyles arrowRight" />)}
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
