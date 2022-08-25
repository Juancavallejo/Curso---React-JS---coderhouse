import Item from "../Item/Item"

const ItemList = ({items}) => {
    return (
        <ul>
            {items?.map(prod => <Item key = {prod.id} product={prod} />)}
        </ul>
    )
}

export default ItemList