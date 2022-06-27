import {makeAutoObservable} from "mobx";
import pagination from "../utils/pagination";
import Products from "../services/Products";
import axios from "axios";

export default class StoreSearch {

    products = []
    searchValue = ''

    limit= 8
    offset = 0

    count = null
    pages_quantity = null
    current_page = 1
    pagesArray = null

    modalSearch = false
    modalSearchMobile = false
    modalSearchMobileBack = false

    searchCancelToken

    collection_name = ''

    constructor() {
        makeAutoObservable(this)
    }

    setModalMobile(bool) {
        this.modalSearchMobile = bool
    }

    setModalMobileBack(bool) {
        this.modalSearchMobileBack = bool
    }

    setModalSearch(bool) {
        this.modalSearch = bool
    }

    setSearchValue(e) {
        this.searchValue = e.target.value
    }

    initSearchValue(value) {
        this.searchValue = value
    }

    clearSearchValue() {
        this.searchValue = ''
    }

    clearProducts() {
        this.products = []
    }



    async searchProducts() {
        let response
        try {
            const value = this.searchValue
            if (value.replace(/\s/g, '')) {

                if (typeof this.searchCancelToken !== typeof undefined) {
                    this.searchCancelToken.cancel()
                }

                this.searchCancelToken = axios.CancelToken.source()

                response = await Products.search(value, this.searchCancelToken, this.limit, this.offset)
                if (response.data.results.length === 0) {
                    this.clearProducts()
                }

            } else {
                this.searchCancelToken.cancel()
                this.clearProducts()
            }
        } catch (e) {
            console.log(e)
        }
        return response
    }


    async getProducts() {
        try {
            const response = await this.searchProducts()
            this.count = await response.data.count
            this.pages_quantity = Math.ceil(response.data.count / this.limit)
            this.pagesArray = pagination(this.pages_quantity, this.current_page)
            this.products = await response.data.results
        } catch (e) {
            console.log(e)
        }
    }

    async getNext() {
        if (this.current_page + 1 <= this.pages_quantity) {
            this.offset = this.offset + 8
            const response = await this.searchProducts()
            this.products = response.data.results
            this.pagesArray = pagination(this.pages_quantity, this.current_page + 1, this.current_page - 1)
            this.current_page += 1
        }
    }
    async getPrevious() {
        if (this.current_page - 1 >= 1) {
            this.offset = this.offset - 8
            const response = await this.searchProducts()
            this.products = response.data.results
            this.pagesArray = pagination(this.pages_quantity, this.current_page -1, this.current_page + 1)
            this.current_page -= 1
        }
    }

    async setPage(page) {
        let oldPage = this.current_page
        this.offset = this.limit * (page - 1)
        this.pagesArray = pagination(this.pages_quantity, page, oldPage)
        this.getPage()
        this.current_page = page
    }

    async getPage() {
        const response = await this.searchProducts()
        this.products = response.data.results
    }

    initSearch(value) {
        this.initSearchValue(value)
        this.getProducts()
    }
}