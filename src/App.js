

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Landingpage from './components/Landingpage/Landingpage';
import Mint from './components/Mint/Mint'
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="mint" element={<Mint />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ParallaxProvider>
    </>
  );
}

export default App;
