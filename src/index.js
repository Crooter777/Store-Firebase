import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import BestsellersStore from "./store/BestsellersStore";
import NoveltiesStore from "./store/NoveltiesStore";
import CollectionsStore from "./store/CollectionsStore";
import StoreCollectionsPage from "./store/StoreCollectionsPage";
import StoreCollectionsDetail from "./store/storeCollectionDetail";
import StoreProductDetail from "./store/storeProductDetail";
import StoreNews from "./store/storeNews";
import StoreQuestions from "./store/storeQuestions"
import StoreStates from "./store/States"


const Bestsellers = new BestsellersStore()
const Novelties = new NoveltiesStore()
const CollectionsMain = new CollectionsStore()
const CollectionsPage = new StoreCollectionsPage()
const CollectionsDetail = new StoreCollectionsDetail()
const ProductDetail = new StoreProductDetail()
const News = new StoreNews()
const Questions = new StoreQuestions()
const States = new StoreStates()

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
        States
    }}>
    <App/>
    </Context.Provider>
);
