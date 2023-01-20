import styles from './headerAdmin.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NavLink from '../../navlink';
import { useDispatch } from 'react-redux';

import { createHandleLogout } from '../../../redux/reducer/reducerAdmin';

import petitBonhommeSolo from '../../../public/petitBonhommeSolo.png';

import { FaHome, FaBoxes, FaLayerGroup, FaUser, FaTag, FaUserTimes } from 'react-icons/fa';
import { HiClipboardList, HiCamera } from 'react-icons/hi';

export default function HeaderAdmin() {
    const pseudo = sessionStorage.getItem("pseudo");

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(createHandleLogout());
        router.push('/');
    }

    return (
        <header className={styles.headerAdmin}>
            <div className={styles.profil}>
                <div className={styles.profilAvatar}>
                    <Image className={styles.avatar} src={petitBonhommeSolo} alt="avatar de l'admin du site North Garden" />
                </div>
                <p className={`${styles.pseudo} northgarden`}>Bienvenue <br />{pseudo}</p>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin' ? styles.active : ''} href="/admin" title="Accueil">
                            <span>
                                Accueil <FaHome />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/packs' ? styles.active : ''} href="/admin/packs" title="Packs">
                            <span>
                                Packs <FaBoxes />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/prestations' ? styles.active : ''} href="/admin/prestations" title="Prestations">
                            <span>
                                Prestations <HiClipboardList />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/formules' ? styles.active : ''} href="/admin/formules" title="Formules">
                            <span>
                                Formules <FaLayerGroup />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/clients' ? styles.active : ''} href="/admin/clients" title="Clients">
                            <span>
                                Clients <FaUser />
                            </span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/tags' ? styles.active : ''} href="/admin/tags" title="Tags">
                            <span>
                                Tags <FaTag />
                            </span>
                        </NavLink>
                    </li>
                    {/* rajouter les images, quand ce sera fait, oublie pas le headerMobileBottom */}
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/pictures' ? styles.active : ''} href="#" title="Images">
                            <span>
                                Images <HiCamera /> (Ne marche pas pour l&apos;instant)
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={styles.logoutList}>
                    <li className={styles.logoutListItem}>
                        <p onClick={handleLogout} title="Déconnexion">Déconnexion <FaUserTimes /></p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}