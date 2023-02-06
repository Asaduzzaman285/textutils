import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const fmode=()=>{
    if (mode==="light") {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode Enabled", "success");
      document.title="Textutils-Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Enabled", "success");
      document.title="Textutils-light Mode";
    }
  }

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");
  //showing alert 
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        typ:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" about = "About Text" mode={mode} fmode={fmode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
              
                <Routes>
                <Route exact path="/about" element={<About />} />
                
                < Route exact path="/"
                  element= {<TextForm showAlert={showAlert} fmode={fmode} heading="Enter Your Text"/>} /> 
                </Routes>
                </div>
                </Router>
   
    </>
    );
}

export default App;
