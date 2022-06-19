import {makeAutoObservable, toJS} from "mobx";

export default class StoreFavorites {

    products = []

    constructor() {
        makeAutoObservable(this)
    }

    init() {
        this.products = this.parseFromLocalStorage()
    }

    add(product) {
        this.products = [...this.products, product]
        this.setToLocalStorage()
    }

    delete(product) {
        this.products = this.products.filter((item) => item.id !== product.id)
        this.setToLocalStorage()
    }



    parseFromLocalStorage() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (favorites) {return favorites} else {return []}
    }

    setToLocalStorage() {
        localStorage.setItem('favorites', JSON.stringify(this.products))
    }

}