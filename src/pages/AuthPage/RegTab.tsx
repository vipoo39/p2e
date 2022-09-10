import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import { useState, useCallback, FormEvent, useRef, useEffect } from 'react'
import checkSubmit from '../../utils/checkSubmit'
import Repatcha from 'react-recaptcha'

const captchaProvidepProps = {
    reCaptchaKey: '6Lf45-khAAAAANV4KuIUZPJFazWgJxz04WeGLR5v',
}

export default function RegTab() {
    // useEffect(() => {
    //     let script = document.createElement('script');
    //     script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6Lf45-khAAAAANV4KuIUZPJFazWgJxz04WeGLR5v';
    //     script.id = 'captcha'
    //     document.head.appendChild(script)
    //     return () => {
    //         script.remove()
    //     }
    // }, [])

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [passT, setPassT] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [TOUR, setTOUR] = useState<'true' | 'false'>('true') //terms of the user afteement
    const ref = useRef<HTMLFormElement>(null)

    const [captchaVerify, setCaptchaVerify] = useState(false)
    const handleCaptchaVerify = useCallback((res: string) => {
        res && setCaptchaVerify(true)
    }, []);

    const handleSubmit = useCallback((event: FormEvent) => {
        event.preventDefault()
        const nResp = checkSubmit('name', name)
        const pResp = checkSubmit('password', pass)
        const mResp = checkSubmit('mail', mail)
        const ptResp = checkSubmit('passwordT', passT)
        const TOURResp = checkSubmit('TOUR', TOUR)
        if (nResp.status &&
            pResp.status &&
            ptResp.status &&
            mResp.status &&
            pass === passT && TOURResp.status && captchaVerify
        ) {
            let obj = { name, mail, pass }
            setErr('')
            console.log(obj)
        } else {
            setErr(
                (!nResp.status && nResp.text) ||
                (!pResp.status && pResp.text) ||
                (!ptResp.status && ptResp.text) ||
                (!mResp.status && mResp.text) ||
                (!TOURResp.status && TOURResp.text) ||
                (!captchaVerify && 'Вы должны пройти капчу') ||
                'Что-то пошло не так...'
            )
        }
    }, [name, checkSubmit, mail, passT, pass, TOUR])
    return (

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
                type='email'
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
                <input onChange={() => setTOUR(prev => prev === 'false' ? 'true' : 'false')} checked={TOUR === 'true'} type='checkbox' className={styles.radio} id='radio' />
                <label htmlFor='radio' style={{ fontSize: 10 }}>Я прочитал(а) и принимаю условия пользовательсткого соглашения</label>
            </div>
            <Repatcha theme='dark' badge='bottomleft' sitekey='6Lf45-khAAAAAHWwYMSITMzsERDQl0SfI9YbKC2K' onloadCallback={() => console.log('loaded')} verifyCallback={handleCaptchaVerify} />
            <button className={styles.btn} style={{ marginBottom: 0 }}>Регистрация</button>
        </form>

    )
}