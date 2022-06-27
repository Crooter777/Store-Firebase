import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offer from "./pages/Offer";
import AboutUs from "./pages/AboutUs";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Product from "./pages/ProductDetail";
import News from "./pages/News";
import Help from "./pages/Help";
import SearchResult from "./pages/Search";
import Favorites from "./pages/Favorites";
import Basket from "./pages/Basket";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/offer' element={<Offer/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/collections' element={<Collections/>}/>
              <Route path='/collections/:id' element={<CollectionDetail/>}/>
              <Route path='/products/:id' element={<Product/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/help' element={<Help/>}/>
              <Route path='/search' element={<SearchResult/>}/>
              <Route path='/favorites' element={<Favorites/>}/>
              <Route path='/basket' element={<Basket/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default observer(App);
