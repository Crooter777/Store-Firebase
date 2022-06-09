import {makeAutoObservable, toJS} from "mobx";
import Products from "../services/Products";

export default class NoveltiesStore {

    products = []
    limit= 4
    offset = 0

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts() {
        try {
            const response = await Products.getAll(this.limit)
            this.products = await response.data.results
        } catch (e) {
            console.log(e)
        }

    }

    async getNext() {
        this.offset = this.offset + 4
        const response = await Products.getAll(this.limit, this.offset)
        this.products = this.products.concat(response.data.results)
        console.log(this.offset)
        console.log(toJS(this.products))
    }
}