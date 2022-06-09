import {makeAutoObservable, toJS} from "mobx";
import Products from "../services/Products";

export default class BestsellersStore {

    products = []
    limit= 8
    offset = 0
    step = 0

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts() {
        try {
            const response = await Products.getAll()
            this.products = await response.data.results
        } catch (e) {
            console.log(e)
        }
        
    }

    async getNext() {
        this.limit = 4
        if (this.step === 0) {
            this.step = this.step + 1
            this.offset = 8
        } else {
            this.offset = this.offset + 4
        }
        const response = await Products.getAll(this.limit, this.offset)
        this.products = this.products.concat(response.data.results)
        console.log(this.offset)
        console.log(toJS(this.products))
    }
}