import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';

import { handleChangeInformation, handleCloseModalInformation, handleEditInformationSucces } from '../../../../redux/reducer/reducerAdminInformation';
import { updateInformation } from '../../../../lib/requestApiInformations';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../../components/Field/field';

type Information = {
    _id: string,
    information: string
}

export default function EditInformationAdmin() {
    const information = useSelector((state: any) => state.adminInformation.information);

    const dispatch = useDispatch();
    const router = useRouter();

    const notify = () => toast.success(`Bandeau d'information modifié avec succès`, { icon: <FaCheckCircle className='checkToast' /> });
    const notifyInfo = () => toast.info(`Bandeau d'information modifié avec succès, mais est resté le même qu'avant !`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin');
            dispatch(handleCloseModalInformation());
        }
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (information === '') {
            const { id } = router.query as any;
            const formData = {
                information: information
            }
            const json = await updateInformation(id, formData);
            if (json) {
                dispatch(handleEditInformationSucces());
                router.push('/admin');
                notifyInfo();
            }
        } else {
            const { id } = router.query as any;
            const formData = {
                information: information
            }
            const json = await updateInformation(id, formData);
            if (json) {
                dispatch(handleEditInformationSucces());
                router.push('/admin');
                notify();
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangeInformation(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Modifier un bandeau d&apos;information</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier un bandeau d&apos;information</h2>
                    <span className="closed northgarden">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm" onSubmit={handleSubmit}>
                        <Field type="text" name="information" value={information} onChange={handleChange} />
                        <button className="containerFormFormButton" type="submit">Valider</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    )
}