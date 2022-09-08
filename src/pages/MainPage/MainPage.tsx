import hero from '../../assets/hero.png'
import Letters from './components/Letters/Letters'
import styles from './MainPage.module.scss'
import {useState} from 'react';
import Search from '../../components/Search/Search';
import SearchResultList from './components/SearchResult/SearchResultList';
import FAQ from './components/FAQ/FAQ';
import Sponsor from './components/Sponsor/Sponsor';

export default function MainPage(){
    const [searchValue, setSearchvalue] = useState('')

    const letterClick = (item: string) => {
        document.getElementById(item)?.scrollIntoView(true)
    }
    return(
    <>
        <img className={styles.img} src={hero} alt='hero'/>
        <Letters handleClick={letterClick}/>
        {/* <Search
            value={searchValue}
            onValueChange={setSearchvalue}
        /> */}
        <div className={styles.result} id='result'>
        <SearchResultList letter='A'/>
        <SearchResultList letter='B'/>
        <SearchResultList letter='C'/>
        </div>
        <FAQ/>
        <Sponsor/>
    </>
    )
}