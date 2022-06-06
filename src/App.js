import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offer from "./pages/Offer";
import AboutUs from "./pages/AboutUs";
import Collections from "./pages/Collections";
import CollectionPage from "./pages/CollectionPage";
import Product from "./pages/Product";
import News from "./pages/News";
import Help from "./pages/Help";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/offer' element={<Offer/>}/>
              <Route path='/about' element={<AboutUs/>}/>
              <Route path='/collections' element={<Collections/>}/>
              <Route path='/collections/1' element={<CollectionPage/>}/>
              <Route path='/products/1' element={<Product/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/help' element={<Help/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
