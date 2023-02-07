//{useState} -> it is a hook, we are importing from react, help to create a new state variable
//https://reactjs.org/docs/hooks-overview.html
import React, {useState} from 'react'
 

export default function TextForm(props) {

  //whenever the Convert to Uppercase button will be clicked this funciton will be called 
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase(); //converting the text to upper case
    //here we are changing the text/state
    setText(newText);
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  //Alternate case ,this function is used to convert the alternate charcater to upper and lower case 
  const handleAltClick = ()=>{
    let newText="";
    for(var i = 0 ; i < text.length ; i++){
      if(i % 2 !== 0){
        newText +=text.charAt(i).toUpperCase();
      }
      else{
        newText +=text.charAt(i).toLowerCase();
      }
    }
    setText(newText);
  }

  //we have to handle the onChange listen, else we will not be able to type in the text area
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); // Correct way to change the state, this will change the Text
  return (
    <>
    <div className='container'>    
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter the text...'></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={handleAltClick}>Convert to AlternateCase</button>
        </div>
    </div>
    <div className='container my-2'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
