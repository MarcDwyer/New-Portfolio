import React from 'react'
import './nav_styles.scss'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

const Nav = (props) => {
    console.log(props)
    return (
        <div className="parent nav">
        <div className="naver container">
            <div className="navigator">
                <li><Link to="/" className="fontme">Home</Link></li>
                <li><Link to="/about" className="fontme">About</Link></li>
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