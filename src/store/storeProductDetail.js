import {makeAutoObservable, toJS} from "mobx";
import Products from "../services/Products";
import pagination from "../utils/pagination";

export default class StoreProductDetail {

    product = {}

    constructor() {
        makeAutoObservable(this)
    }

    async getProduct(id) {
        try {
            const response = await Products.getById(id)
            this.product = response.data
        } catch (e) {
            console.log(e)
        }
    }
}