import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomeScreen from './components/HomeScreen/HomeScreen'
import Vision from './components/Vision/Vision'
import Collection from './components/Collection/Collection'
import Benifit from './components/Benifit/Benifit'
import Roadmap from './components/Roadmap/Roadmap'
import Team from './components/Team/Team'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <HomeScreen></HomeScreen>
            <Vision></Vision>
            <Collection></Collection>
            <Benifit></Benifit>
            <Roadmap></Roadmap>
            <Team></Team>
          </div>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
