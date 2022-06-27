import {makeAutoObservable, toJS} from "mobx";
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth"
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


export default class SoreAuth {

    user = {}
    isAuth = false
    modal = false

    app = null
    auth = null
    db = null

    constructor() {
        makeAutoObservable(this)
        this.init()
    }

    async login() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(this.auth, provider)
    }

    logout() {
        signOut(this.auth)
    }

    setModal(bool) {
        this.modal = bool
    }

    async init() {
        this.app = await initializeApp({
            apiKey: "AIzaSyBo7gBYKau7_PR-XAUEw2-MSUXuQQGvu78",
            authDomain: "zeon-market.firebaseapp.com",
            projectId: "zeon-market",
            storageBucket: "zeon-market.appspot.com",
            messagingSenderId: "535733030504",
            appId: "1:535733030504:web:9c018debe76a888df075dd",
            measurementId: "G-CKP9EBTVY8"
        });
        this.db = await getFirestore(this.app)
        this.auth = await getAuth(this.app)
        onAuthStateChanged(this.auth, (user) => {
            if (user) {
                this.isAuth = true
                this.user = {
                    name: user.displayName,
                    uid: user.uid
                }
                console.log('Имеется')
            } else {
                this.isAuth = false
                this.user = {}
                console.log('Нету')
            }
        })
    }
}