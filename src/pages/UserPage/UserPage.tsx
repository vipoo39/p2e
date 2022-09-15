import styles from "./UserPage.module.scss"
import { useEffect, useState, useRef } from 'react';
import { mockUsers } from './../../utils/mockData';
import { Redirect, useParams } from "react-router-dom";
import { Rate } from "./Rate";
import { Offer } from "./Offer";
import star from "./../../assets/star.svg"
import Chat, { chatType } from "../../components/Chat/Chat";

const monthNames = ["январь", "февраль", "марта", "апрель", "май", "июнь",
    "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];

export const UserPage = () => {
    const params = useParams<{ id?: string }>()
    const user = mockUsers.find(u => u.id === Number(params.id))
    const [chatValue, setChatValue] = useState('')
    const [chatItems, setChatItems] = useState<chatType[]>([])
    const [showReviewsFilter, setShowReviewsFilter] = useState(false)
    const openReviewsFilterRef = useRef<HTMLButtonElement>(null)
    const reviewFiltersRef = useRef<HTMLUListElement>(null)
    const [reviewItems, setReviewItems] = useState(user?.reviews)
    const [reviewsPortion, setReviewsPortion] = useState(0)
    const [reviewStars, setReviewStars] = useState(0)

    const handeNewPortion = () => {
        setReviewsPortion(prev => prev + 1)
    }
    const handleClearPortion = () => {
        setReviewsPortion(1)
    }

    useEffect(() => {
        document.title = `Пользователь ${user?.name} / React App` || 'React App'
        return () => {
            document.title = 'React App'
        }
    }, [])
    useEffect(() => {
        if (!user) return;

        let newItems = user.reviews.filter(r => r.stars === reviewStars)
        setReviewItems(newItems)
        setShowReviewsFilter(false)
        setReviewsPortion(1)
    }, [reviewStars])

    if (!user) {
        return <Redirect to='/' />
    }

    let regHour = new Intl.DateTimeFormat('ru', { hour: '2-digit' }).format(user.regDate)
    let regMinute = new Intl.DateTimeFormat('ru', { minute: '2-digit' }).format(user.regDate)

    const handleReviewsFilterBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
        if (e.relatedTarget !== openReviewsFilterRef.current && e.relatedTarget !== reviewFiltersRef.current) {
            setShowReviewsFilter(false)
        }
    }

    let reviewItemsPortion = 10 * reviewsPortion
    let reviewItemsPortionToRender = reviewItems?.slice(0, reviewItemsPortion)

    let reviewsButton
    if (reviewStars === 0) {
        reviewsButton = 'Все отзывы'
    } else if (reviewStars === 1) {
        reviewsButton = <div>
        <img src={star} alt='star' />
    </div>
    } else if (reviewStars === 2) {
        reviewsButton = <div>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
    </div>
    } else if (reviewStars === 3) {
        reviewsButton = <div>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
    </div>
    } else if (reviewStars === 4) {
        reviewsButton = <div>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
    </div>
    } else if (reviewStars === 5) {
        reviewsButton = <div>
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
        <img src={star} alt='star' />
    </div>
    }

    return <div className={styles.userPage}>
        <div className={styles.heading}>
            <div className={styles.userData}>
                <img className={styles.avatar} src={user.avatar} alt='avatar' />
                <h1 className={styles.name}>{user.name} <span className={user.online ? styles.online : styles.offline}>{user.online ? 'Онлайн' : 'Оффлайн'}</span></h1>
            </div>
            <div className={styles.regDateAndRate}>
                <div className={styles.regDate}>
                    <h5>Дата регистрации</h5>
                    <p>{`${user.regDate.getMonth()} ${monthNames[user.regDate.getMonth()]}, ${regHour}: ${regMinute}`}</p>
                </div>
                <Rate />
            </div>
        </div>
        <div className={styles.offers}>
            <h5>Предложения</h5>
            <div className={styles.offers}>
                {Object.keys(user.offers).map((k, index) => {
                    //@ts-ignore
                    return <Offer key={index} category={user.offers[k].category} items={user.offers[k].items} />
                })}
            </div>
        </div>
        <div id='reviews' className={styles.reviews}>
            <h5>Отзывы</h5>
            <div className={styles.content}>
                <div className={styles.reviewsContainer}>
                    <Rate disableTotalCount />
                    <div className={styles.filterReviews}>
                        <p>10 отзывов за 5 месяцев</p>
                        <div className={`${styles.button} ${showReviewsFilter ? styles.active : ''}`}>
                            <button ref={openReviewsFilterRef} onBlur={handleReviewsFilterBlur} onClick={() => setShowReviewsFilter(prev => !prev)}>{reviewsButton}</button>
                            {showReviewsFilter && <ul tabIndex={-1} ref={reviewFiltersRef}>
                                <li onClick={() => setReviewStars(5)}>
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                </li>
                                <li onClick={() => setReviewStars(4)}>
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                </li>
                                <li onClick={() => setReviewStars(3)}>
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                </li>
                                <li onClick={() => setReviewStars(2)}>
                                    <img src={star} alt='star' />
                                    <img src={star} alt='star' />
                                </li>
                                <li onClick={() => setReviewStars(1)}>
                                    <img src={star} alt='star' />
                                </li>
                            </ul>}
                        </div>
                    </div>
                </div>
                <div className={styles.items}>
                    {reviewItems?.length === 0 && <p>Не найдено</p>}
                    {reviewItemsPortionToRender?.map((r, index) => {
                        let reviewStars: JSX.Element[] = []
                        for (let i = 0; i <= 5; i++) {
                            reviewStars.push(<img src={star} alt={'star'} />)
                        }

                        return <div className={styles.item} key={index}>
                            <img className={styles.avatar} src={r.avatar} alt='avatar' />
                            <p className={styles.date}>
                                <span>{r.date}</span>
                                <span>{r.buyData}</span>
                            </p>
                            <p className={styles.description}>{r.description}</p>
                            <div className={styles.stars}>{reviewStars}</div>
                        </div>
                    })}
                </div>
                <div className={styles.actions}>
                    {reviewItemsPortion <= (reviewItems?.length || 0) && <button className={styles.action} onClick={handeNewPortion}>Показать ещё</button>}
                    {reviewsPortion !== 1 && <button className={styles.action} onClick={handleClearPortion}>Спрятать</button>}
                </div>
            </div>
        </div>
        <div className={styles.chatContainer}>
            <div className={styles.chatHeading}>
                <img src={user.avatar} alt='avatar' />
                <div>
                    <h4>{user.name}</h4>
                    <p>Был в сети 11 минут назад</p>
                </div>
            </div>
            <Chat className={styles.chat} value={chatValue} onChange={value => setChatValue(value)} chat={chatItems} setChat={setChatItems} />
        </div>
    </div>
}