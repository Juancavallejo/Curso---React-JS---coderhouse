import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { dataBase } from "."
import { createAdaptedItemFromFirestore } from "../../adapters/productAdapter"

/* Function para traer documentos, para el ItemListContainer */
export const getdocumentsFireStore =(categoryId) => {
    const collectionRef = !categoryId 
    ? collection (dataBase, 'items')
    : query (collection (dataBase, 'items'), where('category','==', categoryId))

    return getDocs (collectionRef).then(response => {
        const itemsDataBase = response.docs.map (doc => {
            return createAdaptedItemFromFirestore (doc)
        })
        return itemsDataBase
    })
}

/* Function para traer documentos, para el ItemDetailContainer */
export const getdocFireStore = (productId) => {
    return getDoc (doc(dataBase, 'items', productId)).then (doc => {
        return createAdaptedItemFromFirestore (doc)
    })
}

/* Funtion para  */