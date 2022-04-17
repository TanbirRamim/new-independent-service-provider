import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Header from "./Header/Header";

import Home from "./Home/Home";
import Login from "./Login/Login";
import Services from "./Services/Services";
import Story from "./Story/Story";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/Story" element={<Story></Story>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
