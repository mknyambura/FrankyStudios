import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
