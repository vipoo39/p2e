import { Link } from 'react-router-dom';
import { SINGIN_URL, REGISTER_URL } from '../../utils/links';
import styles from './AuthPage.module.scss'
import RegTab from './RegTab';
import SignTab from './SignTab';

export type AuthPageProps = {
    variant: AuthPageVariant;
    setToken: (usertoken: any) => void;
}

export enum AuthPageVariant {
    Reg,
    Sign
}

export default function AuthPage({ setToken, variant }: AuthPageProps) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.tab}>
                    <Link
                        to={{ pathname: SINGIN_URL }}
                        className={variant === AuthPageVariant.Sign ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem}
                        style={{ borderRadius: '10px 0px' }}
                    >Вход</Link>
                    <Link
                        to={{ pathname: REGISTER_URL }}
                        className={variant === AuthPageVariant.Reg ? `${styles.tabItem} ${styles.tabItemActive}` : styles.tabItem}
                        style={{ borderRadius: '0px 10px' }}
                    >Регистрация</Link>
                </div>
                {
                    variant === AuthPageVariant.Reg
                        ? (<RegTab />)
                        : (<SignTab setToken={setToken} />)
                }
            </div>
        </div>
    )
}