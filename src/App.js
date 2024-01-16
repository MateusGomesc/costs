import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import NewProjects from "./pages/NewProjects";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/company">
            <Company/>
          </Route>
          <Route path="/newprojects">
            <NewProjects/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
