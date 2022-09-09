import hero from '../../assets/hero.png'
import Letters from './components/Letters/Letters'
import styles from './MainPage.module.scss'
import SearchResultList from './components/SearchResult/SearchResultList';
import FAQ from './components/FAQ/FAQ';
import Sponsor from './components/Sponsor/Sponsor';

export default function MainPage() {
    const letterClick = (item: string) => {
        document.getElementById(item)?.scrollIntoView(true)
    }
    return (
        <>
            <img className={styles.img} src={hero} alt='hero' />
            <div className={styles.result} id='result'>
                <Letters handleClick={letterClick} />
                <div className={styles.resultInner}>
                    <SearchResultList letter='A' />
                    <SearchResultList letter='B' />
                    <SearchResultList letter='C' />
                    <SearchResultList letter='D' />
                    <SearchResultList letter='E' />
                </div>
            </div>
            <FAQ />
            <Sponsor />
        </>
    )
}