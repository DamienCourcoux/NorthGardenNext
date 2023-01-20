import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleCloseModalTag, handleDeleteTagSucces } from '../../../../redux/reducer/reducerAdminTag';
import { getTag, deleteTag } from '../../../../lib/requestApiTags';

import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

type Tag = {
    _id: string,
    name: string
}

export default function DeleteTagAdmin() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id }: any = router.query;

    const { isLoading: isLoadingTag, isError: isErrorTag, data: tag, error: errorTag } = useQuery<Tag[] | any>('tag', () => getTag(id));

    if (isLoadingTag) return <Loader message="Le tag charge..." />;
    if (isErrorTag) return <div>J&apos;ai eu une erreur {`${errorTag}`}</div>;


    const notifyTag = () => toast.success("Le tag est supprimé avec succès", { icon: <FaCheckCircle className='checkToast' /> });

    const handleDeleteTag = async (id: any) => {
        const json = await deleteTag(id);
        if (json) {
            dispatch(handleDeleteTagSucces());
            router.push('/admin/tags');
            notifyTag();
        }
    };

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden' || e.target.className === 'btnAnnuler') {
            dispatch(handleCloseModalTag());
            router.push('/admin/tags');
        }
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Supprimer un tag</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="modalDelete">
                    <div className="modalDeleteHead">
                        <h2>Attention tu t&apos;apprêtes à <strong className="deleteStrong">SUPPRIMER</strong> le tag <span className='informationDelete'>&quot;{tag.name}&quot;</span></h2>
                        <span className="closed northgarden">x</span>
                    </div>
                    <div className="modalDeleteContainer">
                        <p>Es-tu sûr ?</p>
                        <div className="modalDeleteContainerBtn">
                            <button className="btnAnnuler">Non, Annuler <span className="northgarden icon">x</span></button>
                            <button className="btnDelete" onClick={() => handleDeleteTag(tag._id)}>Oui, Supprimer <FaTrashAlt className="icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}