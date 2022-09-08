import { useCallback, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import Input from './Input';
import styles from './OrderPage.module.scss'
import { historyReviewMock } from '../../utils/mockData';
import HistoryItem from './HistoryItem';
import Chat, { chatType } from '../../components/Chat/Chat';
import { Link } from 'react-router-dom';
import { COMFIRM_URL, MAIN_URL } from '../../utils/links';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useBreadcrumbs } from '../../hooks/useBreadcrumbs';
import { HistoryReview } from './HistoryReview';

export default function OrderPage(){
    const location = useLocation<{back: string; game: string; avatar: string; nikname: string}>()
    const history = useHistory()
    useBreadcrumbs([{name: location.state?.game, link: `/game/${location.pathname.slice(-1)}`} || '', {name: location.state?.back, link: null}])
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')
    const [count, setCount] = useState('0')
    const [selectText, setSelectText] = useState('Выберите способ платежа')
    const [showList, setShowList] = useState(false)
    const [chat, updateChat] = useState<chatType[]>([])
    const handleListClick = (val: string) => {
        setSelectText(val)
        setShowList(false)
    }
    const [mess, setMess] = useState('')

    if(!!!location.state){
        history.replace({pathname: MAIN_URL})
        return null
    }

    return(
        <div className={styles.container}>
            <Breadcrumbs />
            <div className={styles.title}>{location.state.game || ''}</div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.table}>
                        <div className={styles.tableHeader}>
                            <span>Игра:</span>
                            <span>Категория:</span>
                            <span>Сторона:</span>
                            <span>Сервер:</span>
                            <span>Количество:</span>
                        </div>
                        <div className={styles.tableRow}>
                            <span>AION</span>
                            <span>Кинары</span>
                            <span>Асмодиане</span>
                            <span>Нортика</span>
                            <span>500кк</span>
                        </div>
                    </div>
                    <div className={styles.inputs}>
                        <Input
                            label='Имя персонажа'
                            placeholder='Введите имя персонажа...'
                            value={name}
                            onChange={setName}
                            id='name'
                        />
                        <Input
                            label='Заплачу'
                            placeholder='0'
                            value={price}
                            onChange={setPrice}
                            id='price'
                        />
                        <Input
                            label='Получу'
                            placeholder='0'
                            value={count}
                            onChange={setCount}
                            id='count'
                        />
                    </div>
                    <div className={styles.buy}>
                        <div className={styles.label}>
                            Способ оплаты
                        </div>
                        <div className={styles.buyContent}>
                            <div className={styles.select} onClick={() => setShowList(!showList)}>
                                <span>{selectText}</span>
                                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z" fill="white"/>
                                </svg>
                            </div>
                        {showList &&
                            <div className={styles.selectList}>
                                <li onClick={() => handleListClick('Банковская карта')}>Банковская карта</li>
                                <li onClick={() => handleListClick('QIWI')}>QIWI</li>
                                <li onClick={() => handleListClick('СБП')}>СБП</li>
                                <li onClick={() => handleListClick('Криптовалюта')}>Криптовалюта</li>
                            </div>
                        }
                            <Link to={{pathname: COMFIRM_URL, state: location.state}} className={styles.selectBtn}>
                                Купить
                            </Link>
                        </div>
                    </div>
                    <HistoryReview />
                </div>
                <div className={styles.chat}>
                    <div className={styles.chatHeader}>
                        <img src={location.state.avatar} alt='avatar'/>
                        <div>
                            <div className={styles.chatName}>{location.state.nikname || 'nick'}</div>
                            <div className={styles.chatStatus}>Online</div>
                        </div>
                    </div>
                    <Chat
                        value={mess}
                        onChange={setMess}
                        chat={chat}
                        setChat={updateChat}
                    />
                </div>
            </div>
        </div>
    )
}