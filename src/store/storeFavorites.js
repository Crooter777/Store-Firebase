import {makeAutoObservable, toJS} from "mobx";
import { doc, addDoc  , collection, getDocs, getDoc, deleteDoc, where, query } from "firebase/firestore"
export default class StoreFavorites {

    products = []

    constructor() {
        makeAutoObservable(this)
    }

    async init(db, uid) {
        try {
            let products = []
            const q = query(collection(db, "favorites"), where('uid', '==', uid))
            const result = await getDocs(q)

            result.forEach((doc) => {
                let product = doc.data()
                product.document_id = doc.id
                products.push(product)
            });
            this.products = products
        } catch (e) {
            console.log(e)
        }
        // this.products = this.parseFromLocalStorage()
    }

    async add(db, product, uid) {
        product.uid = uid
        const q = query(collection(db, "favorites"), where('uid', '==', uid))
        await addDoc(collection(db, "favorites"), {...product});
        const result = await getDocs(q)
        let products = []
        result.forEach((doc) => {
            let product = doc.data()
            product.document_id = doc.id
            products.push(product)
        });
        this.products = products
        // this.products = [...this.products, product]
        // this.setToLocalStorage()
    }

    async delete(db, product) {
        let prod = this.products.find((prod) => prod.id === product.id)
        deleteDoc(doc(db, "favorites", prod.document_id))
        this.products = this.products.filter((p) => p.id !== product.id)
        // this.setToLocalStorage()
    }

    parseFromLocalStorage() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (favorites) {return favorites} else {return []}
    }

    setToLocalStorage() {
        localStorage.setItem('favorites', JSON.stringify(this.products))
    }


}