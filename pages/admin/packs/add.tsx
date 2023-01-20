import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../components/Admin/layoutAdmin';

import { handleChangePack, handleCloseModalPack, handleAddPackSucces } from '../../../redux/reducer/reducerAdminPack';
import { addPack } from '../../../lib/requestApiPacks';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../components/Field/field';

export default function AddPackAdmin() {
    const name = useSelector((state: any) => state.adminPack.name);

    const dispatch = useDispatch();
    const router = useRouter();

    const notify = () => toast.success(`${name} ajouté avec succès`, {icon: <FaCheckCircle className='checkToast' />});
    const notifyNameError = () => toast.error(`Tu n'as pas écris de nom`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/packs');
            dispatch(handleCloseModalPack());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name === '') {
            notifyNameError();
        } else {
            const formData = {
                name: name
            }
            const json = await addPack(formData);
            if (json) {
                dispatch(handleAddPackSucces());
                router.push('/admin/packs');
                notify();
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangePack(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Ajouter un pack +</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Ajouter un pack +</h2>
                    <span className="closed northgarden">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm" onSubmit={handleSubmit}>
                        <Field type="text" name="name" value={name} onChange={handleChange} />
                        <button className="containerFormFormButton" type="submit">Valider</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    )
}