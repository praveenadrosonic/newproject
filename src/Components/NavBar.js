import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
function TextUtils(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className={`container-fluid  bg-${props.mode}`}>
        <a className={`navbar-brand `} href="/">
        {props.title}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
                Home
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">
                {props.aboutText}
            </a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li>
                <a className="dropdown-item" href="/">
                    Action
                </a>
                </li>
                <li>
                <a className="dropdown-item" href="/">
                    Another action
                </a>
                </li>
                <li>
                <hr className="dropdown-divider" />
                </li>
                <li>
                <a className="dropdown-item" href="/">
                    Something else here
                </a>
                </li>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true" href="/">
                Disabled
            </a>
            </li>
        </ul>
        <div className ={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input  className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='dark'?'light':'dark'} mode</label>
        </div>
        </div>
    </div>
    
    </nav>
    </>
  );
}

TextUtils.propTypes = {title : PropTypes.string,aboutText: PropTypes.string}

TextUtils.defaultProps = {title : 'Set Prop Here.',aboutText: 'Set about us text here'}

export default TextUtils;
