import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';

import { handleChangePack, handleCloseModalPack, handleEditPackSucces } from '../../../../redux/reducer/reducerAdminPack';
import { updatePack } from '../../../../lib/requestApiPacks';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../../components/Field/field';

type Pack = {
    _id: string,
    name: string
}

export default function EditPackAdmin() {
    const name = useSelector((state: any) => state.adminPack.name);

    const dispatch = useDispatch();
    const router = useRouter();

    const notify = () => toast.success(`Le pack est modifié avec succès`, {icon: <FaCheckCircle className='checkToast' />});
    const notifyInfo = () => toast.info(`Le pack est modifié avec succès, mais est resté le même qu'avant !`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/packs');
            dispatch(handleCloseModalPack());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name === '') {
            const { id } = router.query as any;
            const formData = {
                name: name
            }
            const json = await updatePack(id, formData);
            if (json) {
                dispatch(handleEditPackSucces());
                router.push('/admin/packs');
                notifyInfo();
            }
        } else {
            const { id } = router.query as any;
            const formData = {
                name: name
            }
            const json = await updatePack(id, formData);
            if (json) {
                dispatch(handleEditPackSucces());
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
                <title>North Garden | Admin - Modifier un pack</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier un pack</h2>
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