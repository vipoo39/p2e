import { lettersMock } from "../../../../utils/mockData"
import styles from './Letter.module.scss'

export type LettersProps = {
    handleClick?: (letter: string) => void;
}

export default function Letters({handleClick} : LettersProps){

    return(
        <div className={`${styles.container} letter`}>
            {
                lettersMock.map((item, index) => <div id={`id${item}`} className={styles.item} onClick={() => handleClick && handleClick(item)} key={index}>{item}</div>)
            }
        </div>
    )
}