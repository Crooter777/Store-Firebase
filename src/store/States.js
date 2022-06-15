import {makeAutoObservable, toJS} from "mobx";
import News from "../services/News";
import pagination from "../utils/pagination";

export default class States {

    modalSearch = false

    constructor() {
        makeAutoObservable(this)
    }

    setModalSearch(bool) {
        this.modalSearch = bool
    }
}