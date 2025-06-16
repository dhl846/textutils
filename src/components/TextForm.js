import React, {useState} from 'react'


export default function TextForm(props) {
    const handelUpClick=()=>{
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handelOnChange=(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text , setText ] = useState("Enter Text here") ;
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handelOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handelUpClick}>Convert to Uppercase </button>
    </div>
  )
}
