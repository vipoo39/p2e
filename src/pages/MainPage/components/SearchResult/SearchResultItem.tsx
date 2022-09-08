import styles from './SearchResult.module.scss'
import { Link } from 'react-router-dom';
import { GAMES_URL } from '../../../../utils/links';

export type SearchResultItemProps = {
    id: string;
    imgSmall: string;
    name: string;
    tags: string | string[]
}

export default function SearchResultItem({id, imgSmall, name, tags} : SearchResultItemProps){
    return(
        <div  className={styles.item}>
            <img src={imgSmall} className={styles.itemImg} alt='avatar'/>
            <div>
                <Link to={{pathname: `${GAMES_URL}/${id}`}} className={styles.itemName}>{name}</Link>
                <div className={styles.itemTags}>
                    {
                        typeof(tags) === 'string' && tags.split(',').map((_, index, arr) => (
                            <Link to={{pathname: `${GAMES_URL}/${id}`}} key={_}>{_}{index !== (arr.length - 1)  && ', '}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}