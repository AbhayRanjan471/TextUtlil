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
  //we have to handle the onChange listen, else we will not be able to type in the text area
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState('Enter text here');
  // text = "new text"; //wrong way to change the state
  // setText("new text"); // Correct way to change the state, this will change the Text
  return (
    <>
    <div>    
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    </div>
    </>
  )
}
