import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleChangeFormule, handleSelectChangeFormule, handleCloseModalFormule, handleEditFormuleSucces } from '../../../../redux/reducer/reducerAdminFormule';
import { updateFormule } from '../../../../lib/requestApiFormules';
import { getPacks } from '../../../../lib/requestApiPacks';

import { FaCheckCircle } from 'react-icons/fa';

import Field from '../../../../components/Field/field';
import stylesField from '../../../../components/Field/field.module.css';

type Packs = {
    _id: number;
    name: string;
    prestationsId: string;
    formulesId: string;
}

export default function EditFormuleAdmin() {
    const name = useSelector((state: any) => state.adminFormule.name);
    const description = useSelector((state: any) => state.adminFormule.description);
    const price = useSelector((state: any) => state.adminFormule.price);
    const packsId = useSelector((state: any) => state.adminFormule.packsId);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isLoading, isError, data, error } = useQuery<Packs[] | any>('packs', getPacks);
    if (isLoading) return <Loader message='Les packs chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    const notify = () => toast.success(`La formule est modifié avec succès`, { icon: <FaCheckCircle className='checkToast' /> });

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/formules');
            dispatch(handleCloseModalFormule());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { id } = router.query as any;
        const formData = {
            name,
            description,
            price,
            packsId
        }
        const json = await updateFormule(id, formData);
        if (json) {
            dispatch(handleEditFormuleSucces());
            router.push('/admin/formules');
            notify();
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
                <title>North Garden | Admin - Modifier une formule</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier une formule</h2>
                    <span className="closed northgarden">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm addElement" onSubmit={handleSubmit}>
                        <Field type="text" name="name" value={name} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="description" value={description} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="number" min="1" name="price" value={price} placeholder="non renseigné" onChange={handleChange} />
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