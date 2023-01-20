import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getTags } from '../../lib/requestApiTags';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

type Tags = {
    _id: number;
    name: string;
    picturesId: string;
}

export default function TagsAdmin() {
    const { isLoading, isError, data, error } = useQuery<Tags[] | any>('tags', getTags);
    if (isLoading) return <Loader message='Les tags chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Tags</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northgarden">
                        Tags <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    <NavLink href="/admin/tags/add" className="elementsAdminHeadAdd" title="Ajouter un tag +">Ajouter un tag +</NavLink>
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((tag: Tags, index: number) => (
                            <div className="card cardSmall" key={tag._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className="name">{tag.name}</p>
                                        <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/tags/edit/${tag._id}`} title="Modifier le tag">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/tags/delete/${tag._id}`} title="Supprimer le tag">
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