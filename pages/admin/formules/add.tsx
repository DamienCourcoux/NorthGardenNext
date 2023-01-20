import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../components/Admin/layoutAdmin';
import Loader from '../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleChangeFormule, handleSelectChangeFormule, handleCloseModalFormule, handleAddFormuleSucces } from '../../../redux/reducer/reducerAdminFormule';
import { addFormule } from '../../../lib/requestApiFormules';
import { getPacks } from '../../../lib/requestApiPacks';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../components/Field/field';
import stylesField from '../../../components/Field/field.module.css';

type Packs = {
    _id: number;
    name: string;
    prestationsId: string;
    formulesId: string;
}

export default function AddFormuleAdmin() {
    const name = useSelector((state: any) => state.adminFormule.name);
    const description = useSelector((state: any) => state.adminFormule.description);
    const price = useSelector((state: any) => state.adminFormule.price);
    const packsId = useSelector((state: any) => state.adminFormule.packsId);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isLoading, isError, data, error } = useQuery<Packs[] | any>('packs', getPacks);
    if (isLoading) return <Loader message='Les packs chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    const notify = () => toast.success(`${name} ajouté avec succès`, { icon: <FaCheckCircle className='checkToast' /> });
    const notifyNameError = () => toast.error(`Tu n'as pas écris de nom`);
    const notifyPriceError = () => toast.error(`Tu n'as pas écris de prix`);
    const notifySelectError = () => toast.error(`Tu n'as pas sélectionner de pack`);

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/formules');
            dispatch(handleCloseModalFormule());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (name === '') {
            notifyNameError();
        } else if (price === '') {
            notifyPriceError();
        } else if (packsId === '') {
            notifySelectError();
        } else {
            const formData = {
                name,
                description,
                price,
                packsId
            }
            const json = await addFormule(formData);
            if (json) {
                dispatch(handleAddFormuleSucces());
                router.push('/admin/formules');
                notify();
            }
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangeFormule(payload));
    };

    const handleSelectChange = (e: any) => {
        const payload = { name: e.target.name, target: e.target.value }
        dispatch(handleSelectChangeFormule(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Ajouter une formule +</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Ajouter une formule +</h2>
                    <span className="closed northgarden">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm addElement" onSubmit={handleSubmit}>
                        <Field type="text" name="name" value={name} onChange={handleChange} />
                        <Field type="text" name="description" value={description} onChange={handleChange} />
                        <Field type="number" min="1" name="price" value={price} onChange={handleChange} />
                        <label htmlFor="packs" className={stylesField.label}>
                            Associer à quel pack ?
                            <select name="packsId" id="packs" className={stylesField.input} onChange={handleSelectChange}>
                                {
                                    data.map((pack: Packs) => (
                                        <option key={pack._id} value={pack._id}>{pack.name}</option>
                                    ))
                                }
                            </select>
                        </label>
                        <button className="containerFormFormButton" type="submit">Valider</button>
                    </form>
                </div>
            </div>
        </LayoutAdmin>
    )
}