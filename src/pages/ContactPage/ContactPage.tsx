import styles from './ContactPage.module.scss'
import { useState, useCallback, FormEvent, useRef } from 'react'
import checkSubmit from '../../utils/checkSubmit';

export default function ContactPage(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [mess, setMess] = useState('')
    const [err, setErr] = useState('')
    const ref = useRef<HTMLFormElement>(null)
    const handleSubmit = useCallback((event: FormEvent) =>  {
        event.preventDefault()
        const nResp =  checkSubmit('text', name)
        const mResp =  checkSubmit('mail', mail)
        const pResp =  checkSubmit('tel', tel)
        const ptResp =  checkSubmit('text', mess)
        if(nResp.status && 
            pResp.status &&
            ptResp.status && 
            mResp.status 
        ){
            setErr('')
            ref.current?.submit()
        } else {
            setErr( 
                (!nResp.status && nResp.text) ||
                (!pResp.status && pResp.text) ||
                (!ptResp.status && ptResp.text) ||
                (!mResp.status && mResp.text) ||
                'ошибка'
             )
        }
    }, [checkSubmit, name, mail, tel, mess])
    return(
        <div className={styles.container}>
            <form className={styles.body} onSubmit={handleSubmit} ref={ref}>
                <div className={styles.title}>Форма обратной связи</div>
                {err !== '' && <div className={styles.err}>{err}</div>}
                <input 
                    className={styles.input} 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Введите ваше имя'
                />
                <input 
                    className={styles.input} 
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type='text'
                    placeholder='Введите свой E-mail'
                />
                <input 
                    className={styles.input} 
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder='Введите номер телефона '
                />
                <textarea 
                    rows={4}
                    className={styles.input} 
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    placeholder='Введите номер телефона '
                />
                <button className={styles.btn}>Отправить</button>
            </form>
        </div>
    )
}