import {makeAutoObservable, toJS} from "mobx";
import News from "../services/News";
import pagination from "../utils/pagination";
import Products from "../services/Products";
import axios from "axios";

export default class States {

    modalSearch = false
    isSearchPage = null

    searchValue = ''
    searchedProducts = []

    cancelToken

    constructor() {
        makeAutoObservable(this)
    }

    setModalSearch(bool) {
        if (this.isSearchPage) {
            this.modalSearch = false
        } else {
            this.modalSearch = bool
        }
    }

    setSearchValue(e) {
        this.searchValue = e.target.value
    }

    clearSearchValue() {
        this.searchValue = ''
    }

    clearProducts() {
        this.searchedProducts = []
    }

    async searchProducts(e) {
        try {
            const value = e.target.value
            if (value) {

                if (typeof this.cancelToken !== typeof undefined) {
                    this.cancelToken.cancel()
                }

                this.cancelToken = axios.CancelToken.source()

                const result = await Products.search(value, this.cancelToken)
                if (result.data.length !== 0) {
                    this.searchedProducts = result.data
                } else {
                    this.clearProducts()
                }

            } else {
                this.cancelToken.cancel()
                this.clearProducts()
            }
        } catch (e) {
            console.log(e)
        }

    }
}