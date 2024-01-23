import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import Projects from "./components/pages/Projects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer" 
import Container from './components/layout/Container'
import NewProjects from "./components/pages/NewProjects";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>
            <Route exact path="/Company" element={<Company/>}></Route>
            <Route exact path="/Projects" element={<Projects/>}></Route>
            <Route exact path="/NewProjects" element={<NewProjects/>}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
