import './App.css';
import Header from "./components/Headers/header/Header";
import Footer from "./components/footer/Footer";
import MainCollection from "./components/Collections/mainCollection/mainCollection";
import MainCollectionV2 from "./components/Collections/mainCollectionV2/mainCollectionV2";
import img from './assets/img/Frame 2871.png'
import Benefits from "./components/benefits/Benefits";
import SliderD from "./components/sliders/sliderDesctop/SliderD";

function App() {
  return (
    <div className="App">
      <div className='pageWrapper'>
        <Header/>
        <SliderD/>
        <MainCollection/>
          <MainCollectionV2/>
        <Benefits/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
