import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import "./ItemDetailContainer.css"
import { obtenerdocFireStore } from "../../services/firebase/firestore";
import { Spinner } from "react-bootstrap";
import { useCustomHooks } from "../../customHooks/useCustomHooks";


const ItemDetailContainer = ({mensajeBienvenida}) => {
    const {productId} = useParams()

    const {datos,cargando,error} = useCustomHooks ( () => obtenerdocFireStore(productId), [productId] )

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
        <Container>
            <h2 className="text-center fs-5 mt-2"> {`${mensajeBienvenida}`} </h2>
            <div className="mainBox">
                <ItemDetail {...datos} />
            </div>
        </Container>
    );
}

export default ItemDetailContainer