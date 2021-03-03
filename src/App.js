import { Route, BrowserRouter as  Router, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./components/Navbar/Banner/Banner";
import Landing from "./components/Pages/Landing";
import Services from "./components/Services/Services";
import ServicesSingle from "./components/Services/ServicesSingle";

function App() {
  return (
    <Router>
 
      <switch>
      <Route exact path="/" component = {Landing}  />
      <Route path="/services" component = {Services}  />
      <Route  path="/singleServices/:id" component = {ServicesSingle}  />
      </switch>
    </Router>
  );
}

export default App;
