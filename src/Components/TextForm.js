import React, { useState } from "react";
import "./TextForm.css";
function TextForm(props) {

  const [text, setText] = useState("");
  const [noOfWords, setNoOfWords] = useState(0);
  const [noOfCharacters, setNoOfCharacters] = useState(0);
  const [encodeBtnText, setEncodeBtnText] = useState("Encode");

  const onChangeofText = (event) => {
    setText(event.target.value);
    setNoOfWords(text.split(" ").length);
    setNoOfCharacters(text.length);
  };
  const convertUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success','Text Converted to UpperCase!');
  };
  const convertLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success','Text Converted to LowerCase!');
  };
  

  const minifyText = () => {
    let newText = text.replace(/\s/g, "");
    newText = newText.replace(/\n/g, "");
    setText(newText);
    setNoOfWords(newText.split(" ").length);
    props.showAlert('success','Text Minified!');
  };

  const encodeEscapeToggle = () => {
    if(encodeBtnText === 'Encode') {
      setEncodeBtnText('Decode');
      setText(encodeURIComponent(text));
    } else {
      setEncodeBtnText('Encode');
      setText(decodeURIComponent(text));
    }
    
    props.showAlert('success',`Text ${encodeBtnText}d!`);
  };

  const clearText = () => {
    setText("");
    props.showAlert('success','TextArea Cleared!');
  };

  const copytoClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success','Copied to Clipboard!');
  };

  return (
    <>
      <div className={` bg-${props.mode}-important`}>
        <div className={`mb-3 container bg-${props.mode}-important`}>
          <label
            htmlFor="TextArea"
            className={`form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>
            <h2 className="my-2">{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
            placeholder="Enter Text Here !"
            id="TextArea"
            value={text}
            onChange={onChangeofText}
            rows={8}
          />
          <div className="d-flex flex-row justify-content-start">
            <button className="btn btn-primary" onClick={convertUppercase}>
              Convert To UpperCase !
            </button>
            <button className="btn btn-primary" onClick={convertLowercase}>
              Convert To lowerCase !
            </button>
            <button className="btn btn-primary" onClick={minifyText}>
              Minify !
            </button>
            <button className="btn btn-primary" onClick={encodeEscapeToggle}>
              {encodeBtnText}
            </button>
            <button className="btn btn-primary" onClick={clearText}>
              Clear
            </button>
          </div>
          <div className="container my-3 leftPaddingnone ">
            <div
              className={`container text-${
                props.mode === "dark" ? "light" : "dark"
              } leftPaddingnone`}>
              <h3>Your Text Summary : </h3>
              <p>
                Your Text has : {noOfWords} and {noOfCharacters}.
              </p>
            </div>
            <div
              className={`my-2 container text-${
                props.mode === "dark" ? "light" : "dark"
              } leftPaddingnone textpreview`}>
              <h3>
                Your Text Preview :
                <button
                  className={`btn btn-${
                    props.mode === "dark" ? "light" : "dark"
                  } mx-3`}
                  onClick={copytoClipboard}>
                  Copy
                </button>
              </h3>
              <p className="border border-secondary rounded p-2 my-2">{text !== ''? text:'Your Preview Here'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextForm;
