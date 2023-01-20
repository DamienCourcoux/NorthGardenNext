import styles from './layoutPolicy.module.css';

import { FaDownload } from 'react-icons/fa';

type Props = {
  children: React.ReactNode;
  href: string;
  download: string;
}

export default function LayoutPolicy({ children, href, download }: Props) {
    return (
        <section className={styles.policy}>
            <a className={styles.download} href={href} download={download}>Télécharger en PDF <FaDownload /></a>
            <div className={styles.pages}>
                {children}
            </div>
        </section>
    )
}