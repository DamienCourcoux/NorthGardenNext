import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getClients } from '../../lib/requestApiClients';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

type Clients = {
    _id: number;
    lastname: string;
    firstname: string;
    email: string;
    telephone: string;
    city: string;
    zipCode: string;
    desiredService: string;
    details: string;
}

export default function ClientsAdmin() {
    const { isLoading, isError, data, error } = useQuery<Clients[] | any>('clients', getClients);
    if (isLoading) return <Loader message='Les clients chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Clients</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northgarden">
                        Clients <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    {/* Le textarea ne marche pas et voir aussi pour afficher que les prestations/formules coorespondant dans les packs */}
                    {/* <NavLink href="/admin/clients/add" className="elementsAdminHeadAdd" title="Ajouter un client +">Ajouter un client +</NavLink> */}
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((client: Clients, index: number) => (
                            <div className="card" key={client._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className="name">
                                            {client.lastname} <span>{client.firstname}</span>
                                        </p>
                                        <div className="info">
                                            <p>{client.email === null || client.email === '' ? '' : client.email}</p>
                                            <p>{client.telephone === null || client.telephone === '' ? '' : client.telephone}</p>
                                            <p>{client.city === null || client.city === '' ? '' : client.city}</p>
                                            <p>{client.zipCode === null || client.zipCode === '' ? '' : client.zipCode}</p>
                                            <p>{client.desiredService === null || client.desiredService === '' ? '' : client.desiredService}</p>
                                            <p>{client.details === null || client.details === '' ? '' : client.details}</p>
                                        </div>
                                        {/* vu que le textarea ne marche pas, Edit non plus ! Delete marche bien mais vu que je peux pas pas en ajouter et que je ne veux pas supprimer ceux deja existant, je retire la possibilité pour l'instant des buttons */}
                                        {/* <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/clients/edit/${client._id}`} title="Modifier le client">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/clients/delete/${client._id}`} title="Supprimer le client">
                                                            <FaTrashAlt />
                                                        </NavLink>
                                                    </i> : ''
                                            }
                                        </div> */}
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