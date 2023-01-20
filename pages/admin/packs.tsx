import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getPacks } from '../../lib/requestApiPacks';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

type Packs = {
    _id: number;
    name: string;
    prestationsId: string;
    formulesId: string;
}

export default function PacksAdmin() {
    const { isLoading, isError, data, error } = useQuery<Packs[] | any>('packs', getPacks);
    if (isLoading) return <Loader message='Les informations chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Packs</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northgarden">
                        Packs <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    <NavLink href="/admin/packs/add" className="elementsAdminHeadAdd" title="Ajouter un pack +">Ajouter un pack +</NavLink>
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((pack: Packs, index: number) => (
                            <div className="card cardSmall" key={pack._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className="name">{pack.name}</p>
                                        <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/packs/edit/${pack._id}`} title="Modifier le pack">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/packs/delete/${pack._id}`} title="Supprimer le pack">
                                                            <FaTrashAlt />
                                                        </NavLink>
                                                    </i> : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </LayoutAdmin>
    )
}