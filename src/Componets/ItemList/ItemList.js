import Item from "../Item/Item"

const ItemList = ({itemsList}) => {
    return (
        <div>
            {itemsList?.map(itemList => <Item key = {itemList.id} {...itemList} />)}
        </div>
    )
}

export default ItemList