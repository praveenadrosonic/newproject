import React, { useState, ChangeEvent} from "react";
import "./TextForm.css";

interface textformProps {
  mode?: string;
  heading?: string;
  showAlert?: (status:string,message:string) =>void;
}

function TextForm(props : textformProps) {
  const [text, setText] = useState("");
  const [noOfWords, setNoOfWords] = useState(0);
  const [noOfCharacters, setNoOfCharacters] = useState(0);

  const onChangeofText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setNoOfWords(newText.split("/\s+/").filter((value:string)=>{return value.length!==0}).length+newText.split("\n").filter((value:string)=>{return value.length!==0}).length-1);
    setNoOfCharacters(newText.length);
  };
  const convertUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    if (props && props.showAlert) {
      props.showAlert('success','Text Converted to UpperCase!');
    }
  };
  const convertLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    if (props && props.showAlert) {
      props.showAlert('success','Text Converted to LowerCase!');
    }
  };
  

  const minifyText = () => {
    let newText = text.replace(/\s/g, "");
    newText = newText.replace(/\n/g, "");
    setText(newText);
    setNoOfWords(newText.split(" ").filter((value)=>{return value!=='';}).length);
    if (props && props.showAlert) {
      props.showAlert('success','Text Minified!');
    }
  };

  const encodeEscapeToggle = () => {
    try{
      setText(encodeURIComponent(text)); 
      if (props && props.showAlert) {
        props.showAlert('success',`Text Encoded!`);
      }
    } catch(e) {
      console.error('error in encoding',e);
    }   
  };

  const decodeEscapeToggle = () => {
    try{
      setText(decodeURIComponent(text));
      if (props && props.showAlert) {
        props.showAlert('success',`Text Decoded!`);
      }
    } catch(e) {
      console.error('error in decoding',e);
    } 
  };

  const clearText = () => {
    setText("");
    if (props && props.showAlert) {
      props.showAlert('success','TextArea Cleared!');
    }
  };

  const copytoClipboard = () => {
    navigator.clipboard.writeText(text);
    if (props && props.showAlert) {
      props.showAlert('success','Copied to Clipboard!');
    }
  };

  return (
    <>
      <div className={`bg-${props.mode}-important textform-parent`}>
      <div className={` bg-${props.mode}-important`}>
        <div className={`mb-3 container bg-${props.mode}-important`}> 
          <label
            htmlFor="TextArea"
            className={`textarea-label form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}>
            <h4>{props.heading}</h4>
          </label>
          <textarea
            className={`form-control textarea-${props.mode==='dark'?'dark':''} text-${props.mode === "dark" ? "light" : "dark"}`}
            placeholder="Enter Text Here !"
            id="TextArea"
            value={text}
            onChange={onChangeofText}
            rows={8}  
          />
          
          <div className="d-flex flex-row justify-content-start">
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={convertUppercase}>
              Convert To UpperCase !
            </button>
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={convertLowercase}>
              Convert To lowerCase !
            </button>
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={minifyText}>
              Minify !
            </button>
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={encodeEscapeToggle}>
              Encode
            </button>
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={decodeEscapeToggle}>
              Decode
            </button>
            <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={clearText}>
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
              }  leftPaddingnone textpreviewparent`}>
              <h3>
                Your Text Preview :
                <button disabled={text.length===0}
                  className={`btn btn-${
                    props.mode === "dark" ? "light" : "dark"
                  } mx-3`}
                  onClick={copytoClipboard}>
                  Copy
                </button>
              </h3>
              <div className={`textpreview border border-secondary rounded p-2 my-2 textpreview textarea-${props.mode==='dark'?'dark':''}`}><p>{text !== ''? text:'Your Preview Here'}</p></div>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </>
  );
}

export default TextForm;
