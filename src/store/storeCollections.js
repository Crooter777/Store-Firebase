import {makeAutoObservable} from "mobx";
import Collections from "../services/Collections";
import pagination from "../utils/pagination";

export default class StoreCollections {

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
        } catch (e) {
            console.log(e)
        }

    }

    async getNext() {
        if (this.current_page + 1 <= this.pages_quantity) {
            this.current_page += 1
        } else {
            return
        }
        this.offset = this.offset + 4
        const response = await Collections.getAll(this.limit, this.offset)
        this.collections = response.data.results
        this.pagesArray = pagination(this.pages_quantity, this.current_page, this.current_page - 1)
    }
    async getPrevious() {
        if (this.current_page - 1 >= 1) {
            this.current_page -= 1
        } else {
            return
        }
        this.offset = this.offset - 4
        const response = await Collections.getAll(this.limit, this.offset)
        this.collections = response.data.results
        this.pagesArray = pagination(this.pages_quantity, this.current_page, this.current_page + 1)
    }

    async setPage(page) {
        let oldPage = this.current_page
        this.current_page = page
        this.offset = this.limit * (page - 1)
        this.pagesArray = pagination(this.pages_quantity, this.current_page, oldPage)
        this.getPage()
    }

    async getPage() {
        const response = await Collections.getAll(this.limit, this.offset)
        this.pagesArray = pagination(this.pages_quantity, this.current_page)
        this.collections = response.data.results
    }
}