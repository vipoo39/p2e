import styles from "./UserPage.module.scss"
import star from "./../../assets/star.svg"

type Props = {
    disableTotalCount?: boolean
}

const letterClick = () => {
    let element = document.getElementById('reviews')
    if (!element) return
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scroll({
        top: y - 60,
        behavior: 'smooth'
    });
}

export const Rate = ({ disableTotalCount = false }: Props) => {
    return <div className={styles.rate}>
        <h5>Рейтинг продавца</h5>
        <div className={styles.rateContent}>
            <p className={styles.totalRate}><span>5</span> из 5</p>
            <div className={styles.stars}>
                <div className={styles.star}>
                    <div className={styles.icons}>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>
                    <span className={styles.bar}></span>
                </div>
                <div className={`${styles.star} ${styles.disabled}`}>
                    <div className={styles.icons}>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>
                    <span className={styles.bar}></span>
                </div>
                <div className={`${styles.star} ${styles.disabled}`}>
                    <div className={styles.icons}>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>
                    <span className={styles.bar}></span>
                </div>
                <div className={`${styles.star} ${styles.disabled}`}>
                    <div className={styles.icons}>
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                    </div>
                    <span className={styles.bar}></span>
                </div>
                <div className={`${styles.star} ${styles.disabled}`}>
                    <div className={styles.icons}>
                        <img src={star} alt='star' />
                    </div>
                    <span className={styles.bar}></span>
                </div>
            </div>
            {!disableTotalCount && <p onClick={letterClick} className={styles.totalReviews}>Всего <br /> 12 отзывов</p>}
        </div>
    </div>
}