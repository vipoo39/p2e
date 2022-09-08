import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBreadcrumbsItem, BreadcrumbsItemType, deleteBreadcrumbItem } from './../redux/reducers/breadcrumbsReducer';

export const useBreadcrumbs = (items: BreadcrumbsItemType | BreadcrumbsItemType[]) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addBreadcrumbsItem(items))
        return () => {
            if (Array.isArray(items)) {
                let itemNames = items.map(i => i.name)
                dispatch(deleteBreadcrumbItem(itemNames))
            } else {
                dispatch(deleteBreadcrumbItem(items.name))
            }
        }
    }, [])
}