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



function App() {
  const {t, i18n} = useTranslation('common');
  return (
    <Suspense fallback='loading'>
      
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/frankys-studio' element={<FrankyStudio/>}/>
          <Route path='/artists' element={<ArtistPage/>}/>
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
