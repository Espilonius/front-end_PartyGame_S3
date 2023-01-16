import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
//import { Link, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewGamePage from "./pages/NewGamePage";
import QuestionsPage from './pages/QuestionsPage';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>  
          <Route path="/NewGame" element={<NewGamePage></NewGamePage>}></Route>
          <Route path="/Questions" element={<QuestionsPage></QuestionsPage>}></Route>
        </Routes>  
      </BrowserRouter>  
    </>    
  );
}

export default App;
