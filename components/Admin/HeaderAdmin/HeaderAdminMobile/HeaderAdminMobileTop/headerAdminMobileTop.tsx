import styles from './headerAdminMobileTop.module.css';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { createHandleLogout } from '../../../../../redux/reducer/reducerAdmin';

import petitBonhommeSolo from '../../../../../public/petitBonhommeSolo.png';

import { FaUserTimes } from 'react-icons/fa';

export default function HeaderAdminMobileTop() {
    const pseudo = sessionStorage.getItem("pseudo");

    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(createHandleLogout());
        router.push('/');
    }

    return (
        <header className={styles.headerAdminMobileTop}>
            <div className={styles.profil}>
                <div className={styles.profilAvatar}>
                    <Image className={styles.avatar} src={petitBonhommeSolo} alt="avatar de l'admin du site North Garden" />
                </div>
                <p className={`${styles.pseudo} northgarden`}>Bienvenue <br />{pseudo}</p>
            </div>
            <nav className={styles.logout}>
                <ul className={styles.logoutList}>
                    <li className={styles.logoutListItem}><p onClick={handleLogout} title='Déconnexion'>Déconnexion <FaUserTimes /></p></li>
                </ul>
            </nav>
        </header>
    )
}