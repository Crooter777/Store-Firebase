import {makeAutoObservable, toJS} from "mobx";

export default class StoreFavorites {

    products = []

    constructor() {
        makeAutoObservable(this)
    }

    init() {
        this.products = this.parseFromLocalStorage()
        console.log(this.products)
    }

    add(product) {
        console.log(this.products)
        this.products = [...this.products, product]
        console.log(this.products)
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
        console.log(this.products)
    }

}