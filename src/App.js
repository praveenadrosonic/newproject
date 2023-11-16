import TextForm from "./Components/TextForm";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import { useState } from "react";
import "./App.css";
function App() {
  const textUtils = 'TextUtils';
  const aboutText = 'About Us';
  const heading = 'Enter Your Text Below';
  const [mode,setMode] = useState('light');
  let toggleMode = ()=> {
    if(mode==='light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }
  
  return (
    <>
    <div className="appMain">
      <NavBar title={textUtils}  mode={mode} toggleMode={toggleMode} aboutText= {aboutText}/>
      <TextForm   mode={mode} heading={heading}/>
      {/* <AboutUs title={aboutText} /> */}
     </div>
    </>
  );
}

export default App;
