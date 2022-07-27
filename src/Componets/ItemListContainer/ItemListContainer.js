import { useState, useEffect } from "react"
import { getItemsBack } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({MensajeBienvenida}) => {
    const [items, setItems] = useState ([])
    
    useEffect (() => {
        getItemsBack().then (items =>{
            setItems (items)
        })
    }, [])

    return (
        <>
            <h1 className="text-center fs-5 mt-5">{MensajeBienvenida}</h1>
            <ItemList items ={items} />

        </>

    )
}

export default ItemListContainer