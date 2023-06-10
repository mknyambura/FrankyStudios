import logo from './logo.svg';
import './App.css';

import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';


import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import { Suspense } from 'react';
import FrankyStudio from './components/FrankyStudio/FrankyStudio';
import ArtistPage from './components/ArtistPage/ArtistPage';
import ArtistBooking from './components/Booking/ArtistBooking';
import MusiciansBooking from './components/Booking/MusiciansBooking';
import InfluencerBooking from './components/Booking/InfluencerBooking';
import AboutUs from './components/AboutUs/AboutUs';



function App() {
  const {t, i18n} = useTranslation('common');
  return (
    <Suspense fallback='loading'>
      
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/frankys-studio' element={<FrankyStudio/>}/>
          <Route path='/artists' element={<ArtistPage/>}/>
          <Route path='/booking-agency' element={<ArtistBooking/>}/>
          <Route path='/artist-booking-info' element={<ArtistBooking/>}/>
          <Route path='/musician-booking-info' element={<MusiciansBooking/>}/>
          <Route path='/influencer-booking-info' element={<InfluencerBooking/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
