import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick=()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handellowClick=()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handelOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text , setText ] = useState("Enter Text here") ;
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary" onClick={handellowClick}>Convert to lowercase </button>
    </div>
    <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
