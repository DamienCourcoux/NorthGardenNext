import styles from './layoutPage.module.css';
import StartProject from './StartProject/startProject';

type Props = {
  children: React.ReactNode;
  title?: string;
  startProject?: boolean;
  error?: string;
}

export default function LayoutPage({ children, title, startProject, error }: Props) {
    return (
        <section className={styles.container}>
            {
                startProject
                    ? <h1 className={`${styles.title} northgarden`}>{title === '404' ? '' : title}</h1>
                    : (

                        <div className={styles.contactHead}>
                            <h1 className={`${styles.contactTitle} northgarden`}>Me Contacter</h1>
                            <p className={styles.contactSubtitle}>
                                <span className={styles.contactSubtitleLeft}>Des questions ?</span>
                                <span className={styles.contactSubtitleRight}>Ecrivez-moi un message !</span>
                            </p>
                        </div>
                    )
            }
            {children}
            {title === '404' ? '' : startProject ? <StartProject /> : ''}
        </section>
    )
}