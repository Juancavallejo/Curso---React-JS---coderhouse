import { useState, useEffect } from "react"
import { getItemsById, getItemsByCategory } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ()
    const {productId} = useParams ()

    useEffect (() => {
        getItemsById (productId)
        .then (product => {
            setProduct (product)
        })
        .catch (error => {
            console.log (error)
        })
    }, [])

    return (
        <div>
        <h1> Detalle</h1>
        <ItemDetail {...product}/>
        </div>
    )
}



export default ItemDetailContainer