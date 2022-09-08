import styles from './Search.module.scss'
import icon from '../../assets/search.svg'
import { useRef, useEffect } from 'react';

export type SearchProps = {
    value: string;
    onValueChange: (val: string) => void;
    placeholder?: string;
    onBlur?: () => void;
    className?: string;
}

export default function Search({value, onValueChange, placeholder, onBlur, className}:SearchProps){
    const inputRef = useRef<HTMLInputElement>(null)
    const searchRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])
    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        
        // console.log(event.target, searchRef?.current)
        // if (inputRef.current && !inputRef.current.contains(event.target) && onBlur) {
            onBlur && onBlur()
        // }
    }

    return(
        <div className={`${styles.container} ${className ? className : ''}`}>
            <input
                ref={inputRef}
                className={styles.input} 
                placeholder={placeholder || 'Поиск...'} 
                value={value}
                onBlur={handleBlur}
                onChange={(e) => onValueChange(e.target.value)}
            />
            <img ref={searchRef} className={styles.icon} src={icon} alt='icon'/>
        </div>
    )
}