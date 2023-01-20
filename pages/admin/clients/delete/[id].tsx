import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalClient, handleDeleteClientSucces } from '../../../../redux/reducer/reducerAdminClient';
import { getClient, deleteClient } from '../../../../lib/requestApiClients';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

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

export default function DeleteClientAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingClient, isError: isErrorClient, data: client, error: errorClient } = useQuery<Clients[] | any>('client', () => getClient(id));

    if (isLoadingClient) return <Loader message="Le client charge..." />;
    if (isErrorClient) return <div>J&apos;ai eu une erreur {`${errorClient}`}</div>;


    const notifyClient = () => toast.success("Le client est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeleteClient = async (id: any) => {
        const json = await deleteClient(id);
        if (json) {
            dispatch(handleDeleteClientSucces());
            router.push('/admin/clients');
            notifyClient();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalClient());
            router.push('/admin/clients');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Supprimer un client</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> le client <span className='informationDelete'>&quot;{`${client.lastname} ${client.firstname}`}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeleteClient(client._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}