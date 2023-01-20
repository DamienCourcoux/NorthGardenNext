import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getFormules } from '../../lib/requestApiFormules';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

type Formules = {
    _id: number;
    name: string;
    description: string;
    price: number;
    packsId: number;
}

export default function FormulesAdmin() {
    const { isLoading, isError, data, error } = useQuery<Formules[] | any>('formules', getFormules);
    if (isLoading) return <Loader message='Les formules chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Formules</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northgarden">
                        Formules <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    <NavLink href="/admin/formules/add" className="elementsAdminHeadAdd" title="Ajouter une formule +">Ajouter une formule +</NavLink>
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((formule: Formules, index: number) => (
                            <div className="card cardMedium" key={formule._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className='name'>{formule.name}</p>
                                        <div className="info">
                                            <p>{formule.description === null || formule.description === '' ? '' : formule.description}</p>
                                            <p className="price"><CountUp end={formule.price} suffix=" €" /></p>
                                        </div>
                                        <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/formules/edit/${formule._id}`} title="Modifier la formule">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/formules/delete/${formule._id}`} title="Supprimer la formule">
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