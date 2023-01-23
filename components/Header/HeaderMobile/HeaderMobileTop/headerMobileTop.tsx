import styles from './headerMobileTop.module.css';
import stylesHeader from '../../header.module.css';
import NavLink from '../../../navlink';
import Image from 'next/image';
import Footer from '../../../Footer/footer';
import { useState } from 'react';

import Logo from '../../../../public/logo.png';
import CardFront from '../../../../public/cartefidelitefront.png';
import CardBack from '../../../../public/cartefideliteback.png';

import {
    FaIdCard, FaChevronDown, FaChevronUp,
    FaStamp, FaGift, FaPercentage,
    FaFacebook, FaTwitter, FaInstagram, FaDiscord,
    FaHome, FaPaperPlane, FaTools
} from 'react-icons/fa';
import { HiClipboardList, HiCamera } from 'react-icons/hi';

export default function HeaderMobileTop() {
    const [toggleBurger, setToggleBurger] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleBurger = () => {
        setToggleBurger(current => !current);
    }

    const handleIsVisible = () => {
        setIsVisible(current => !current)
    }


    return (
        <header className={styles.headerMobileTop}>
            <div className={styles.container}>
                <NavLink className={styles.logo} href="/" title='Accueil'>
                    <Image className={styles.img} src={Logo} alt="logo du site North Garden, paysagiste d'une nouvelle aire" title="North Garden" />
                </NavLink>
                <div className={styles.menuBurger} onClick={handleToggleBurger}>
                    <div className={toggleBurger ? `${styles.hamburgerIcon} ${styles.toggleBurger}` : styles.hamburgerIcon} title={toggleBurger ? 'Fermer le menu' : 'Ouvrir le menu'}></div>
                </div>
            </div>
            {
                toggleBurger ? (
                    <div className={styles.menuDropdown}>
                        <div className={stylesHeader.cardDropdown}>
                            <span className={stylesHeader.cardDropdownButton} title='Fonctionnement de la carte de fidélité' onClick={handleIsVisible}><FaIdCard /> {isVisible ? <FaChevronUp /> : <FaChevronDown />}</span>
                            <ul className={`${stylesHeader.dropdownMenu} ${isVisible ? stylesHeader.visible : stylesHeader.hidden}`}>
                                <li className={`${stylesHeader.dropdownMenuList} ${stylesHeader.list1}`}>
                                    <p className={stylesHeader.list1P}>Ma carte de fidélité</p>
                                    <FaChevronDown className={stylesHeader.lineDown} />
                                    <div className={stylesHeader.flipBox}>
                                        <div className={stylesHeader.flipBoxInner}>
                                            <div className={stylesHeader.front}>
                                                <Image className={stylesHeader.frontImg} src={CardFront} priority alt="Face de la carte de fidélité de North Garden" />
                                            </div>
                                            <div className={stylesHeader.back}>
                                                <Image className={stylesHeader.backImg} src={CardBack} priority alt="Dos de la carte de fidélité de North Garden" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className={`${stylesHeader.dropdownMenuList} ${stylesHeader.list2}`}>
                                    <FaStamp className={stylesHeader.dropdownMenuListSvg} />
                                    <p>Pour chaque projet fini, un tampon vous sera validé</p>
                                </li>
                                <li className={`${stylesHeader.dropdownMenuList} ${stylesHeader.list3}`}>
                                    <FaGift className={stylesHeader.dropdownMenuListSvg} />
                                    <p>Au <span className={stylesHeader.dropdownMenuListSpan}>5ème</span> passage, <span className={stylesHeader.dropdownMenuListSpan}>un cadeau</span> vous sera offert</p>
                                </li>
                                <li className={`${stylesHeader.dropdownMenuList} ${stylesHeader.list4}`}>
                                    <FaPercentage className={stylesHeader.dropdownMenuListSvg} />
                                    <p>Au <span className={stylesHeader.dropdownMenuListSpan}>10ème</span> passage, <span className={stylesHeader.dropdownMenuListSpan}>-10 %</span> vous sera effectué</p>
                                </li>
                                <li className={`${stylesHeader.dropdownMenuList} ${stylesHeader.list5}`}>
                                    <ul className="reseauxList">
                                        <li className="reseauxListItem"><a href="https://www.facebook.com/North.Garden.Paysage" target="_blank" rel="noopener noreferrer" className="facebook reseauxListItemA" title='Facebook'><FaFacebook className="reseauxListItemSvg" /></a></li>
                                        <li className="reseauxListItem"><a href="https://twitter.com/North__Garden" target="_blank" rel="noopener noreferrer" className="twitter reseauxListItemA" title='Twitter'><FaTwitter className="reseauxListItemSvg" /></a></li>
                                        <li className="reseauxListItem"><a href="https://www.instagram.com/north___garden/" target="_blank" rel="noopener noreferrer" className="instagram reseauxListItemA" title='Instagram'><FaInstagram className="reseauxListItemSvg" /></a></li>
                                        <li className="reseauxListItem"><a href="https://discord.gg/cnDY943mEZ" target="_blank" rel="noopener noreferrer" className="discord reseauxListItemA" title='Discord'><FaDiscord className="reseauxListItemSvg" /></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <nav className={stylesHeader.menu}>
                            <ul className={stylesHeader.menuList}>
                                <li className={stylesHeader.menuListItem}><NavLink className={stylesHeader.menuListItemA} href="/" title='Accueil'><span className={stylesHeader.headerASpan}>Accueil <FaHome /></span></NavLink></li>
                                <li className={stylesHeader.menuListItem}><NavLink className={stylesHeader.menuListItemA} href="/prestations" title='Prestations'><span className={stylesHeader.headerASpan}>Prestations <HiClipboardList /></span></NavLink></li>
                                <li className={stylesHeader.menuListItem}><NavLink className={stylesHeader.menuListItemA} href="/gallery" title='Galerie'><span className={stylesHeader.headerASpan}>Galerie <HiCamera /></span></NavLink></li>
                                <li className={stylesHeader.menuListItem}><NavLink className={stylesHeader.menuListItemA} href="/contact" title='Me contacter'><span className={stylesHeader.headerASpan}>Me contacter <FaPaperPlane /></span></NavLink></li>
                                <li className={`${stylesHeader.menuListItem} ${stylesHeader.filiere}`}><a className={`${stylesHeader.menuListItemA} ${stylesHeader.filiereA}`} href="https://northhelper.netlify.app" target="_blank" rel="noopener noreferrer" title='Filière North Helper'><span className={`${stylesHeader.headerASpan} ${stylesHeader.filiereASpan}`}>Filière <FaTools /></span></a></li>
                            </ul>
                        </nav>
                        <nav className={stylesHeader.policy}>
                            <ul className={stylesHeader.policyList}>
                                <li className={stylesHeader.policyListItem}>
                                    <NavLink className={stylesHeader.policyListItemA} href="/cgv" title='Mentions légales - CGV' onClick={handleToggleBurger}>
                                        <span className={stylesHeader.headerASpan}>Mentions légales - CGV</span>
                                    </NavLink>
                                </li>
                                <li className={stylesHeader.policyListItem}>
                                    <NavLink className={stylesHeader.policyListItemA} href="/privacy" title='Politique de confidentialité' onClick={handleToggleBurger}>
                                        <span className={stylesHeader.headerASpan}>Politique de confidentialité</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Footer />
                    </div>
                ) : ''
            }
        </header>
    )
}