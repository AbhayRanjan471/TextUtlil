// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

 
function App() {
  return ( //we can return only one thing, so wrap up ur whole code using this tage <></>
    //JSX
      <>
      
        <Navbar title="TextUtils" aboutText="About"/> 
        <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyse"/> */}
        <About/>
        </div> 
        
      </>
  );
}

export default App;
