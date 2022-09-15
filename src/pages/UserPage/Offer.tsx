import styles from "./UserPage.module.scss"
import arrow from "../../assets/arrow.png" //Play icons created by Roundicons - Flaticon
import { useState, useEffect } from 'react';

type Props = {
    category: string
    items: {
        description: string
        price: number
    }[]
}

export const Offer = ({ category, items }: Props) => {
    const [priceFilter, setPriceFilter] = useState<null | boolean>(null)
    let [filterItems, setFilterItems] = useState(items)

    useEffect(() => {
        if (priceFilter === null) return;
        if (priceFilter === true) setFilterItems(prev => prev.sort((a, b) => a.price - b.price))
        if (priceFilter === false) setFilterItems(prev => prev.sort((a, b) => b.price - a.price))
    }, [priceFilter])

    return <div className={styles.offer}>
        <h3 className={styles.categoryName}>{category}</h3>
        <div className={styles.columnNames}>
            <p>Описание</p>
            <p className={styles.price}>Цена
                <span className={styles.arrows}>
                    {priceFilter === null && <>
                        <img className={styles.arrowTop} onClick={() => setPriceFilter(false)} src={arrow} alt='arrow up' />
                        <img className={styles.arrowBottom} onClick={() => setPriceFilter(true)} src={arrow} alt='arrow down' />
                    </>}
                    {priceFilter === true && <img className={styles.arrowTop} onClick={() => setPriceFilter(false)} src={arrow} alt='arrow up' />}
                    {priceFilter === false && <img className={styles.arrowBottom} onClick={() => setPriceFilter(true)} src={arrow} alt='arrow down' />}
                </span>
            </p>
        </div>
        <div className={styles.items}>
            {filterItems.map((i, index) => {
                return <div className={styles.item} key={index}>
                    <p className={styles.description}>{i.description}</p>
                    <p className={styles.price}>{i.price} ₽</p>
                </div>
            })}
        </div>
    </div>
}