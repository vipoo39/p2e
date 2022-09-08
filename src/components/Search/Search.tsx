import styles from './Search.module.scss'
import icon from '../../assets/search.svg'
import { useRef, useEffect } from 'react';

export type SearchProps = {
    value: string;
    onValueChange: (val: string) => void;
    placeholder?: string;
    onBlur?: () => void;
}

export default function Search({value, onValueChange, placeholder, onBlur}:SearchProps){
    const inputRef = useRef<HTMLInputElement>(null)
    
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return(
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.input} 
                placeholder={placeholder || 'Поиск...'} 
                value={value}
                onBlur={onBlur}
                onChange={(e) => onValueChange(e.target.value)}
            />
            <img className={styles.icon} src={icon} alt='icon'/>
        </div>
    )
}