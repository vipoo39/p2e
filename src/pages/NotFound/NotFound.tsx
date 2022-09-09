import { Link } from "react-router-dom"
import styles from "./NotFound.module.scss"

export const NotFound = () => {
    return <section className={styles.notFound}>
        <h2 className={styles.heading}>Не найдено :(</h2>
        <Link className={styles.toMainPage} to='/'>На главную страницу</Link>
    </section>
}