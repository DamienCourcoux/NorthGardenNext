import styles from './information.module.css';
import Loader from '../Loader/loader';
import { useQuery } from 'react-query';

import { getInformation } from '../../lib/requestApiInformations';

type Information = {
    _id: string,
    information: string
}

export default function Information() {
    const id = localStorage.getItem('idBanner');

    const { isLoading, isError, data: information, error } = useQuery<Information[] | any>('information', () => getInformation(id ? id : 1));

    if (isLoading) return <Loader message="L'information charge..." />;
    if (isError) return <div>J&apos;ai eu une erreur {`${error}`}</div>;


    return (
        <section className={styles.information}>
            <video className={styles.video} playsInline autoPlay muted loop>
                <source src="/video.mp4" type="video/mp4" />
            </video>
            <p className={styles.info}>{information.information}</p>
        </section>
    )
}