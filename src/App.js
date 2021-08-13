import './App.css';
import Categories from "./components/Categories/Categories";
import Cta from "./components/Cta/Cta";
import Instagram from "./components/Instagram/Instagram";
import Needs from "./components/Needs/Needs";
import Offer from "./components/Offer/Offer";
import Slider from "./components/Slider/Slider";
import Banner from "./components/Banner/Banner";
import Networks from "./components/Networks/Networks";
import './assets/fonts/FuturaNewLight-Obl.woff2'
import Crumbs from "./components/Crumbs/Crumbs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <div className="inner">
            <Header />
            <Crumbs />
            <Banner />
            <Slider />
            <Categories />
            <Instagram />
            <Offer />
            <Cta />
            <Needs />
            <Networks />
            <Footer />
        </div>
    </div>
  );
}


export default App;
