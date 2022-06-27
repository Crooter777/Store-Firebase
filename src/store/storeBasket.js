import {makeAutoObservable, toJS} from "mobx";
import {addDoc, collection, deleteDoc, doc, getDocs, query, where} from "firebase/firestore";

export default class StoreBasket {

    products = []

    constructor() {
        makeAutoObservable(this)
    }

    async init(db, uid) {
        try {
            let products = []
            const q = query(collection(db, "basket"), where('uid', '==', uid))
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
        const q = query(collection(db, "basket"), where('uid', '==', uid))
        await addDoc(collection(db, "basket"), {...product});
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
        let prod = this.products.find((item) => item.product_color.id === product.product_color.id)
        deleteDoc(doc(db, "basket", prod.document_id))
        this.products = this.products.filter((item) => item.product_color.id !== product.product_color.id)
        // this.setToLocalStorage()
    }

    parseFromLocalStorage() {
        let basket = JSON.parse(localStorage.getItem('basket'))
        if (basket) {return basket} else {return []}
    }

    setToLocalStorage() {
        localStorage.setItem('basket', JSON.stringify(this.products))
    }

    increment(product) {
        const searhcedProduct = this.products.find((item) => item.product_color.id === product.product_color.id)
        searhcedProduct.countForBuy += 1
        this.setToLocalStorage()
    }

    decrement(product) {
        const searhcedProduct = this.products.find((item) => item.product_color.id === product.product_color.id)
        if (searhcedProduct.countForBuy - 1 === 0) {
            return
        }
        searhcedProduct.countForBuy -= 1
        this.setToLocalStorage()
    }


    get totalLines() {
        return this.products.length
    }

    get totalProducts() {
        let count = 0
        for (let i of this.products) {
            count += i.countForBuy * 5
        }
        return count
    }

    get totalSum() {
        let count = 0
        for (let i of this.products) {
            count += i.price * (i.countForBuy * 5)
        }
        return count
    }

    get totalDiscount() {
        let count = 0
        for (let i of this.products) {
            count += (i.price * (i.discount / 100)) * (i.countForBuy * 5)
        }
        return count
    }

    get totalAmount() {
        let totalPrice = 0
        for (let i of this.products) {
            totalPrice += i.price * (i.countForBuy * 5)
        }
        let totalDiscount = 0
        for (let i of this.products) {
            totalDiscount += (i.price * (i.discount / 100)) * (i.countForBuy * 5)
        }
        return totalPrice - totalDiscount
    }
}