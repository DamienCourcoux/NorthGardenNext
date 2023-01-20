import Head from 'next/head';
import styles from './layoutAdmin.module.css';
import HeaderAdmin from './HeaderAdmin/headerAdmin';
import HeaderAdminMobileTop from './HeaderAdmin/HeaderAdminMobile/HeaderAdminMobileTop/headerAdminMobileTop';
import HeaderAdminMobileBottom from './HeaderAdmin/HeaderAdminMobile/HeaderAdminMobileBottom/headerAdminMobileBottom';
import Connexion from './Connexion/connexion';
import { useSelector } from 'react-redux';

type Props = {
    children: React.ReactNode;
}

export default function LayoutAdmin({ children }: Props) {
    const isLogged = useSelector((state: any) => state.admin.isLogged);
    const token = sessionStorage.getItem("token");

    return (
        <section className={styles.admin}>
            {
                isLogged || token ? (
                    <div className={styles.container}>
                        <HeaderAdmin />
                        <main className={styles.main}>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <li className={styles.cube}></li>
                            <HeaderAdminMobileTop />
                            {children}
                            <HeaderAdminMobileBottom />
                        </main>
                    </div>
                ) : <Connexion />
            }
        </section>
    )
}