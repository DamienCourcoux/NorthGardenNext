import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LayoutAdmin from '../../../../components/Admin/layoutAdmin';
import Loader from '../../../../components/Loader/loader';
import { useQuery } from 'react-query';

import { handleChangePrestation, handleSelectChangePrestation, handleCloseModalPrestation, handleEditPrestationSucces } from '../../../../redux/reducer/reducerAdminPrestation';
import { updatePrestation } from '../../../../lib/requestApiPrestations';
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

export default function EditPrestationAdmin() {
    const name = useSelector((state: any) => state.adminPrestation.name);
    const description = useSelector((state: any) => state.adminPrestation.description);
    const mowing = useSelector((state: any) => state.adminPrestation.mowing);
    const hedgeTrimmer = useSelector((state: any) => state.adminPrestation.hedgeTrimmer);
    const bushPruning = useSelector((state: any) => state.adminPrestation.bushPruning);
    const weeding = useSelector((state: any) => state.adminPrestation.weeding);
    const brushCutter = useSelector((state: any) => state.adminPrestation.brushCutter);
    const planting = useSelector((state: any) => state.adminPrestation.planting);
    const tarpaulin = useSelector((state: any) => state.adminPrestation.tarpaulin);
    const mulching = useSelector((state: any) => state.adminPrestation.mulching);
    const planters = useSelector((state: any) => state.adminPrestation.planters);
    const aromaticSeasonalFlower = useSelector((state: any) => state.adminPrestation.aromaticSeasonalFlower);
    const soil = useSelector((state: any) => state.adminPrestation.soil);
    const fertilizer = useSelector((state: any) => state.adminPrestation.fertilizer);
    const composition = useSelector((state: any) => state.adminPrestation.composition);
    const brushing = useSelector((state: any) => state.adminPrestation.brushing);
    const washing = useSelector((state: any) => state.adminPrestation.washing);
    const photo = useSelector((state: any) => state.adminPrestation.photo);
    const blower = useSelector((state: any) => state.adminPrestation.blower);
    const pickup = useSelector((state: any) => state.adminPrestation.pickup);
    const gifts = useSelector((state: any) => state.adminPrestation.gifts);
    const example = useSelector((state: any) => state.adminPrestation.example);
    const price = useSelector((state: any) => state.adminPrestation.price);
    const packsId = useSelector((state: any) => state.adminPrestation.packsId);

    const dispatch = useDispatch();
    const router = useRouter();

    const { isLoading, isError, data, error } = useQuery<Packs[] | any>('packs', getPacks);
    if (isLoading) return <Loader message='Les packs chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    const notify = () => toast.success(`La prestation est modifié avec succès`, { icon: <FaCheckCircle className='checkToast' /> });

    const handleCloseModal = (e: any) => {
        if (e.target.className === 'container' || e.target.className === 'closed northgarden') {
            router.push('/admin/prestations');
            dispatch(handleCloseModalPrestation());
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { id } = router.query as any;
        const formData = {
            name,
            description,
            mowing,
            hedgeTrimmer,
            bushPruning,
            weeding,
            brushCutter,
            planting,
            tarpaulin,
            mulching,
            planters,
            aromaticSeasonalFlower,
            soil,
            fertilizer,
            composition,
            brushing,
            washing,
            photo,
            blower,
            pickup,
            gifts,
            example,
            price,
            packsId
        }
        const json = await updatePrestation(id, formData);
        if (json) {
            dispatch(handleEditPrestationSucces());
            router.push('/admin/prestations');
            notify();
        }
    };

    const handleChange = (value: string, name: string) => {
        const payload = { name, value }
        dispatch(handleChangePrestation(payload));
    };

    const handleSelectChange = (e: any) => {
        const payload = { name: e.target.name, target: e.target.value }
        dispatch(handleSelectChangePrestation(payload));
    };

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Modifier une prestation</title>
            </Head>
            <div className="container" onClick={handleCloseModal}>
                <div className="containerHead">
                    <h2>Modifier une prestation</h2>
                    <span className="closed northgarden">x</span>
                </div>
                <div className="containerForm">
                    <form className="containerFormForm addElement" onSubmit={handleSubmit}>
                        <Field type="text" name="name" value={name} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="description" value={description} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="mowing" value={mowing} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="hedgeTrimmer" value={hedgeTrimmer} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="bushPruning" value={bushPruning} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="weeding" value={weeding} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="brushCutter" value={brushCutter} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="planting" value={planting} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="tarpaulin" value={tarpaulin} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="mulching" value={mulching} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="planters" value={planters} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="aromaticSeasonalFlower" value={aromaticSeasonalFlower} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="soil" value={soil} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="fertilizer" value={fertilizer} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="composition" value={composition} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="brushing" value={brushing} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="washing" value={washing} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="photo" value={photo} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="blower" value={blower} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="pickup" value={pickup} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="gifts" value={gifts} placeholder="non renseigné" onChange={handleChange} />
                        <Field type="text" name="example" value={example} placeholder="non renseigné" onChange={handleChange} />
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