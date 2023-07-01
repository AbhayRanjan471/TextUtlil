// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

//In react-router-dom v6, ‘Switch’ is replaced by ‘Routes’.
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";
 
function App() {

  //creating a user state for Alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{ //type will contains thetype of the alert ie, 'danger','success','warning'
    //setting the alert as object
    setAlert({
      msg: message,
      type: type
    })

    //after few second the alert will be autometically removed , bcz we are using set-timer
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const [mode, setMode] = useState('light');
  const [modeName , setName] = useState('Light Mode');
  const [modeTheme , setTheme] = useState('dark');

   
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setName('Light Mode');
      setTheme('dark');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
      //if we want to change the title of the taskbar, when we enable dark mode we will do
      // document.title ='TextUtils - Light Mode';
    }
    else{
      setMode('dark');
      setName('Dark Mode');
      setTheme('light');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //to change the taskbar title
      // document.title ='TextUtils - Dark Mode';
    }
  }
  return ( //we can return only one thing, so wrap up ur whole code using this tage <></>
    //JSX
      <>
      {/* We will wrap the whole content in the inside the Router tag, to use React router */}
      <Router>
          <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} modeName={modeName} modeTheme={modeTheme}/> 
          <Alert alert ={alert}/>
          <div className="container my-3">
                {/* 👇️ Wrap your Route components in a Routes component */}
              <Routes>
                {/* 'exact path' : it will find the eaxt path of the url and we use only 'path="about"': it will check for the partial url */}
                <Route exact path="/about" element={<About mode={mode}/>} />
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word Counter, charcater Counter, Remove extra spaces" mode={mode}/>} />
              </Routes>
          
          </div> 

        </Router>
      </>
  );
}

export default App;
