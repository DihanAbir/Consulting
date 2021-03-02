import {BrowserRouter as  Router } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <Router>
      {/* <GlobalStyle></GlobalStyle> */}
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
