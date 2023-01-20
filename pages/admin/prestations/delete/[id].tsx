import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalPrestation, handleDeletePrestationSucces } from '../../../../redux/reducer/reducerAdminPrestation';
import { getPrestation, deletePrestation } from '../../../../lib/requestApiPrestations';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Prestations = {
    _id: number;
    name: string;
    description: string;
    mowing: string;
    hedgeTrimmer: string;
    bushPruning: string;
    weeding: string;
    brushCutter: string;
    planting: string;
    tarpaulin: string;
    mulching: string;
    planters: string;
    aromaticSeasonalFlower: string;
    soil: string;
    fertilizer: string;
    composition: string;
    brushing: string;
    washing: string;
    photo: string;
    blower: string;
    pickup: string;
    gifts: string;
    example: string;
    price: number;
    packsId: string;
}

export default function DeletePrestationAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingPrestation, isError: isErrorPrestation, data: prestation, error: errorPrestation } = useQuery<Prestations[] | any>('prestation', () => getPrestation(id));

    if (isLoadingPrestation) return <Loader message="La prestation charge..." />;
    if (isErrorPrestation) return <div>J&apos;ai eu une erreur {`${errorPrestation}`}</div>;


    const notifyPrestation = () => toast.success("La prestation est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeletePrestation = async (id: any) => {
        const json = await deletePrestation(id);
        if (json) {
            dispatch(handleDeletePrestationSucces());
            router.push('/admin/prestations');
            notifyPrestation();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalPrestation());
            router.push('/admin/prestations');
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
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> la prestation <span className='informationDelete'>&quot;{prestation.name}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeletePrestation(prestation._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}