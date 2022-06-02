import './App.css';
import Main from "./pages/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Offer from "./pages/Offer";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/offer' element={<Offer/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
