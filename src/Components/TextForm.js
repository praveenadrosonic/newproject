import React, { useState } from "react";
import "./TextForm.css";
function TextForm(props) {

  const [text, setText] = useState("");
  const [noOfWords, setNoOfWords] = useState(0);
  const [noOfCharacters, setNoOfCharacters] = useState(0);

  const onChangeofText = (event) => {
    const newText = event.target.value;
    setText(newText);
    setNoOfWords(newText.split(" ").filter((value)=>{return value.length!==0}).length);
    setNoOfCharacters(newText.length);
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
    try{
      setText(encodeURIComponent(text)); 
      props.showAlert('success',`Text Encoded!`);
    } catch(e) {
      console.err('error in encoding',e);
    }   
  };

  const decodeEscapeToggle = () => {
    try{
      setText(decodeURIComponent(text));
      props.showAlert('success',`Text Decoded!`);
    } catch(e) {
      console.err('error in decoding',e);
    } 
  };

  const clearText = () => {
    setText("");
    props.showAlert('success','TextArea Cleared!');
  };;

  const copytoClipboard = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success','Copied to Clipboard!');
  };

  return (
    <>
      <div className={`bg-${props.mode}-important textform-parent`}>
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
            <button className="btn btn-primary my-1" onClick={convertUppercase}>
              Convert To UpperCase !
            </button>
            <button className="btn btn-primary my-2" onClick={convertLowercase}>
              Convert To lowerCase !
            </button>
            <button className="btn btn-primary my-2" onClick={minifyText}>
              Minify !
            </button>
            <button className="btn btn-primary my-2" onClick={encodeEscapeToggle}>
              Encode
            </button>
            <button className="btn btn-primary my-2" onClick={decodeEscapeToggle}>
              Decode
            </button>
            <button className="btn btn-primary my-2" onClick={clearText}>
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
              } leftPaddingnone textpreviewparent`}>
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
              <div className=" textpreview border border-secondary rounded p-2 my-2 textpreview"><p>{text !== ''? text:'Your Preview Here'}</p></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TextForm;
