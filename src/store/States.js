import {makeAutoObservable, toJS} from "mobx";
import News from "../services/News";
import pagination from "../utils/pagination";
import Products from "../services/Products";
import axios from "axios";

export default class States {

    modalMobileBack = false
    modalMobile = false

    modalSearch = false
    isSearchPage = null

    searchValue = ''

    products = []
    search_page_products = []
    search_page_value = ''

    collection_name = ''

    cancelToken

    limit= 8
    offset = 0

    count = null
    pagesArray = null
    pages_quantity = null
    current_page = 1


    constructor() {
        makeAutoObservable(this)
    }

    setModalMobile(bool) {
        this.modalMobile = bool
        }

    setModalMobileBack(bool) {
        this.modalMobileBack = bool
    }

    setModalSearch(bool) {
        this.modalSearch = bool
    }

    setSearchValue(e) {
        this.searchValue = e.target.value
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
            if (value) {

                if (typeof this.cancelToken !== typeof undefined) {
                    this.cancelToken.cancel()
                }

                this.cancelToken = axios.CancelToken.source()

                response = await Products.search(value, this.cancelToken, this.limit, this.offset)
                if (response.data.results.length === 0) {
                    this.clearProducts()
                }

            } else {
                this.cancelToken.cancel()
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
            if (this.isSearchPage) {
                this.search_page_products = response.data.results
                this.search_page_value = this.searchValue
            }
        } catch (e) {
            console.log(e)
        }

    }

    async getNext() {
        if (this.current_page + 1 <= this.pages_quantity) {
            this.offset = this.offset + 8
            const response = await this.searchProducts()
            this.products = response.data.results
            if (this.isSearchPage) {
                this.search_page_products = response.data.results
                this.search_page_value = this.searchValue
            }
            this.pagesArray = pagination(this.pages_quantity, this.current_page + 1, this.current_page - 1)
            this.current_page += 1
        }
    }
    async getPrevious() {
        if (this.current_page - 1 >= 1) {
            this.offset = this.offset - 8
            const response = await this.searchProducts()
            this.products = response.data.results
            if (this.isSearchPage) {
                this.search_page_products = response.data.results
                this.search_page_value = this.searchValue
            }
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
        if (this.isSearchPage) {
            this.search_page_products = response.data.results
            this.search_page_value = this.searchValue
        }
    }
}