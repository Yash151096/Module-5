
import './App.css';
import Header from './component/header/header'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './component/slider/slider'; // Correct path and component name
// import Slider1 from './component/slider/slider1';
// import Imagegrid from './component/Imagegrid/Imagegrid';
import '../src/component/Imagegrid/imagegrid.css'
import CustomCard from './component/card/CustomCard';
// import CustomCardnew from './component/card/CustomCardnew';
// import SliderCard from './component/SliderCard/SliderCard';
import '../src/component/slider/sliderimage.css'
import '../src/component/SliderCard/SliderCard.css'
import './component/slider/sliderimage.css'
import Footer from './component/footer/Footer';
import '../src/component/footer/Footer.css'
// import { CrudOpration } from './crudApi/CrudOpration';

function App() {
    return (
        <div className="App"> 
            <Header />
            <Slider />
            {/* <Slider1 /> */}
            {/* <Imagegrid /> */}
            <CustomCard />
            {/* <CustomCardnew /> */}
            {/* <SliderCard /> */}
            <Footer /> 

            {/* <CrudOpration/> */}
        </div>
    );
}

export default App;