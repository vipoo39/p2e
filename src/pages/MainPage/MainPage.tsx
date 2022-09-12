import hero from '../../assets/hero.png'
import Letters from './components/Letters/Letters'
import styles from './MainPage.module.scss'
import SearchResultList from './components/SearchResult/SearchResultList';
import FAQ from './components/FAQ/FAQ';
import Sponsor from './components/Sponsor/Sponsor';
import { useEffect } from 'react';
import { lettersMock } from '../../utils/mockData';

const isVisible = (elem: HTMLElement | null) => {
    if (!elem) return
    var position = elem.getBoundingClientRect();
    // checking whether fully visible
    if ((position.top >= 0 && position.bottom <= window.innerHeight) || (position.top < window.innerHeight && position.bottom >= 0)) {
        return true
    }
}

export default function MainPage() {
    const letterClick = (item: string) => {
        let element = document.getElementById(item)
        if (!element) return
        const y = element.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y - 60,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handle = () => {
            let activeLetters = lettersMock.filter(l => {
                let container = document.getElementById(l)
                return isVisible(container)
            }).map(l => {
                let container = document.getElementById(l)
                if (!container) return { letter: '', top: 0 };
                let top = container.getBoundingClientRect().top
                return { letter: l, top }
            })
            let activeLetterTop = Math.max(...activeLetters.map(v => v.top))
            let activeLetter = activeLetters.find(l => l.top === activeLetterTop)

            lettersMock.forEach(item => {
                const id = '#id' + item
                const elem = document.querySelector(id)
                if (activeLetter?.letter === item) {
                    if (elem) {
                        {/*@ts-expect-error*/ }
                        elem.style.color = 'rgb(0 255 25)'
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
        <>
            <img className={styles.img} src={hero} alt='hero' />
            <div className={styles.result} id='result'>
                <Letters handleClick={letterClick} />
                <div className={styles.resultInner}>
                    <SearchResultList letter='A' />
                    <SearchResultList letter='B' />
                    <SearchResultList letter='C' />
                </div>
            </div>
            <FAQ />
            <Sponsor />
        </>
    )
}