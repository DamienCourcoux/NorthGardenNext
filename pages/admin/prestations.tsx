import Head from 'next/head';
import LayoutAdmin from '../../components/Admin/layoutAdmin';
import NavLink from '../../components/navlink';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CountUp from 'react-countup';
import Loader from '../../components/Loader/loader';
import { useQuery } from 'react-query';

import { getPrestations } from '../../lib/requestApiPrestations';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

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
    packsId: number;
}

export default function PrestationsAdmin() {
    const { isLoading, isError, data, error } = useQuery<Prestations[] | any>('prestations', getPrestations);
    if (isLoading) return <Loader message='Les prestations chargent...' />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;

    return (
        <LayoutAdmin>
            <Head>
                <title>North Garden | Admin - Prestations</title>
            </Head>
            <section className='elementsAdmin'>
                <div className="elementsAdminHead">
                    <h1 className="elementsAdminHeadTitle northgarden">
                        Prestations <em>(<CountUp end={data.length} />)</em>
                    </h1>
                    <NavLink href="/admin/prestations/add" className="elementsAdminHeadAdd" title="Ajouter une prestation +">Ajouter une prestation +</NavLink>
                </div>
                <div className="elementsAdminContainer">
                    {
                        data.map((prestation: Prestations, index: number) => (
                            <div className="card" key={prestation._id}>
                                <div className="cardBox">
                                    <div className="cardBoxContent">
                                        <span className="numero">
                                            {index + 1 < 10 ? <CountUp end={index + 1} prefix="0" /> : <CountUp end={index + 1} />}
                                        </span>
                                        <p className={prestation.name.includes('Premium') ? 'name premium' : 'name'}>
                                            {prestation.name}
                                            <em>{prestation.description === null || prestation.description === '' ? '' : prestation.description}</em>
                                        </p>
                                        <div className="info">
                                            <p>{prestation.mowing === null || prestation.mowing === '' ? '' : prestation.mowing}</p>
                                            <p>{prestation.hedgeTrimmer === null || prestation.hedgeTrimmer === '' ? '' : prestation.hedgeTrimmer}</p>
                                            <p>{prestation.bushPruning === null || prestation.bushPruning === '' ? '' : prestation.bushPruning}</p>
                                            <p>{prestation.weeding === null || prestation.weeding === '' ? '' : prestation.weeding}</p>
                                            <p>{prestation.brushCutter === null || prestation.brushCutter === '' ? '' : prestation.brushCutter}</p>
                                            <p>{prestation.planting === null || prestation.planting === '' ? '' : prestation.planting}</p>
                                            <p>{prestation.tarpaulin === null || prestation.tarpaulin === '' ? '' : prestation.tarpaulin}</p>
                                            <p>{prestation.mulching === null || prestation.mulching === '' ? '' : prestation.mulching}</p>
                                            <p>{prestation.planters === null || prestation.planters === '' ? '' : prestation.planters}</p>
                                            <p>{prestation.aromaticSeasonalFlower === null || prestation.aromaticSeasonalFlower === '' ? '' : prestation.aromaticSeasonalFlower}</p>
                                            <p>{prestation.soil === null || prestation.soil === '' ? '' : prestation.soil}</p>
                                            <p>{prestation.fertilizer === null || prestation.fertilizer === '' ? '' : prestation.fertilizer}</p>
                                            <p>{prestation.composition === null || prestation.composition === '' ? '' : prestation.composition}</p>
                                            <p>{prestation.brushing === null || prestation.brushing === '' ? '' : prestation.brushing}</p>
                                            <p>{prestation.washing === null || prestation.washing === '' ? '' : prestation.washing}</p>
                                            <p>{prestation.photo === null || prestation.photo === '' ? '' : prestation.photo}</p>
                                            <p>{prestation.blower === null || prestation.blower === '' ? '' : prestation.blower}</p>
                                            <p>{prestation.pickup === null || prestation.pickup === '' ? '' : prestation.pickup}</p>
                                            <p>{prestation.gifts === null || prestation.gifts === '' ? '' : prestation.gifts}</p>
                                            <p>{prestation.example === null || prestation.example === '' ? '' : prestation.example}</p>
                                            <p className="price">{prestation.price === 240320 ? <><CountUp end={240} suffix=" € (Plastique)" /> - <CountUp end={320} suffix=" € (Bois)" /></> : <CountUp end={prestation.price} suffix=" €" />}</p>
                                        </div>
                                        <div className="buttons">
                                            <i className='button buttonEdit'>
                                                <NavLink href={`/admin/prestations/edit/${prestation._id}`} title="Modifier la prestation">
                                                    <FaEdit />
                                                </NavLink>
                                            </i>
                                            {
                                                data.length > 1 ?
                                                    <i className='button buttonDelete'>
                                                        <NavLink href={`/admin/prestations/delete/${prestation._id}`} title="Supprimer la prestation">
                                                            <FaTrashAlt />
                                                        </NavLink>
                                                    </i> : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </LayoutAdmin>
    )
}