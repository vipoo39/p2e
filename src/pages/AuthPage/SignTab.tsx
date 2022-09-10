import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import {useState, useCallback, FormEvent, useRef} from 'react'
import user from '../../assets/man.svg'
import lock from '../../assets/lock.svg'
import google from '../../assets/google.svg'
import vk from '../../assets/vk.svg'
import steam from '../../assets/steam.svg'
import checkSubmit from '../../utils/checkSubmit';

export default function SignTab(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const ref = useRef<HTMLFormElement>(null)

    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
        if(checkSubmit('email', email).status && checkSubmit('passwordL', pass).status){
            let obj = {email, pass, rememberMe}
            setErr('')
            console.log(obj)
        } else {
            setErr( !checkSubmit('email', email).status ? checkSubmit('email', email).text  : checkSubmit('passwordL', pass).text  )
        }
    }, [checkSubmit, email, pass, rememberMe])
    return(
        <form className={styles.body} onSubmit={handleSubmit} ref={ref}>
            {err !== '' && <div className={styles.err}>{err}</div>}
            <InputIcon
                value={email}
                onChange={setEmail}
                placeholder={'Почта'}
                type='email'
                // icon={user}
            />
            <InputIcon
                value={pass}
                onChange={setPass}
                placeholder={'Пароль'}
                // icon={lock}
                type='password'
            />
            <div className={styles.bodyRow}>
                <input checked={rememberMe} onChange={() => setRememberMe(prev => !prev)} type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio'>Запомнить меня</label>
            </div>
            <button className={styles.btn}  style={{marginBottom: 0}}>Войти</button>
        </form>
    )
}