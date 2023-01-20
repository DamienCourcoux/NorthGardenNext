import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../components/Admin/layoutAdmin';

import { handleChangeInformation, handleCloseModalInformation, handleAddInformationSucces } from '../../../redux/reducer/reducerAdminInformation';
import { addInformation } from '../../../lib/requestApiInformations';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../components/Field/field';

export default function AddInformationAdmin() {
    const information = useSelector((state: any) => state.adminInformation.information);

    const dispatch = useDispatch();
    const router = useRouter();

    const notify = () => toast.success(`Bandeau d'information ajouté avec succès`, { icon: <FaCheckCircle className='checkToast' /> });
    const notifyInformationError = () => toast.error(`Tu n'as pas écris d'information'`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin');
            dispatch(handleCloseModalInformation());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (information === '') {
            notifyInformationError();
        } else {
            const formData = {
                information: information
            }
            const json = await addInformation(formData);
            if (json) {
                dispatch(handleAddInformationSucces());
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
                <title>North Garden | Admin - Ajouter un bandeau d&apos;information +</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Ajouter un bandeau d&apos;information +</h2>
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