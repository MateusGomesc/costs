import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProjects from "./pages/NewProjects";
import Header from "./layout/Header";
import Container from './layout/Container'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Container>
          <Routes>
            <Route exact path="/" element={Home}></Route>
            <Route path="/contact" element={Contact}></Route>
            <Route path="/company" element={Company}></Route>
            <Route path="/newprojects" element={NewProjects}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
