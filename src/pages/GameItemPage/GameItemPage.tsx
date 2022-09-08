import { useRouteMatch } from "react-router"
import { games } from "../../utils/mockData"
import {useMemo, useState} from 'react';
import Card from "./components/Card/Card";
import styles from './GameItemPage.module.scss'
import Table from "./components/Table/Table";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";


export default function GameItemPage(){
    const match = useRouteMatch<{id: string}>()
    const item = useMemo(() => games.filter(item => item.id === match.params.id)[0], [match.params.id])
    const [activeCategory, setActiveCategory] = useState(item.tags.split(',')[0])
    useBreadcrumbs({name: item.name, link: `/game/${item.id}`})

    return(
        <div>
            <Breadcrumbs />
            <Card category={activeCategory} setCategory={setActiveCategory} {...item}/>
            <Table game={item.name} category={activeCategory}/>
        </div>
    )
}