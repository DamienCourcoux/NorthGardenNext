import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalPack, handleDeletePackSucces } from '../../../../redux/reducer/reducerAdminPack';
import { getPack, deletePack } from '../../../../lib/requestApiPacks';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Pack = {
    _id: string,
    name: string
}

export default function DeletePackAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingPack, isError: isErrorPack, data: pack, error: errorPack } = useQuery<Pack[] | any>('pack', () => getPack(id));

    if (isLoadingPack) return <Loader message="Le pack charge..." />;
    if (isErrorPack) return <div>J&apos;ai eu une erreur {`${errorPack}`}</div>;


    const notifyPack = () => toast.success("Le pack est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeletePack = async (id: any) => {
        const json = await deletePack(id);
        if (json) {
            dispatch(handleDeletePackSucces());
            router.push('/admin/packs');
            notifyPack();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalPack());
            router.push('/admin/packs');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Supprimer un pack</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> le pack <span className='informationDelete'>&quot;{pack.name}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeletePack(pack._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}