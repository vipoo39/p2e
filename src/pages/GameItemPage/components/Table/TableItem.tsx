import styles from './Table.module.scss'
import {ORDER_URL} from '../../../../utils/links'
import { Link } from 'react-router-dom';

export type TableItemProps = {
    server: string;
    side: string;
    description: string;
    avatar: string;
    rate: number;
    review: number;
    count: number;
    nikname: string;
    price: number;
    game: string;
    category: string;
    id: string;
    online: string;
}

export default function TableItem({ id, server, game, category, side, description, nikname, avatar, rate, review, count, price, online}: TableItemProps){
    return(
       <Link 
        className={styles.item}
        to={{pathname: `${ORDER_URL}/${id}`, state: {nikname, avatar, server, side, count, game, back: category, online}}}
       >
        <div className={styles.server}>{server}</div>
        <div className={styles.side}>{side}</div>
        <div className={styles.desc}>{description}</div>
        <div className={styles.nik}>
            <Avatar
                img={avatar}
                name={nikname}
                review={review}
                rate={rate}
                server={server}
                side={side}
            />
        </div>
        <div className={styles.count}>{count}</div>
        <div className={styles.price}><span>{price}</span> <span>₽</span></div>
       </Link>
    )
}

type AvatarProps = {
    img: string;
    rate: number;
    review: number;
    name: string;
    side: string;
    server: string;
}

const Avatar = ({img, rate, review, name, side, server} : AvatarProps) => {
    return(
        <div className={styles.avatar}>
            <div className={styles.mob}>
                <span>{side}</span>
                <span>{server}</span>
            </div>
            <img src={img} className={styles.avatarImg} alt='avatar' />
            <div>
                <div className={styles.avatarTitle}>{name}</div>
                <div className={styles.avatarRate}>
                    {
                        new Array(rate).fill(0).map((_, index) => (
                            <svg width="10" className={styles.avatarRateStar} key={index}  height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.46355 0.332947L3.24299 2.80771L0.512158 3.20584C0.0224388 3.27687 -0.173823 3.8806 0.181317 4.2264L2.15701 6.15163L1.68973 8.87125C1.60561 9.36284 2.12337 9.73106 2.55701 9.50115L5 8.21704L7.44299 9.50115C7.87663 9.72919 8.39439 9.36284 8.31028 8.87125L7.84299 6.15163L9.81868 4.2264C10.1738 3.8806 9.97756 3.27687 9.48784 3.20584L6.75701 2.80771L5.53645 0.332947C5.31776 -0.108174 4.68411 -0.113782 4.46355 0.332947Z" fill="#FAE800"/>
                            </svg>

                        ))
                    }
                    <div className={styles.avatarRateNum}>{review}</div>
                </div>
            </div>
        </div>

    )
}