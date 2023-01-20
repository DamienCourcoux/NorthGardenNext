import styles from './startProject.module.css';
import NavLink from '../navlink';

import {FaPaperPlane} from 'react-icons/fa';

export default function StartProject() {
    return (
        <div className={styles.startProject}>
            <h2 className={`${styles.title} northgarden`}>Vous avez un projet ?</h2>
            <p className={styles.paragraph}>Je suis là pour répondre à votre demande</p>
            <NavLink href="/contact" className={styles.commencerUnProjet} title="Commencer un project">Commencer un projet <FaPaperPlane /></NavLink>
        </div>
    )
}