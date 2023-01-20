import styles from './headerMobileBottom.module.css';
import NavLink from '../../../navlink';

import { FaHome, FaPaperPlane, FaTools } from 'react-icons/fa';
import { HiClipboardList, HiCamera } from 'react-icons/hi';

export default function HeaderMobileBottom() {
    return (
        <header className={styles.headerMobileBottom}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink mobile className={styles.aMobile} href="/" title='Accueil'>
                            <FaHome />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink mobile className={styles.aMobile} href="/prestations" title='Prestations'>
                            <HiClipboardList />
                            <span>Prestations</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink mobile className={styles.aMobile} href="/gallery" title='Galerie'>
                            <HiCamera />
                            <span>Galerie</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink mobile className={styles.aMobile} href="/contact" title='Me contacter'>
                            <FaPaperPlane />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                    <li className={`${styles.item} ${styles.filiere}`}>
                        <a className={styles.aMobile} href="https://northhelper.netlify.app" target="_blank" rel="noopener noreferrer" title='Filière North Helper'>
                            <FaTools />
                            <span>Filière</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}