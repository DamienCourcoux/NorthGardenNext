import styles from '../styles/404.module.css';
import SoucoupeErreur from '../public/soucoupeerreur.png';
import img404 from '../public/404.png';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import LayoutPage from '../components/layoutPage';


import { FaPaperPlane } from 'react-icons/fa';

export default function Error404() {
    return (
        <Layout>
            <LayoutPage title='404' startProject>
                <Head>
                    <title>North Garden | Erreur 404</title>
                </Head>
                <section className={styles.error404}>
                    <Image className={styles.soucoupe} src={SoucoupeErreur} alt="img représentant deux assistant North Garden ce fessant aspirés par une soucoupe" />
                    <div className={styles.back}>
                        <p className={`${styles.message} northgarden`}>Oups !! Je sais qu&apos;on dit que l&apos;herbe est toujours plus verte ailleurs, mais quand même ! Là tu t&apos;aventures en terre inconnue !</p>
                        <Link className={styles.link} title="Clique plutôt ici" href="/">Clique plutôt ici <FaPaperPlane /></Link>
                    </div>
                    <Image className={styles.img404} src={img404} alt="img représentant erreur 404" />
                </section>
            </LayoutPage>
        </Layout>
    )
}