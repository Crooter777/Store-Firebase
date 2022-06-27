import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { initializeApp } from 'firebase/app';

import StoreBestsellers from "./store/storeBestsellers";
import StoreNovelties from "./store/storeNovelties";
import StoreMainCollections from "./store/storeMainCollections";
import StoreCollections from "./store/storeCollections";
import StoreCollectionsDetail from "./store/storeCollectionDetail";
import StoreProductDetail from "./store/storeProductDetail";
import StoreNews from "./store/storeNews";
import StoreQuestions from "./store/storeQuestions"
import StoreStates from "./store/storeSearch"
import StoreFavorites from "./store/storeFavorites"
import StoreBasket from "./store/storeBasket"
import StoreAuth from "./store/storeAuth"
import StoreHistory from "./store/storeHistory"

const Bestsellers = new StoreBestsellers()
const Novelties = new StoreNovelties()
const CollectionsMain = new StoreMainCollections()
const CollectionsPage = new StoreCollections()
const CollectionsDetail = new StoreCollectionsDetail()
const ProductDetail = new StoreProductDetail()
const News = new StoreNews()
const Questions = new StoreQuestions()
const States = new StoreStates()
const Search = new StoreStates()
const Favorites = new StoreFavorites()
const Basket = new StoreBasket()
const Auth = new StoreAuth()
const History = new StoreHistory()

export const Context = createContext({
    Bestsellers,
    Novelties,
    CollectionsMain,
    CollectionsPage,
    CollectionsDetail,
    ProductDetail,
    News,
    Questions,
    States,
    Search,
    Favorites,
    Basket,
    Auth,
    History,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        Bestsellers,
        Novelties,
        CollectionsMain,
        CollectionsPage,
        CollectionsDetail,
        ProductDetail,
        News,
        Questions,
        States,
        Search,
        Favorites,
        Basket,
        Auth,
        History,
    }}>
    <App/>
    </Context.Provider>
);
