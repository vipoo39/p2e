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
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const ref = useRef<HTMLFormElement>(null)

    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
        if(checkSubmit('text', name).status && checkSubmit('text', pass).status){
            setErr('')
            ref.current?.submit()
        } else {
            setErr( !checkSubmit('text', name).status ? checkSubmit('text', name).text  : checkSubmit('text', pass).text  )
        }
    }, [checkSubmit, name, pass])
    return(
        <form className={styles.body} onSubmit={handleSubmit} ref={ref}>
            {err !== '' && <div className={styles.err}>{err}</div>}
            <InputIcon
                value={name}
                onChange={setName}
                placeholder={'Имя пользователя'}
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
                <input type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio'>Запомнить меня</label>
            </div>
            <button className={styles.btn}  style={{marginBottom: 0}}>Войти</button>
        </form>
    )
}