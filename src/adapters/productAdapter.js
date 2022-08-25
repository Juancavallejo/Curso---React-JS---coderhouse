
export const createAdaptedItemFromFirestore = (doc) => {
    const dataProduct = doc.data ()
    
    const productAdapted = {
        id:doc.id,
        name: dataProduct.name,
        img: dataProduct.img,
        price: dataProduct.price,
        category: dataProduct.category,
        description: dataProduct.description,
        stock:dataProduct.stock, 
        container: dataProduct.container,
    }
    
    return productAdapted
}