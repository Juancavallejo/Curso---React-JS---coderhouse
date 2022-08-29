import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { dataBase } from "./index"
import { itemsDeFireStore } from "../../adapters/productAdapter"

/* Function para traer documentos, para el ItemListContainer */
export const obtenerDocumentosFirestore =(categoryId) => {
    const collectionRef = !categoryId 
    ? collection (dataBase, 'items')
    : query (collection (dataBase, 'items'), where('category','==', categoryId))

    return getDocs (collectionRef).then(response => {
        const itemsDataBase = response.docs.map (doc => {
            return itemsDeFireStore (doc)
        })
        return itemsDataBase
    })
}

/* Function para traer documentos, para el ItemDetailContainer */
export const obtenerdocFireStore = (productId) => {
    return getDoc (doc(dataBase, 'items', productId)).then (doc => {
        return itemsDeFireStore (doc)
    })
}
