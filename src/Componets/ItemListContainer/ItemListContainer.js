import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getdocumentsFireStore } from "../../services/firestore"
import './ItemListContainer.css'
import { Spinner } from "react-bootstrap"
import { useAsync } from "../../hooks/useAsync"


const ItemListContainer = ({ mensajeBienvenida }) => {
    const { categoryId } = useParams()

    const {datos,cargando,error} = useAsync ( () => getdocumentsFireStore(categoryId), [categoryId])

    if (cargando) {
        return (
            <div className="d-flex justify-content-center align-items-center loadingContainer">
                <h2>Cargando productos</h2>
                <Spinner className="mx-5" animation="border" variant="danger"/>
            </div>
            )
    }

    if (error) {
        <div className="d-flex justify-content-center align-items-center loadingContainer">
        <h2> Hay un error, por favor vuelve a intentar en unos minutos...</h2>
        </div>
    }

    return (
        <>
            <h1 className="text-center fs-5 mt-5">{`${mensajeBienvenida} ${categoryId || ""}`}</h1>
            <ItemList items={datos} />
        </>

    )
}

export default ItemListContainer