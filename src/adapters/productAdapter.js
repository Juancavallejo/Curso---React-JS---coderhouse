
export const itemsDeFireStore = (doc) => {
    const dataProducto = doc.data ()
    
    const productoAdaptado = {
        id:doc.id,
        name: dataProducto.name,
        img: dataProducto.img,
        price: dataProducto.price,
        category: dataProducto.category,
        description: dataProducto.description,
        stock:dataProducto.stock, 
        container: dataProducto.container,
        delivery:dataProducto.delivery
    }
    
    return productoAdaptado
}