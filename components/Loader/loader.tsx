import styles from './loader.module.css';

type Props = {
    message: string
}

export default function Loader({ message }: Props) {
    return (
        <section className={styles.loader}>
            <div className={styles.container}>
                <span className={styles.flowerLoader}>Loading...</span>
                <p>{message}</p>
            </div>
        </section>
    )
}