import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer" 
import Container from './components/layout/Container'
import NewProjects from "./components/pages/NewProjects";
import Project from "./components/pages/Project";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Projects" element={<Projects/>}></Route>
            <Route exact path="/NewProjects" element={<NewProjects/>}></Route>
            <Route exact path="/Project/:id" element={<Project/>}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
