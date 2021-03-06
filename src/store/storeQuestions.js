import {makeAutoObservable} from "mobx";
import Questions from "../services/Questions";

export default class StoreQuestions {

    questions = []

    constructor() {
        makeAutoObservable(this)
    }

    async getQuestions() {
        try {
            const response = await Questions.getAll()
            this.questions = await response.data
        } catch (e) {
            console.log(e)
        }

    }
}