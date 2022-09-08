import { useEffect } from 'react';
import { games, lettersMock } from '../../../../utils/mockData'
import styles from './SearchResult.module.scss'
import SearchResultItem from './SearchResultItem'

export type SearchResultListProps = {
    letter: string;
}

export default function SearchResultList({letter} : SearchResultListProps){
    useEffect(() => {

        const handle = () => {
            lettersMock.forEach(item => {
                const id = '#id' + item
                const elem = document.querySelector(id) 
                if(document.querySelector(`#${item}`) !== null && (window.innerHeight - 100 > (document.querySelector(`#${item}`)?.getBoundingClientRect().top || 0)) && ((document.querySelector(`#${item}`)?.getBoundingClientRect().top || 0) > -(window.innerHeight / 2))  ){
                    
                    if(elem){
                        {/*@ts-expect-error*/}
                        elem.style.color = '#069514'
                    }
                } else {
                    if(elem){
                        {/*@ts-expect-error*/}
                        elem.style.color = '#bdbdbd' 
                    }
                }
            })
        }

        window.addEventListener('scroll', handle)

        return () => window.removeEventListener('scroll', handle)
    }, [])
    return(
        <div id={letter}>
            <div className={styles.title}>
                {letter}
            </div>
            <div className={styles.result}>
                {
                    games.map(item => (
                        <SearchResultItem key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}