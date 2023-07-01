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
    props.showAlert("Converted to upperCase", 'success');
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", 'success');
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
    props.showAlert("Converted to Alternate character", 'success');
  }

  //if more then one space is present then we will remove that extra space
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", 'success');
  }

  //this function will clear the text when click on the clear text button
  const handleClearText = ()=>{
    setText('');
    props.showAlert("Clear", 'success');
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
    {/* style{1st curly braces is for javaScript{2nd is for object inside javaScript}} */}
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>    
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8" placeholder='Enter the text...'></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAltClick}>Convert to AlternateCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra space</button>
        </div>
    </div>
    <div className='container my-2' style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
