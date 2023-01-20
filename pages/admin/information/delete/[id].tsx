import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalInformation, handleDeleteInformationSucces } from '../../../../redux/reducer/reducerAdminInformation';
import { getInformation, deleteInformation } from '../../../../lib/requestApiInformations';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Information = {
    _id: string,
    information: string
}

export default function DeleteInformationAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingInformation, isError: isErrorInformation, data: information, error: errorInformation } = useQuery<Information[] | any>('information', () => getInformation(id));

    if (isLoadingInformation) return <Loader message="L'information charge..." />;
    if (isErrorInformation) return <div>J&apos;ai eu une erreur {`${errorInformation}`}</div>;


    const notifyInfo = () => toast.success("Bandeau d'information supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });
    const notifyInfoError = () => toast.error("ATTENTION CHEF !! Tu veux supprimer le bandeau d'information actuel ! Active en d'abord un autre !");

    const handleDeleteInfo = async (id: any) => {
        if (id === localStorage.getItem('idBanner')) {
            router.push('/admin');
            notifyInfoError();
        } else {
            const json = await deleteInformation(id);
            if (json) {
                dispatch(handleDeleteInformationSucces());
                router.push('/admin');
                notifyInfo();
            }
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalInformation());
            router.push('/admin');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Supprimer un bandeau d&apos;information</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> le bandeau d&apos;information <span className='informationDelete'>&quot;{information.information}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeleteInfo(information._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}