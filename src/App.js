// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

 
function App() {
  return ( //we can return only one thing, so wrap up ur whole code using this tage <></>
    //JSX
      <>
      
        <Navbar title="TextUtils" aboutText="About"/> 
        <div className="container my-3">
        <TextForm heading="Enter the text to analyse"/>
        </div> 
      </>
  );
}

export default App;
