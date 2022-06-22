import {makeAutoObservable, toJS} from "mobx";
import News from "../services/News";
import pagination from "../utils/pagination";

export default class StoreNews {

    news = []
    limit= 8
    offset = 0

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts() {
        try {
            const response = await News.getAll(this.limit)
            this.news = await response.data.results
        } catch (e) {
            console.log(e)
        }
    }

    async getNext() {
        this.offset = this.offset + 8
        const response = await News.getAll(this.limit, this.offset)
        this.news = [...this.news, ...response.data.results]
    }
}