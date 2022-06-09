import {makeAutoObservable, toJS} from "mobx";
import Collections from "../services/Collections";

export default class CollectionsStore {

    collections = []
    limit= 4
    offset = 0

    constructor() {
        makeAutoObservable(this)
    }

    async getProducts() {
        try {
            const response = await Collections.getAll(this.limit)
            this.collections = await response.data.results
        } catch (e) {
            console.log(e)
        }

    }

    async getNext() {
        this.offset = this.offset + 4
        const response = await Collections.getAll(this.limit, this.offset)
        this.collections = this.collections.concat(response.data.results)
        console.log(this.offset)
        console.log(toJS(this.collections))
    }
}