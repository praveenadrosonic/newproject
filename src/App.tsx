import React from "react";
import TextForm from "./Components/TextForm";
import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import Alert from "./Components/Alert";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';


interface AlertData {
  status: string;
  message: string;
}

function App() {
  const textUtils = 'TextUtils';
  const aboutText = 'About Us';
  const heading = 'Enter Text Below - Word Counter, character counter , Remove extra spaces ,Encode/Decode';
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState<AlertData | null>(null);
  const showAlert = (status :string ,message :string) => {
    setAlert({
      status:status,
      message:message
    });
     setTimeout(()=>{setAlert(null)},1000);
  }

  const toggleMode = ()=> {
    if(mode==='light') {
      setMode('dark');
      showAlert('success','Dark Mode Enabled !');
    } else {
      setMode('light');
      showAlert('success','Light Mode Enabled !');
    }
  }
  
  return (
    <>
    <Router>
      <div className="appMain">
        <NavBar title={textUtils}  mode={mode} toggleMode={toggleMode} aboutText= {aboutText}/>
        <Alert alert={alert}/>
      </div>
      <Routes> 
        <Route  path='/' element={< TextForm  heading={heading} mode={mode} showAlert= {showAlert}/>}></Route> 
        <Route  path='/aboutus' element={< AboutUs mode= {mode} title={aboutText} />}></Route>             
      </Routes> 
     </Router>
    </>
  );
}

export default App;
