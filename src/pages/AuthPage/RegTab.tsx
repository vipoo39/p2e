import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import {useState, useCallback, FormEvent, useRef} from 'react'
import user from '../../assets/man.svg'
import lock from '../../assets/lock.svg'
import mailSvg from '../../assets/mail.svg'
import checkSubmit from '../../utils/checkSubmit';

export default function RegTab(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [passT, setPassT] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const ref = useRef<HTMLFormElement>(null)

    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
        const nResp =  checkSubmit('text', name)
        const pResp =  checkSubmit('text', pass)
        const mResp =  checkSubmit('mail', mail)
        const ptResp =  checkSubmit('text', passT)
        if(nResp.status && 
            pResp.status &&
            ptResp.status && 
            mResp.status && 
            pass === passT
        ){
            setErr('')
            ref.current?.submit()
        } else {
            setErr( 
                (!nResp.status && nResp.text) ||
                (!pResp.status && pResp.text) ||
                (!ptResp.status && ptResp.text) ||
                (!mResp.status && mResp.text) ||
                'пароли не совпадают'
             )
        }
    }, [name, checkSubmit, mail, passT])
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
                value={mail}
                onChange={setMail}
                placeholder={'Email'}
                // icon={mailSvg}
                type='text'
            />
            <InputIcon
                value={pass}
                onChange={setPass}
                placeholder={'Пароль'}
                // icon={lock}
                type='password'
            />
            <InputIcon
                value={passT}
                onChange={setPassT}
                placeholder={'Подтвердите пароль'}
                // icon={lock}
                type='password'
            />
            <div className={styles.bodyRow}>
                <input type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio' style={{fontSize: 10}}>Я прочитал(а) и принимаю условия пользовательсткого соглашения</label>
            </div>
            <button className={styles.btn}  style={{marginBottom: 0}}>Регистрация</button>
            </form>
    )
}