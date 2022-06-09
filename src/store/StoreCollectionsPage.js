import {makeAutoObservable, toJS} from "mobx";
import Collections from "../services/Collections";
import pagination from "../utils/pagination";

export default class StoreCollectionsPage {

    collections = []
    limit= 4
    offset = 0

    count = null
    pagesArray = null
    pages_quantity = null
    current_page = 1

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts() {
        try {
            const response = await Collections.getAll(this.limit)
            this.count = await response.data.count
            this.pages_quantity = Math.ceil(response.data.count / this.limit)
            this.pagesArray = pagination(this.pages_quantity, this.current_page)
            this.collections = await response.data.results
            console.log(this.pagesArray)
        } catch (e) {
            console.log(e)
        }

    }

    async getNext() {
        this.offset = this.offset + 4
        const response = await Collections.getAll(this.limit, this.offset)
        this.pagesArray = pagination(this.pages_quantity, this.current_page)
        this.collections = response.data.results
        this.current_page += 1
        console.log(this.offset)
        console.log(toJS(this.collections))

    }
    async getPrevious() {
        this.offset = this.offset - 4
        const response = await Collections.getAll(this.limit, this.offset)
        this.collections = response.data.results
        this.current_page -= 1
        this.pagesArray = pagination(this.pages_quantity, this.current_page)
        console.log(this.offset)
        console.log(toJS(this.collections))
    }

    async setCurrentPage(page) {
        this.current_page = page
        this.offset = this.limit * (page - 1)
        this.pagesArray = pagination(this.pages_quantity, this.current_page)
        this.getPage()
    }

    async getPage() {
        const response = await Collections.getAll(this.limit, this.offset)
        this.collections = response.data.results
    }
}