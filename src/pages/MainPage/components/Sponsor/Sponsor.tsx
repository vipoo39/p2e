import spon1 from '../../../../assets/spon1.svg'
import spon2 from '../../../../assets/spon2.svg'
import spon3 from '../../../../assets/spon3.svg'
import spon4 from '../../../../assets/spon4.svg'
import styles from './Sponsor.module.scss'
import Carousel from 'better-react-carousel'

const responsive = [
    {
        breakpoint: 1000,
        cols: 1,
        rows: 2
    }
]

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '830px',
    margin: '60px auto',
    gap: '20px',
    width: '100%',
    flexWrap: 'wrap',
}

export default function Sponsor() {
    return (
        <div className={styles.container}>

            <Carousel cols={4} rows={1} mobileBreakpoint={0} showDots hideArrow responsiveLayout={responsive}>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon1} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon1} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon1} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>SANDBOX</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon2} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon2} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon2} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>Mines of Dalarnia</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>SPLINTERLANDS</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>Star Atlas</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>SPLINTERLANDS</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>Star Atlas</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>Star Atlas</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>SPLINTERLANDS</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon4} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon4} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>Star Atlas</div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.item}>
                        <a>
                            <img src={spon3} className={`${styles.img} ${styles.t}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.g}`} alt="sponsor" />
                            <img src={spon3} className={`${styles.img} ${styles.b}`} alt="sponsor" />
                        </a>
                        <div className={styles.title}>SPLINTERLANDS</div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    )
}