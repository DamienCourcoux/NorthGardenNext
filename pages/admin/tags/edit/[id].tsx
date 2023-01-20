import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';

import { handleChangeTag, handleCloseModalTag, handleEditTagSucces } from '../../../../redux/reducer/reducerAdminTag';
import { updateTag } from '../../../../lib/requestApiTags';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../../components/Field/field';

type Tag = {
    _id: string,
    name: string
}

export default function EditTagAdmin() {
    const name = useSelector((state: any) => state.adminTag.name);

    const dispatch = useDispatch();
    const router = useRouter();

    const notify = () => toast.success(`Le tag est modifié avec succès`, {icon: <FaCheckCircle className='checkToast' />});
    const notifyInfo = () => toast.info(`Le tag est modifié avec succès, mais est resté le même qu'avant !`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/tags');
            dispatch(handleCloseModalTag());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name === '') {
            const { id } = router.query as any;
            const formData = {
                name: name
            }
            const json = await updateTag(id, formData);
            if (json) {
                dispatch(handleEditTagSucces());
                router.push('/admin/tags');
                notifyInfo();
            }
        } else {
            const { id } = router.query as any;
            const formData = {
                name: name
            }
            const json = await updateTag(id, formData);
            if (json) {
                dispatch(handleEditTagSucces());
                router.push('/admin/tags');
                notify();
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangeTag(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Modifier un tag</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier un tag</h2>
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