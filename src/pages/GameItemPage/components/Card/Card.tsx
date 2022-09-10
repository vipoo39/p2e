
import styles from './Card.module.scss'

export type CardProps = {
    imgBig : string;
    name: string;
    description: string;
    tags: string;
    category: string;
    setCategory: (val: string) => void;
}

export default function Card({imgBig, name, description, tags, category, setCategory}: CardProps){
    return(
        <div className={styles.container}>
            <img className={styles.img} src={imgBig} alt="avatar" />
            <div>
                <div className={styles.title}>
                    <span>{name}</span>
                    <button>Продать валюту</button>
                </div>
                <div className={styles.text}>{description}</div>
                <div className={styles.itemContainer}>
                    {
                        tags.split(',').map((item, index) => (
                            <div 
                                className={category === item ? `${styles.item} ${styles.itemActive}` : styles.item} 
                                key={index}
                                onClick={() => setCategory(item)}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}