import React from 'react'
import './nav_styles.scss'
const Nav = () => {
    return (
        <div className="parent">
        <div className="naver container">
            <div className="navigator">
                <li><span className="fontme">Home</span></li>
                <li><span className="fontme">Projects</span></li>
                <li><span className="fontme">About</span></li>
            </div>
            <div className="icons">
                <div className="iconset">
                <a href="www.google.com"><i className="fa fa-github"></i></a>
                <a href="www.google.com"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Nav