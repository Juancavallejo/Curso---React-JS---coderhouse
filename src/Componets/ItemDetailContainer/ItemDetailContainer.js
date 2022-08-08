import { useState, useEffect } from "react"
import { getItemsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState()
    const { productId } = useParams()

    useEffect(() => {
        getItemsById(productId).then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return (
        <Container>
            <div className="mainBox">
                <ItemDetail {...product} />
            </div>
        </Container>
    );
}

export default ItemDetailContainer