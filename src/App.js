// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
 
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
      
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} modeName={modeName} modeTheme={modeTheme}/> 
        <Alert alert ={alert}/>
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
        {/* <About/> */}
        </div> 
        
      </>
  );
}

export default App;
