import { useState, useEffect } from "react"
import { getItemsBack, getItemsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'


const ItemListContainer = ({mensajeBienvenida}) => {
    const [items, setItems] = useState ([])
    const {categoryId} = useParams ()
    
    useEffect (() => {
        const getItems = categoryId ? getItemsByCategory : getItemsBack
        
        getItems(categoryId).then(items => {
            setItems (items)
        })
    }, [categoryId])

    return (
        <>
            <h1 className="text-center fs-5 mt-5">{mensajeBienvenida}</h1>
            <ItemList items ={items} />

        </>

    )
}

export default ItemListContainer