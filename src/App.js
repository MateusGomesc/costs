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
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>
            <Route exact path="/Company" element={<Company/>}></Route>
            <Route exact path="/NewProjects" element={<NewProjects/>}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
