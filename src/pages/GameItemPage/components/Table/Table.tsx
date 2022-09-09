import styles from './Table.module.scss'
import { useState, useEffect } from 'react';
import { lootMock } from '../../../../utils/mockData';
import TableItem from './TableItem';
import { TableItemName } from './TableItemName';

export type TableProps = {
    game: string;
    category: string;
}

type ItemsType = typeof lootMock
export type TableFiltersType = ItemsType[0]
export type TableItemKeys = keyof TableFiltersType

export default function Table(props: TableProps){
    const [filters, setFilters] = useState<TableFiltersType>({} as TableFiltersType)
    const [items, setItems] = useState(lootMock)

    useEffect(() => {
        let newItems = lootMock.filter(i => {
            let filterKeys = Object.keys(filters) as TableItemKeys[]
            return filterKeys.every(k => i[k] === filters[k])
        })
        setItems(newItems)
    }, [filters])

    const getUniqeItems = (filterKey: TableItemKeys) => {
        return lootMock.filter((value, index, self) => index === self.findIndex((t) => t[filterKey] === value[filterKey])).map(f => f[filterKey])
    }

    return(
        <div className={styles.table}>
            <div className={styles.header}>
                <TableItemName className={styles.headerServer} enName='server' name='Сервер' items={getUniqeItems('server')} filters={filters} setNewFilter={setFilters} />
                <TableItemName className={styles.side} enName='side' name='Сторона' items={getUniqeItems('side')} filters={filters} setNewFilter={setFilters} />
                <div className={styles.desc}>Описание</div>
                <TableItemName className={styles.nik} enName='online' name='Ник' items={['Онлайн', 'Оффлайн']} filters={filters} setNewFilter={setFilters} />
                <div className={styles.count}>Наличные</div>
                <div>Цена</div>
            </div>
            <div className={styles.list}>
                {
                    items.map(item => (
                        <TableItem key={item.id} {...props} {...item}/>
                    ))
                }
                {items.length === 0 &&
                    <h4 className={styles.notFound}>Не найдено</h4>
                }
            </div>
        </div>
    )
}