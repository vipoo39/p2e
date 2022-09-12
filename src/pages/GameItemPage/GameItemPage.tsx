import { accountsMock, games, itemsMock, kinahMock, servicesMock } from "../../utils/mockData"
import { useMemo } from 'react';
import Card from "./components/Card/Card";
import styles from './GameItemPage.module.scss'
import Table from "./components/Table/Table";
import { useBreadcrumbs } from "../../hooks/useBreadcrumbs";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExtraText } from "./components/ExtraText/ExtraText";
import { Route, Switch, useLocation } from 'react-router-dom';
import { GAMES_URL } from "../../utils/links";


export default function GameItemPage() {
    const { pathname } = useLocation()
    const item = useMemo(() => games.filter(item => pathname.includes(item.name.replace(/%20/, ' ')))[0], [pathname])
    // useBreadcrumbs({name: item.name, link: `/game/${item.id}`})
    let tags = item.tags

    return (
        <div>
            <Breadcrumbs />
            <Card {...item} />
            <Switch>
                {/* <Route exact>
                    <Table items={kinahMock} game={item.name} />
                </Route> */}
                {tags.en.split(',').map((t, index) => {
                    return <Route key={index} path={`${GAMES_URL}/${item.name}/${t.replace(/\s+/g, '').toLowerCase()}`}>
                        <Table items={pathname.includes('kinah') ? kinahMock : pathname.includes('accounts') ? accountsMock : pathname.includes('items') ? itemsMock : servicesMock} game={item.name} />
                    </Route>
                })}
            </Switch>
            <ExtraText />
        </div>
    )
}