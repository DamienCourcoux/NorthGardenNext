import styles from '../styles/Formules.module.css';
import NavLink from "../components/navlink";
import Image from 'next/image';
import CountUp from 'react-countup';
import Loader from '../components/Loader/loader';
import { useQuery } from 'react-query';

import { getFormules } from '../lib/requestApiFormules';

import PetitBonhommeSolo from '../public/petitBonhommeSolo.png';

import { MdLocalFlorist } from 'react-icons/md';
import { GiGrass, GiShears, GiGloves, GiFragrance, GiFlowerPot, GiSpinningBlades, GiLeafSwirl, GiWoodPile, GiWateringCan, GiPlantWatering } from 'react-icons/gi';
import { FaSeedling, FaCarrot, FaWind, FaSnowplow, FaRegSnowflake } from 'react-icons/fa';
import { VscTrash } from 'react-icons/vsc';

type Formule = {
    _id: string,
    name: string,
    description: string,
    price: number,
    packs: string,
}

export default function Formules() {
    const { isLoading, isError, data, error } = useQuery<Formule[] | any>('formules', getFormules);

    if (isLoading) return <Loader message='Les formules chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <table className={styles.table}>
            <tbody className={styles.tbody}>
                <tr className={`${styles.thead} ${styles.tr}`}>
                    <th className={styles.th}>Formules</th>
                    <th className={styles.th}>Description</th>
                    <th className={styles.th}>Prix</th>
                    <th className={styles.th}>Contact</th>
                </tr>
                {
                    data.map((formule: Formule) => (
                        <tr className={styles.tr} key={formule._id}>
                            <td className={`${styles.td} ${styles.icon}`}>
                                {formule.name === "Tonte" ? <GiGrass /> : ''}
                                {formule.name === "Taille" ? <GiShears /> : ''}
                                {formule.name === "Désherbage" ? <GiGloves /> : ''}
                                {formule.name === "Massif" ? <><MdLocalFlorist /> <GiFragrance /></> : ''}
                                {formule.name === "Plantation" ? <FaSeedling /> : ''}
                                {formule.name === "Jardinières fleurie" ? <GiFlowerPot /> : ''}
                                {formule.name === "Jardinières potagère" ? <FaCarrot /> : ''}
                                {formule.name === "Débroussaillage" ? <GiSpinningBlades /> : ''}
                                {formule.name === "Souffleur" ? <FaWind /> : ''}
                                {formule.name === "Ramassage" ? <><VscTrash /> <GiLeafSwirl /></> : ''}
                                {formule.name === "Bois" ? <GiWoodPile /> : ''}
                                {formule.name === "Arrosage" ? <><GiWateringCan /> <GiPlantWatering /></> : ''}
                                {formule.name === "Déneigeage" ? <><FaSnowplow /> <FaRegSnowflake /></> : ''}
                                {formule.name === "Massif" || formule.name === "Plantation" || formule.name === "Jardinières" ? <>{formule.name}<span className={styles.asterix}>*</span></> : formule.name}
                            </td>
                            <td className={styles.td}>{formule.description}</td>
                            <td className={`${styles.td} ${styles.formulePrice}`}>
                                <CountUp end={formule.price} suffix=" €" />
                            </td>
                            <td className={styles.td}>
                                <NavLink className={styles.btnMecontacter} href="/contact" title="Me contacter">Me contacter</NavLink>
                            </td>
                        </tr>
                    ))
                }
                <tr className={`${styles.tr} ${styles.textasterix}`}>
                    <td className={styles.td} colSpan={4}>
                        <span className={styles.asterix}>* Les matériaux et les plantes sont payables d&apos;avance. Merci</span>
                    </td>
                </tr>
            </tbody>
            <tfoot className={styles.tfoot}>
                <tr className={styles.tr}>
                    <td className={styles.td} colSpan={4}>
                        <Image src={PetitBonhommeSolo} alt="img représentant une illustration de deux assistants North Garden" />
                        Avec les formules individuels <span className={styles.supplement}>les frais de déplacements</span> sont de
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td colSpan={4} className={`${styles.td} ${styles.killometre}`}>Pour 1 à 10 Km = <CountUp end={6.50} suffix=" €" decimals={2} decimal="." /></td>
                </tr>
                <tr className={styles.tr}>
                    <td colSpan={4} className={`${styles.td} ${styles.killometre}`}>Pour 11 à 20 Km = <CountUp end={13} suffix=" €" /></td>
                </tr>
                <tr className={styles.tr}>
                    <td colSpan={4} className={`${styles.td} ${styles.killometre}`}>Pour 21 à 30 Km = <CountUp end={19.5} suffix=" €" decimals={1} decimal="." /></td>
                </tr>
                <tr className={styles.tr}>
                    <td colSpan={4} className={`${styles.td} ${styles.killometre}`}>Au-delà des 30Km d&apos;Évreux = <CountUp end={0.65} suffix=" €/Km" decimals={2} decimal="." /></td>
                </tr>
            </tfoot>
        </table>
    )
}