import styles from './wave.module.css';
import Image from 'next/image';

import PetitBonhomme from '../../public/petitBonhomme.png';
import PetitBonhomme2 from '../../public/petitBonhomme2.png';
import WavePNG from '../../public/wave.png';

export default function Wave() {
    return (
        <div className={styles.wave}>
            <Image className={styles.png} priority src={WavePNG} alt="png wave" />
            <Image className={styles.petitBonhomme} src={PetitBonhomme} alt="img représentant une illustration d'un assistant North Garden" />
            <Image className={styles.petitBonhomme2} src={PetitBonhomme2} alt="img représentant une illustration de deux assistants North Garden" />
        </div>
    )
}