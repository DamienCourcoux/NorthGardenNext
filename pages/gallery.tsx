import styles from '../styles/Gallery.module.css';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';
import Loader from '../components/Loader/loader';
import { useQuery } from 'react-query';

import { getTags } from '../lib/requestApiTags';

import { MdNaturePeople, MdLocalFlorist } from 'react-icons/md';
import { GiGrass, GiShears, GiGloves, GiFragrance, GiFlowerPot, GiGraveFlowers, GiSpinningBlades, GiLeafSwirl, GiWoodPile, GiWateringCan, GiPlantWatering } from 'react-icons/gi';
import { FaSeedling, FaLayerGroup, FaChevronDown, FaChevronUp, FaWind, FaSnowplow, FaRegSnowflake } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc';

type Tags = {
  _id: string,
  name: string,
}

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

export default function Gallery() {
  const [clicked, setClicked] = useState(false);
  const { isLoading, isError, data, error } = useQuery<Tags[] | any>('tags', getTags);

  if (isLoading) return <Loader message='Les tags chargent...' />;
  if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

  const toggle = (index: boolean | ((prevState: boolean) => boolean)) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  }

  return (
    <Layout>
      <LayoutPage title='Ma Galerie' startProject>
        <Head>
          <title>North Garden | Ma Galerie</title>
        </Head>
        {
          data.map((tag: Tags, index: boolean) => (
            tag.name === "Tonte" || tag.name === "Taille" || tag.name === "Massif" || tag.name === "Jardini??re / Bac ?? fleurs" ? (
              <div key={tag._id} className={styles.tags}>
                <h2 className={styles.tagsTitle} onClick={() => toggle(index)}>
                  {/* {tag.name === "Jardin" ? <MdNaturePeople /> : ''} */}
                  {tag.name === "Tonte" ? <GiGrass /> : ''}
                  {tag.name === "Taille" ? <GiShears /> : ''}
                  {/* {tag.name === "D??sherbage" ? <GiGloves /> : ''} */}
                  {tag.name === "Massif" ? <><MdLocalFlorist /> <GiFragrance /></> : ''}
                  {/* {tag.name === "Plantation" ? <FaSeedling /> : ''} */}
                  {tag.name === "Jardini??re / Bac ?? fleurs" ? <GiFlowerPot /> : ''}
                  {/* {tag.name === "S??pultures" ? <GiGraveFlowers /> : ''} */}
                  {/* {tag.name === "Divers" ? <FaLayerGroup /> : ''} */}
                  {/* {tag.name === "D??broussaillage" ? <GiSpinningBlades /> : ''} */}
                  {/* {tag.name === "Souffleur" ? <FaWind /> : ''} */}
                  {/* {tag.name === "Ramassage" ? <><VscTrash /> <GiLeafSwirl /></> : ''} */}
                  {/* {tag.name === "Bois" ? <GiWoodPile /> : ''} */}
                  {/* {tag.name === "Arrosage" ? <><GiWateringCan /> <GiPlantWatering /></> : ''} */}
                  {/* {tag.name === "D??neigeage" ? <><FaSnowplow /> <FaRegSnowflake /></> : ''} */}
                  Photo {tag.name} {clicked === index ? <FaChevronUp className={styles.chevron} /> : <FaChevronDown className={styles.chevron} />}
                </h2>
                {
                  clicked === index ? (
                    <div className={styles.box}>
                      <div className={styles.wrapper}>
                        {
                          tag.name === "Tonte" ? (
                            <>
                              <Image priority src={slide1} alt="img de galerie" />
                              <Image priority src={slide2} alt="img de galerie" />
                              <Image priority src={slide4} alt="img de galerie" />
                            </>
                          ) : ''
                        }
                        {
                          tag.name === "Taille" ? (
                            <Image priority src={slide3} alt="img de galerie" />
                          ) : ''
                        }
                        {
                          tag.name === "Massif" ? (
                            <>
                              <Image priority src={slide5} alt="img de galerie" />
                              <Image priority src={slide6} alt="img de galerie" />
                              <Image priority src={slide9} alt="img de galerie" />
                              <Image priority src={slide10} alt="img de galerie" />
                              <Image priority src={slide11} alt="img de galerie" />
                              <Image priority src={slide12} alt="img de galerie" />
                            </>
                          ) : ''
                        }
                        {
                          tag.name === "Jardini??re / Bac ?? fleurs" ? (
                            <>
                              <Image priority src={slide7} alt="img de galerie" />
                              <Image priority src={slide8} alt="img de galerie" />
                            </>
                          ) : ''
                        }
                      </div>
                    </div>
                  ) : ''
                }
              </div>
            ) : ''

          ))
        }
      </LayoutPage>
    </Layout>
  )
}