
import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
      }
      const handleLoClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
      }

        const clear=()=>{
          let newText = " ";
          setText(newText);
        
      }
    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value) 
        }

    const[text,setText] = useState("enter text here");
  return (
  <>
    <div>
       <div className="mb-3">
  <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to upper</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lower</button>
  <button className="btn btn-primary mx-2" onClick={clear}>Clear</button>
</div>
<div className="container"> 
<h1>your details</h1>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p> {0.008 * text.split(" ").length } took to read  </p>
</div>

</>
  )
}
