import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import NewGamePage from "./pages/NewGamePage";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>  
          <Route path="/NewGame" element={<NewGamePage></NewGamePage>}></Route>
        </Routes>  
      </BrowserRouter>  
    </>    
  );
}

export default App;
