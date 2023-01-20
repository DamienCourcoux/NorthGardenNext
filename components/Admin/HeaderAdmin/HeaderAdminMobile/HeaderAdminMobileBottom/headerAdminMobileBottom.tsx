import styles from './headerAdminMobileBottom.module.css';
import NavLink from '../../../../navlink';
import { useRouter } from 'next/router';

import { FaHome, FaBoxes, FaLayerGroup, FaUser, FaTag } from 'react-icons/fa';
import { HiClipboardList, HiCamera } from 'react-icons/hi';

export default function HeaderAdminMobileBottom() {
    const router = useRouter();

    return (
        <header className={styles.headerAdminMobileBottom}>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin' ? styles.active : ''} href="/admin" title='Accueil'>
                            <FaHome />
                        </NavLink>
                        </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/packs' ? styles.active : ''} href="/admin/packs" title='Packs'>
                            <FaBoxes />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/prestations' ? styles.active : ''} href="/admin/prestations" title='Prestations'>
                            <HiClipboardList />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/formules' ? styles.active : ''} href="/admin/formules" title='Formules'>
                            <FaLayerGroup />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/clients' ? styles.active : ''} href="/admin/clients" title='Clients'>
                            <FaUser />
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/tags' ? styles.active : ''} href="/admin/tags" title='Tags'>
                            <FaTag />
                        </NavLink>
                    </li>
                    {/* rajouter les images */}
                    {/* <li className={styles.item}>
                        <NavLink className={router.pathname === '/admin/pictures' ? styles.active : ''} href="/admin/pictures" title='Images'>
                            <HiCamera />
                        </NavLink>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}