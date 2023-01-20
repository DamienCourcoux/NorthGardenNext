import styles from '../styles/Admin.module.css';
import Head from 'next/head'
import LayoutAdmin from '../components/Admin/layoutAdmin'
import { useState } from 'react';
import NavLink from '../components/navlink';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/Loader/loader';
import { useQuery } from 'react-query';

import { getInformations } from '../lib/requestApiInformations';
import { FaEdit, FaTrashAlt, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';

import Presentation from '../public/presentation.jpeg';

type Information = {
    _id: string,
    information: string
}

export default function Admin() {
    const [actived, setActived] = useState(1);

    const toggle = (index: number, id: string) => {
        if (actived === index) return setActived(0);
        setActived(index);

        localStorage.setItem('idBanner', id);
    }

    const { isLoading: isLoadingInformations, isError: isErrorInformations, data: informations, error: errorInformations } = useQuery<Information[] | any>('informations', getInformations);

    if (isLoadingInformations) return <Loader message='Les informations chargent...' />;
    if (isErrorInformations) return <div>J&apos;ai eu une erreur {`${errorInformations}`}</div>;

    const notifySlider = () => toast.success("Slider supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    return (
        <>
            <Head>
                <title>North Garden | Admin</title>
            </Head>
            <LayoutAdmin>
                <article className={styles.admin}>
                    <h1 className={`${styles.title} northgarden`}>Administration</h1>
                    <div className={styles.container}>
                        <section className={styles.slider}>
                            <div className={styles.head}>
                                <h2 className={styles.headTitle}>Slider page d&apos;accueil</h2>
                                {/* <NavLink className="elementsAdminHeadAdd" href="/admin/slider/add" title="Ajouter un slider +">Ajouter un slider +</NavLink> */}
                            </div>
                            {/* il faudra gerer l'upload des images, ps pense a revoir les boutons delete pour consider avec les reste ! Attention le menu images a était supprimer pour l'instant pense a le remettre */}
                            {/* <div className={styles.images}>
                                <div className={styles.image}>
                                    <h3>Slider 1</h3>
                                    <Image src={Presentation} priority alt="slider 1" />
                                    <div className='buttons'>
                                        <i className='button buttonEdit'>
                                            <NavLink href={`/admin/slider/edit/sliderid`} title="Modifier le slider">
                                                <FaEdit />
                                            </NavLink>
                                        </i>
                                        <i className='button buttonDelete'>
                                            <FaTrashAlt />
                                        </i>
                                    </div>
                                </div>
                                <div className={styles.image}>
                                    <h3>Slider 2</h3>
                                    <Image src={Presentation} alt="slider 1" />
                                    <div className='buttons'>
                                        <i className='button buttonEdit'>
                                            <NavLink href={`/admin/slider/edit/sliderid`} title="Modifier le slider">
                                                <FaEdit />
                                            </NavLink>
                                        </i>
                                    </div>
                                </div>
                                <div className={styles.image}>
                                    <h3>Slider 3</h3>
                                    <Image src={Presentation} alt="slider 1" />
                                    <div className='buttons'>
                                        <i className='button buttonEdit'>
                                            <NavLink href={`/admin/slider/edit/sliderid`} title="Modifier le slider">
                                                <FaEdit />
                                            </NavLink>
                                        </i>
                                    </div>
                                </div>
                            </div> */}
                        </section>
                        <section className={styles.information}>
                            <div className={styles.head}>
                                <h2 className={styles.headTitle}>Bandeau d&apos;information</h2>
                                <NavLink className="elementsAdminHeadAdd" href="/admin/information/add" title="Ajouter un bandeau d'information +">Ajouter un bandeau d&apos;information +</NavLink>
                            </div>
                            <div className={styles.bandeaux}>
                                {
                                    informations.map((info: Information, index: number) => (
                                        <div className={actived === index || localStorage.getItem('idBanner') === info._id ? `${styles.bandeau} ${styles.active}` : styles.bandeau} key={info._id}>
                                            <div className={styles.info}>
                                                <em className={styles.numero}>{index + 1}</em>
                                                <p>{info.information}</p>
                                            </div>
                                            <div className='buttons'>
                                                <i className={actived === index || localStorage.getItem('idBanner') === info._id ? 'button buttonEye' : 'button'} title={actived === index || localStorage.getItem('idBanner') === info._id ? "Bandeau d'information actuel" : "Activer"} onClick={() => toggle(index, info._id)}>
                                                    {actived === index || localStorage.getItem('idBanner') === info._id ? <FaEye /> : < FaEyeSlash />}
                                                </i>
                                                <i className='button buttonEdit'>
                                                    <NavLink href={`/admin/information/edit/${info._id}`} title="Modifier le l'information">
                                                        <FaEdit />
                                                    </NavLink>
                                                </i>
                                                {
                                                    informations.length > 1 ?
                                                        <i className='button buttonDelete'>
                                                            <NavLink href={`/admin/information/delete/${info._id}`} title="Supprimer l'information">
                                                                <FaTrashAlt />
                                                            </NavLink>
                                                        </i> : ''
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </article>
            </LayoutAdmin>
        </>
    )
}
