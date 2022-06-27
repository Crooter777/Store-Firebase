import {makeAutoObservable, toJS} from "mobx";
import {addDoc, collection, deleteDoc, doc, getDocs, query, where} from "firebase/firestore";

export default class StoreHistory {

    products = []

    constructor() {
        makeAutoObservable(this)
    }

    async init(db, uid) {
        try {
            let products = []
            const q = query(collection(db, "history"), where('uid', '==', uid))
            const result = await getDocs(q)

            result.forEach((doc) => {
                let product = doc.data()
                product.document_id = doc.id
                products.push(product)
            });
            this.products = products
            console.log(toJS(this.products))
        } catch (e) {
            console.log(e)
        }
    }

    async add(db, values, uid) {
        values.uid = uid
        const q = query(collection(db, "history"), where('uid', '==', uid))
        await addDoc(collection(db, "history"), {...values});
        const result = await getDocs(q)
        let products = []
        result.forEach((doc) => {
            let product = doc.data()
            product.document_id = doc.id
            products.push(product)
        });
        this.products = products
        console.log(products)
    }
}