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
        boxShadow: "reset"
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
                        Accordion Item #1
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian :{}} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian :{}} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button  style={props.mode==='dark'?styleDarkButton:{}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div style={props.mode==='dark'?styleDarkAccordian:{}} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div  className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
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