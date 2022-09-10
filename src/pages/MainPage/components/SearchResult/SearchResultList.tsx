import { useEffect } from 'react';
import { lettersMock } from '../../../../utils/mockData'
import styles from './SearchResult.module.scss'
import SearchResultItem from './SearchResultItem'
import { useSelector } from 'react-redux';
import { selectSearchItems } from '../../../../redux/selectors';

export type SearchResultListProps = {
    letter: string;
}

export default function SearchResultList({ letter }: SearchResultListProps) {
    let items = useSelector(selectSearchItems).filter(i => i.name.slice(0, 1) === letter)

    useEffect(() => {

        const handle = () => {
            let currnetLetterDiv = lettersMock.filter(l => l === letter)
            currnetLetterDiv.forEach(item => {
                const id = '#id' + item
                const elem = document.querySelector(id)
                let container = document.getElementById(letter)

                const isVisible = () => {
                    if (!container) return
                    var position = container.getBoundingClientRect();
                
                    // checking whether fully visible
                    if((position.top >= 0 && position.bottom <= window.innerHeight) || (position.top < window.innerHeight && position.bottom >= 0)) {
                        return true
                    }
                }

                if (isVisible()) {
                    if (elem) {
                        {/*@ts-expect-error*/ }
                        elem.style.color = 'rgb(17 223 37)'
                    }
                } else {
                    if (elem) {
                        {/*@ts-expect-error*/ }
                        elem.style.color = '#bdbdbd'
                    }
                }
            })
        }

        window.addEventListener('scroll', handle)

        return () => window.removeEventListener('scroll', handle)
    }, [])
    return (
        <div id={letter}>
            <div className={styles.title}>
                {letter}
            </div>
            <div className={styles.result}>
                {
                    items.map((item, index) => (
                        <SearchResultItem key={index} {...item} />
                    ))
                }
                {items.length === 0 &&
                    <h4 className={styles.notFound}>Не найдено</h4>
                }
            </div>
        </div>
    )
}