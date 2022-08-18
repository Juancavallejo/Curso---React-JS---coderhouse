import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from "firebase/firestore"
import { dataBase } from "../../services/firebase"

const ItemListContainer = ({mensajeBienvenida}) => {
    const [listItems, setListItems] = useState ([])
    const {categoryId} = useParams ()
    
    useEffect (() => {
        
        const collectionRef = !categoryId 
        ? collection (dataBase, 'items')
        : query (collection (dataBase, 'items'), where('category','==', categoryId))

        getDocs (collectionRef).then(response => {
            const itemsDataBase = response.docs.map (item => {
                const dataItems = item.data ()
                return { id: item.id, ...dataItems}
            })
            setListItems (itemsDataBase)
        })

    }, [categoryId])

    return (
        <>
            <h1 className="text-center fs-5 mt-5">{`${mensajeBienvenida} ${categoryId ||""}`}</h1>
            <ItemList items ={listItems} />
        </>

    )
}

export default ItemListContainer