import React, { useState } from "react";
import "./TextForm.css";
let isFirst = 0;
function TextForm(props) {
  const [text, setText] = useState("Enter Text Here !");
  const [noOfWords, setNoOfWords] = useState(0);
  const [noOfCharacters, setNoOfCharacters] = useState(0);
  const onChangeofText = (event) => {
    if (isFirst === 0) {
      event.target.value = "";
      isFirst = 1;
    }
    setText(event.target.value);
    setNoOfWords(text.split(" ").length);
    setNoOfCharacters(text.length);
  };
  const convertUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const convertLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const minifyText = () => {
    let newText = text.replace(/\s/g, "");
    newText = newText.replace(/\n/g, "");
    setText(newText);
    setNoOfWords(newText.split(" ").length);
  };

  const encodeEscapeToggle = () => {
    let newText;
    let isEncoded = false;
    for (let i = 0; i < text.length; ++i) {
      if (text.includes("\\s") || text.includes("\\n")) {
        isEncoded = true;
      }
    }
    if (isEncoded) {
      newText = text.replace("\n", /\n/g);
      newText = newText.replace("s", /\s/g);
    } else {
      newText = text.replace(/\n/g, "\\n");
      newText = newText.replace(/\s/g, "\\s");
    }
    setText(newText);
  };

  const clearText = () => {
    setText("");
  };

  const copytoClipboard = () => {
    navigator.clipboard.writeText(text);
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
            <h2>{props.heading}</h2>
          </label>
          <textarea
            className="form-control"
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
              Encode/Decode
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
