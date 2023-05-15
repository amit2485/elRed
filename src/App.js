import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{display:"flex",margin:0}}>
        <Menubar />
        <AboutUs/>
      </div>
 
    </BrowserRouter>
    
  );
}

export default App;
