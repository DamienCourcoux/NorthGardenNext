import styles from '../styles/Prestations.module.css';
import Head from 'next/head';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';
import NavLink from '../components/navlink';
import CountUp from 'react-countup';
import Formules from './formules';
import Loader from '../components/Loader/loader';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { getPacks } from '../lib/requestApiPacks';
import { getPrestations } from '../lib/requestApiPrestations';

import { MdNaturePeople, MdLocalFlorist } from 'react-icons/md';
import { GiGrass, GiShears, GiGloves, GiFragrance, GiFlowerPot, GiGraveFlowers } from 'react-icons/gi';
import { FaSeedling, FaLayerGroup, FaChevronDown, FaChevronUp, FaBookmark } from 'react-icons/fa';

type Pack = {
  _id: string,
  name: string,
  prestations: string
}

type Prestation = {
  _id: string,
  name: string,
  description: string,
  mowing: string,
  hedgeTrimmer: string,
  bushPruning: string,
  weeding: string,
  brushCutter: string,
  planting: string,
  tarpaulin: string,
  mulching: string,
  planters: string,
  aromaticSeasonalFlower: string,
  soil: string,
  fertilizer: string,
  composition: string,
  brushing: string,
  washing: string,
  photo: string,
  blower: string,
  pickup: string,
  gifts: string,
  example: string,
  price: number,
  pack: string,
}

export default function Prestations() {
  const [clicked, setClicked] = useState(false);

  const { isLoading: isLoadingPacks, isError: isErrorPacks, data: packs, error: errorPacks } = useQuery<Pack[] | any>('packs', getPacks);
  const { isLoading: isLoadingPrestations, isError: isErrorPrestations, data: prestations, error: errorPrestations } = useQuery<Prestation[] | any>('prestations', getPrestations);

  if (isLoadingPacks) return <Loader message='Les packs chargent...' />;
  if (isErrorPacks) return <div>J&apos;ai eu une erreur {`${errorPacks}`}</div>;

  if (isLoadingPrestations) return <Loader message='Les prestations chargent...' />;
  if (isErrorPrestations) return <div>J&apos;ai eu une erreur {`${errorPrestations}`}</div>;

  const toggle = (index: boolean | ((prevState: boolean) => boolean)) => {
    if (clicked === index) {
      return setClicked(false);
    }
    setClicked(index);
  }


  return (
    <Layout>
      <LayoutPage title='Mes Prestations' startProject>
        <Head>
          <title>North Garden | Mes Prestations</title>
        </Head>
        {
          packs.map((pack: Pack, index: boolean) => (
            <div className={styles.packs} key={pack._id}>
              <h2 className={styles.title} onClick={() => toggle(index)}>
                {pack.name === "Pack Jardin" ? <MdNaturePeople /> : ''}
                {pack.name === "Pack Tonte" ? <GiGrass /> : ''}
                {pack.name === "Pack Taille" ? <GiShears /> : ''}
                {pack.name === "Pack D??sherbage" ? <GiGloves /> : ''}
                {pack.name === "Pack Massif" ? <><MdLocalFlorist /> <GiFragrance /></> : ''}
                {pack.name === "Pack Plantation" ? <FaSeedling /> : ''}
                {pack.name === "Pack Jardini??re / Bac ?? fleurs" ? <GiFlowerPot /> : ''}
                {pack.name === "Pack S??pultures" ? <GiGraveFlowers /> : ''}
                {pack.name === "Formule individuelles" ? <FaLayerGroup /> : ''}
                {pack.name} {clicked === index ? <FaChevronUp /> : <FaChevronDown />}
              </h2>
              {
                clicked === index ? (
                  <div className={styles.box}>
                    {
                      prestations.map((prestation: Prestation) => (
                        pack.prestations.includes(prestation._id) ? (
                          <div className={styles.prestation} key={prestation._id}>
                            <h3 className={styles.prestationTitle}>
                              {prestation.name}
                            </h3>
                            {prestation.gifts ? <FaBookmark className={styles.isPremium} /> : ''}
                            <p className={styles.subtitle}>{prestation.description}</p>
                            <ul className={styles.list}>
                              <li>{prestation.mowing}</li>
                              <li>{prestation.hedgeTrimmer}</li>
                              <li>{prestation.bushPruning}</li>
                              <li>{prestation.weeding}</li>
                              <li>{prestation.brushCutter}</li>
                              <li>{prestation.planting === null || prestation.example === null ? '' : <>{prestation.planting}<span className={styles.asterix}>*</span></>}</li>
                              <li>{prestation.tarpaulin}</li>
                              <li>{prestation.mulching}</li>
                              <li>{prestation.planters}</li>
                              <li>{prestation.aromaticSeasonalFlower === null || prestation.example === null ? '' : <>{prestation.aromaticSeasonalFlower}<span className={styles.asterix}>*</span></>}</li>
                              <li>{prestation.soil}</li>
                              <li>{prestation.fertilizer}</li>
                              <li>{prestation.composition}</li>
                              <li>{prestation.brushing}</li>
                              <li>{prestation.washing}</li>
                              <li>{prestation.photo}</li>
                              <li>{prestation.blower}</li>
                              <li>{prestation.pickup}</li>
                              <li>{prestation.gifts}</li>
                              <li>{prestation.example === null ? '' : <span className={styles.asterix}>* {prestation.example}</span>}</li>
                            </ul>
                            <div className={styles.info}>
                              <NavLink className={styles.btnMecontacter} href="/contact" title='Me contacter'>Me contacter</NavLink>
                              <p className={styles.prix}>
                                {prestation.price === 240320 ? <><CountUp end={240} suffix=" ??? (Plastique)" /><CountUp end={320} suffix=" ??? (Bois)" /></> : <CountUp end={prestation.price} suffix=" ???" />}
                              </p>
                            </div>
                          </div>
                        ) : ''
                      ))
                    }
                    {pack.name === 'Formule individuelles' ? <Formules /> : ''}
                  </div>
                ) : ''
              }
            </div>
          ))
        }
      </LayoutPage>
    </Layout>
  )
}
