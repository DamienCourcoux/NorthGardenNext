import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalFormule, handleDeleteFormuleSucces } from '../../../../redux/reducer/reducerAdminFormule';
import { getFormule, deleteFormule } from '../../../../lib/requestApiFormules';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Formules = {
    _id: number;
    name: string;
    description: string;
    price: number;
    packsId: string;
}

export default function DeleteFormuleAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingFormule, isError: isErrorFormule, data: formule, error: errorFormule } = useQuery<Formules[] | any>('formule', () => getFormule(id));

    if (isLoadingFormule) return <Loader message="La formule charge..." />;
    if (isErrorFormule) return <div>J&apos;ai eu une erreur {`${errorFormule}`}</div>;


    const notifyFormule = () => toast.success("La formule est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeleteFormule = async (id: any) => {
        const json = await deleteFormule(id);
        if (json) {
            dispatch(handleDeleteFormuleSucces());
            router.push('/admin/formules');
            notifyFormule();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalFormule());
            router.push('/admin/formules');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Supprimer une formule</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> la formule <span className='informationDelete'>&quot;{formule.name}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeleteFormule(formule._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}