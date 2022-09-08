import spon1 from '../../../../assets/spon1.svg'
import spon2 from '../../../../assets/spon2.svg'
import spon3 from '../../../../assets/spon3.svg'
import spon4 from '../../../../assets/spon4.svg'
import styles from './Sponsor.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Sponsor() {
    return (
        <Carousel showArrows={false} showStatus={false}>
            <div className={styles.container}>
                <div className={styles.item}>
                    <a>
                        <img src={spon1} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon1} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon1} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>SANDBOX</div>
                </div>
                <div className={styles.item}>
                    <a>
                        <img src={spon2} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon2} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon2} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>Mines of Dalarnia</div>
                </div>
                <div className={styles.item}>
                    <a>
                        <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>SPLINTERLANDS</div>
                </div>
                <div className={styles.item}>
                    <a>
                        <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>Star Atlas</div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.item}>
                    <a>
                        <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>SPLINTERLANDS</div>
                </div>
                <div className={styles.item}>
                    <a>
                        <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>Star Atlas</div>
                </div>
                <div className={styles.item}>
                    <a>
                        <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                        <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                    </a>
                    <div className={styles.title}>Star Atlas</div>
                </div>
            </div>
        </Carousel>
    )
}