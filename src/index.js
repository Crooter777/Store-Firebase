import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import BestsellersStore from "./store/BestsellersStore";
import NoveltiesStore from "./store/NoveltiesStore";
import CollectionsStore from "./store/CollectionsStore";
import StoreCollectionsPage from "./store/StoreCollectionsPage";


const Bestsellers = new BestsellersStore()
const Novelties = new NoveltiesStore()
const CollectionsMain = new CollectionsStore()
const CollectionsPage = new StoreCollectionsPage()

export const Context = createContext({
    Bestsellers,
    Novelties,
    CollectionsMain,
    CollectionsPage
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        Bestsellers,
        Novelties,
        CollectionsMain,
        CollectionsPage
    }}>
    <App/>
    </Context.Provider>
);
