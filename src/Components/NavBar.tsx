import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
import { Link } from 'react-router-dom';
interface TextUtilsProps {
    title?: string;
    aboutText?: string;
    mode?: string;
    toggleMode?: () => void;
  }
  
function TextUtils(props: TextUtilsProps) {

  return (
    <>
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className={`container-fluid  bg-${props.mode}`}>
        <Link className={`navbar-brand `} to="/">
            {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
        </span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">
                Home
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
                {props.aboutText}
            </Link>
            </li>
        </ul>
        <div className ={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
            <input  className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label  className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Disable':'Enable'} dark mode</label>
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
