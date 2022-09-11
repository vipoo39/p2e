import styles from './AuthPage.module.scss'
import InputIcon from './InputIcon'
import {useState, useCallback, FormEvent, useRef} from 'react'
import checkSubmit from '../../utils/checkSubmit';
import Repatcha from 'react-google-recaptcha'

export default function SignTab(){
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const ref = useRef<HTMLFormElement>(null)

    const [captchaVerify, setCaptchaVerify] = useState(false)
    const captchaRef = useRef<any>(null)
    const handleCaptchaVerify = useCallback((token: string | null) => {
        if (token === null) setCaptchaVerify(false);
        setCaptchaVerify(true)
    }, []);

    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
        const mResp = checkSubmit('mail', email)
        const PLResp = checkSubmit('passwordL', pass)

        if(mResp.status && PLResp.status && captchaVerify){
            let obj = {email, pass, rememberMe}
            setErr('')
            setEmail('')
            setPass('')
            setRememberMe(false)
            setCaptchaVerify(false)
            captchaRef.current?.reset && captchaRef.current?.reset()
            console.log(obj)
        } else {
            setErr( !checkSubmit('email', email).status ? checkSubmit('email', email).text  : checkSubmit('passwordL', pass).text  )
            setErr( (!mResp.status && mResp.text) ||
            (!PLResp.status && PLResp.text) ||
            (!captchaVerify && 'Вы должны пройти капчу') ||
            'Что-то пошло не так...')
        }
    }, [checkSubmit, email, pass, rememberMe, captchaVerify])
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
            <Repatcha ref={captchaRef} onChange={handleCaptchaVerify} size={window.innerWidth <= 400 ? 'compact' : 'normal'} theme='dark' hl='ru' sitekey={'6LcF4-whAAAAAMUm1K7CQkl04fG7f2yOxDPzmeaQ'} />
            <button className={styles.btn}  style={{marginBottom: 0}}>Войти</button>
        </form>
    )
}