import styles from './Table.module.scss'
import {useState} from 'react';
import { lootMock } from '../../../../utils/mockData';
import TableItem from './TableItem';

export type TableProps = {
    game: string;
    category: string;
}

export default function Table(props: TableProps){
    const [, setServer] = useState('')
    const [show, setShow] = useState(false)
    const handleSetServer = (val: string) => {
        setShow(false)
        setServer(val)
    }
    return(
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={`${styles.headerServer} ${styles.server}`}>
                    <div className={styles.headerServerTop} onClick={() => setShow(!show)}>
                        Сервер
                        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47171 6.43917L0.22038 2.05066C-0.07346 1.74734 -0.07346 1.25686 0.22038 0.95676L0.92685 0.22749C1.22069 -0.07583 1.69584 -0.07583 1.98656 0.22749L5 3.33817L8.0134 0.22749C8.3073 -0.07583 8.7824 -0.07583 9.0731 0.22749L9.7796 0.95676C10.0735 1.26008 10.0735 1.75056 9.7796 2.05066L5.52829 6.43917C5.2407 6.7425 4.76555 6.7425 4.47171 6.43917Z" fill="white"/>
                        </svg>
                    </div>
                { show &&
                    <div className={styles.headerServerList}>
                        <div className={styles.headerServerListItem} onClick={() => handleSetServer('test')}>test</div>      
                        <div className={styles.headerServerListItem} onClick={() => handleSetServer('test2')}>test2</div>
                    </div>
                }
                </div>
                <div className={styles.side}>Сторона</div>
                <div className={styles.desc}>Описание</div>
                <div className={styles.nik}>Ник</div>
                <div className={styles.count}>Наличные</div>
                <div>Цена</div>
            </div>
            <div className={styles.list}>
                {
                    lootMock.map(item => (
                        <TableItem key={item.id} {...props} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}