import TextForm from "./Components/TextForm";
import AboutUs from "./Components/AboutUs";
import NavBar from "./Components/NavBar";
import Alert from "./Components/Alert";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';



function App() {
  const textUtils = 'TextUtils';
  const aboutText = 'About Us';
  const heading = 'Enter Your Text Below';
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (status,message) => {
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
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      showAlert('success','Light Mode Enabled !');
      document.title = 'TextUtils - Light Mode';
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
        <Route exact path='/newproject/' element={< TextForm  mode={mode} showAlert= {showAlert}/>}></Route> 
        <Route exact path='/newproject/aboutus' element={< AboutUs mode= {mode} title={aboutText} />}></Route>             
      </Routes> 
     </Router>
    </>
  );
}

export default App;
