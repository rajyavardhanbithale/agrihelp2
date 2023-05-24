import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Routes,Navigate } from 'react-router-dom';


import CompileWeather from './components/weather/CompileWeather'

import Navbar from './components/Navbar'
import Home from './components/Home'


//==================Shop=============
import AgriShop from './components/shop/AgriShop'

import Seed from './components/shop/Seed';
import Fertilizer from './components/shop/Fertilizer';
import Equipment from './components/shop/Equipment';


//================Resources==========
import Resources from './components/resources/Resources';

//==========Soil Analysis=============
import Cropreccom from './components/soilAnalysis/Cropreccom';
import Fertilizerreccom from './components/soilAnalysis/Fertilizerreccom';
//===============Pest Control========
import Pestcontrol from './components/pestControl/Pestcontrol';
import About from './components/About';
import Scheme from './components/scheme/Scheme';
import Feedback from './components/Feedback';


//===============error--------
import Notfound from './components/error/Notfound';

import { useTranslation } from 'react-i18next';


import i18n from './i18n';
import Footer from './components/Footer';
import Buysell from './components/buysell/Buysell';

function App() {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(language);
    console.log('Current language:', i18n.language);
    
    
    
  }, [language]);


  const handleSelectedValue = (value) => {
    setLanguage(value);
  
  };

  


  const host1 = "http://127.0.0.1:8000/"
  return (
    
    <>
      <Router>
        <Navbar onSelectedValue={handleSelectedValue} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/weather" element={<CompileWeather host={host1} />} />
          <Route path="/soil-analysis" element={<Cropreccom />} />
          <Route path="/fertilizer-analysis" element={<Fertilizerreccom />} />
          <Route path="/shop" element={<AgriShop />} />

         
          {/* <Route path="/chat-room" element={<RedirectionComponent value={language} />} /> */}
          {/* {language === 'hi' && <Navigate to="/chat-room?lang=hi" />} */}
          <Route path="/pest-control" element={<Pestcontrol />} />

          <Route path="/gov-scheme" element={<Scheme />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />


          {/* Shop */}
          <Route path="/seed" element={<Seed />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/buy-sell" element={<Buysell />} />

          <Route path="*" element={<Notfound/>}/>


        </Routes>
        <br /><br /><br />
        <Footer/>
      </Router>




    </>
  )
}

export default App
