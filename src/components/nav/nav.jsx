import React from 'react'
import './nav_styles.scss'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="parent nav">
        <div className="naver container">
        <i className="fa fa-bars" />
            <div className="navigator">
                <Link 
                style={props.location.pathname === "/" ? {borderTop: "1px solid black"} : {}}
                 to="/" className="fontme"><span>Home</span></Link>
                <Link 
                style={props.location.pathname === "/resume" ? {borderTop: "1px solid black"} : {}}
                to="/resume" className="fontme"><span>Resume</span></Link>
                <Link 
                style={props.location.pathname === "/about" ? {borderTop: "1px solid black"} : {}}
                to="/about" className="fontme"><span>About</span></Link>
            </div>
            <div className="icons">
                <div className="iconset">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/MarcDwyer"><i className="fa fa-github"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marc-dwyer-53087339/"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Nav)