import styles from './header.module.css';
import { useState } from 'react';
import Link from 'next/link';
import NavLink from '../navlink';
import Image from 'next/image';

import Footer from '../Footer/footer';

import Logo from '../../public/logo.png';
import CardFront from '../../public/cartefidelitefront.png';
import CardBack from '../../public/cartefideliteback.png';

import {
    FaHome, FaPaperPlane, FaTools,
    FaIdCard, FaChevronDown, FaChevronUp,
    FaStamp, FaGift, FaPercentage,
    FaFacebook, FaTwitter, FaInstagram, FaDiscord
} from 'react-icons/fa';
import { HiClipboardList, HiCamera } from 'react-icons/hi';

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);

    const handleIsVisible= () => {
        setIsVisible(current => !current)
    }

  return (
    <header className={styles.header}>
        <div className={styles.imgCard}>
            <Link href="/" title='Accueil' className={styles.logo}><Image src={Logo} alt="logo su site North Garden, paysagiste d'une nouvelle aire" title='North Garden' /></Link>
            <div className={styles.cardDropdown}>
                <span className={styles.cardDropdownButton} title='Fonctionnement de la carte de fidélité' onClick={handleIsVisible}><FaIdCard /> { isVisible ? <FaChevronUp /> : <FaChevronDown /> }</span>
                <ul className={`${styles.dropdownMenu} ${isVisible ? styles.visible : styles.hidden}`}>
                    <li className={`${styles.dropdownMenuList} ${styles.list1}`}>
                        <p className={styles.list1P}>Ma carte de fidélité</p>
                        <FaChevronDown className={styles.lineDown} />
                        <div className={styles.flipBox}>
                            <div className={styles.flipBoxInner}>
                                <div className={styles.front}>
                                    <Image className={styles.frontImg} src={CardFront} priority alt="Face de la carte de fidélité de North Garden" />
                                </div>
                                <div className={styles.back}>
                                    <Image className={styles.backImg} src={CardBack} priority alt="Dos de la carte de fidélité de North Garden" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={`${styles.dropdownMenuList} ${styles.list2}`}>
                        <FaStamp className={styles.dropdownMenuListSvg} />
                        <p>Pour chaque projet fini, un tampon vous sera validé</p>
                    </li>
                    <li className={`${styles.dropdownMenuList} ${styles.list3}`}>
                        <FaGift className={styles.dropdownMenuListSvg} />
                        <p>Au <span className={styles.dropdownMenuListSpan}>5ème</span> passage, <span className={styles.dropdownMenuListSpan}>un cadeau</span> vous sera offert</p>
                    </li>
                    <li className={`${styles.dropdownMenuList} ${styles.list4}`}>
                        <FaPercentage className={styles.dropdownMenuListSvg} />
                        <p>Au <span className={styles.dropdownMenuListSpan}>10ème</span> passage, <span className={styles.dropdownMenuListSpan}>-10 %</span> vous sera effectué</p>
                    </li>
                    <li className={`${styles.dropdownMenuList} ${styles.list5}`}>
                        <ul className="reseauxList">
                        <li className="reseauxListItem"><a href="https://www.facebook.com/North.Garden.Paysage" target="_blank" rel="noopener noreferrer" className="facebook reseauxListItemA" title='Facebook'><FaFacebook className="reseauxListItemSvg" /></a></li>
                        <li className="reseauxListItem"><a href="https://twitter.com/North__Garden" target="_blank" rel="noopener noreferrer" className="twitter reseauxListItemA" title='Twitter'><FaTwitter className="reseauxListItemSvg" /></a></li>
                        <li className="reseauxListItem"><a href="https://www.instagram.com/north___garden/" target="_blank" rel="noopener noreferrer" className="instagram reseauxListItemA" title='Instagram'><FaInstagram className="reseauxListItemSvg" /></a></li>
                        <li className="reseauxListItem"><a href="https://discord.gg/cnDY943mEZ" target="_blank" rel="noopener noreferrer" className="discord reseauxListItemA" title='Discord'><FaDiscord className="reseauxListItemSvg" /></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <nav className={styles.menu}>
            <ul className={styles.menuList}> 
                <li className={styles.menuListItem}><NavLink className={styles.menuListItemA} href="/" title='Accueil'><span className={styles.headerASpan}>Accueil <FaHome /></span></NavLink></li>
                <li className={styles.menuListItem}><NavLink className={styles.menuListItemA} href="/prestations" title='Prestations'><span className={styles.headerASpan}>Prestations <HiClipboardList /></span></NavLink></li>
                <li className={styles.menuListItem}><NavLink className={styles.menuListItemA} href="/gallery" title='Galerie'><span className={styles.headerASpan}>Galerie <HiCamera /></span></NavLink></li>
                <li className={styles.menuListItem}><NavLink className={styles.menuListItemA} href="/contact" title='Me contacter'><span className={styles.headerASpan}>Me contacter <FaPaperPlane /></span></NavLink></li>
                <li className={`${styles.menuListItem} ${styles.filiere}`}><a className={`${styles.menuListItemA} ${styles.filiereA}`} href="https://northhelper.netlify.app" target="_blank" rel="noopener noreferrer" title='Filière North Helper'><span className={`${styles.headerASpan} ${styles.filiereASpan}`}>Filière <FaTools /></span></a></li>
            </ul>
        </nav>
        <nav className={styles.policy}>
            <ul className={styles.policyList}>
                <li className={styles.policyListItem}><NavLink className={styles.policyListItemA} href="/cgv" title='Mentions légales - CGV'><span className={styles.headerASpan}>Mentions légales - CGV</span></NavLink></li>
                <li className={styles.policyListItem}><NavLink className={styles.policyListItemA} href="/privacy" title='Politique de confidentialité'><span className={styles.headerASpan}>Politique de confidentialité</span></NavLink></li>
            </ul>
        </nav>
        <Footer />
    </header>
  )
}