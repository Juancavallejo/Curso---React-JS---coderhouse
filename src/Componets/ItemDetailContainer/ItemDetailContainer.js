import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import "./ItemDetailContainer.css"
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [ItemsDetail,setItemsDetail] = useState()
    const { productId } = useParams()

    useEffect(() => {
        
        getDoc (doc(dataBase, 'items', productId)).then (response => {
            const dataItem = response.data () 
            const itemDetalDataBase = {id: response.id, ...dataItem}
            setItemsDetail (itemDetalDataBase)
        })
        
        /* getItemsById(productId).then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            }) */
    }, [productId])

    return (
        <Container>
            <div className="mainBox">
                <ItemDetail {...ItemsDetail} />
            </div>
        </Container>
    );
}

export default ItemDetailContainer