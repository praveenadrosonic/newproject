import React from "react";
import  "./AboutUs.css"

interface AboutUsProps {
    mode?: string,
    title?: string
  }

function AboutUs(props:AboutUsProps) {

    const styleDarkButton = {
        backgroundColor: "#494949",
        color: "#f1e1e1",
        boxShadow: "none"
    }

    const styleDarkAccordian = {
        backgroundColor:"#8f7a7a",
        color: "#f7f7f7"
    }

    return (
      <>
      <div className={`bg-${props.mode} about-us-parent`}>
        <div className={`mb-3 container bg-${props.mode}`}>
            <div className="container">
                <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.title}</h1>
                
                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                    <button style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         Feature Highlights:
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian :{}} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        1.Effortless Text Conversion: Seamlessly switch between uppercase and lowercase with a single click.<br/>
                        2.Secure Encoding and Decoding: Encode sensitive information for added security, and decode when needed.<br/>
                        3.Copy with Ease: Simplify your workflow by copying manipulated text directly from the app.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        User-Friendly Interface:
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian :{}} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Emphasize the user-friendly design and intuitive interface that makes the app accessible to users of all skill levels. For instance:<br/>
                        Intuitive User Interface: Our app is designed for simplicity, ensuring a smooth experience for both casual and advanced users.<br/>
                        Streamlined Copy-Paste: Enjoy a hassle-free text manipulation experience with our easy-to-use copy-paste functionality.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button  style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Versatility and Convenience:
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian:{}} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div  className="accordion-body">
                        Highlight the versatility of the app and how it caters to various text manipulation needs. For example:<br/>
                        Multi-Purpose Text Tool: Whether you're converting cases, encoding, or decoding, our app is your all-in-one solution.<br/>
                        On-the-Go Convenience: Access your favorite text manipulations from anywhere, making it a must-have tool for professionals and students alike.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button  style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Mission Statement or Purpose:
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian:{}} id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div  className="accordion-body">
                        Convey the mission or purpose behind the app, expressing why it was developed and how it aims to improve users' text-related tasks. For instance:<br/>
                        Empowering Communication: Our mission is to simplify and enhance the way you interact with text, making communication more efficient and enjoyable.<br/>
                        Text Transformation Made Simple: We believe in providing users with a powerful yet straightforward tool for text manipulation, saving time and effort.
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
          </div>
      </>
    );
  }
  export default AboutUs;