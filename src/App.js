// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
 
function App() {

  const [mode, setMode] = useState('light');
  const [modeName , setName] = useState('Light Mode');
  const [modeTheme , setTheme] = useState('dark');

   
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setName('Light Mode');
      setTheme('dark');
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark');
      setName('Dark Mode');
      setTheme('light');
      document.body.style.backgroundColor = '#042743';
    }
  }
  return ( //we can return only one thing, so wrap up ur whole code using this tage <></>
    //JSX
      <>
      
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} modeName={modeName} modeTheme={modeTheme}/> 
        <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode}/>
        {/* <About/> */}
        </div> 
        
      </>
  );
}

export default App;
