import React from 'react'
import './intro_styles.scss'

const Intro = (props) => {
    let isAbout = false

    if (props.pather === "/about") {
        isAbout = true
    }
    const styler = isAbout ? {height: "calc(100vh - 45px)"} : {}
    console.log(styler)
    return (
        <div style={styler} className="parent introdiv">
        <div className="container introcont">
        <div className="content">
            <div className="info">
            <img src="https://s3.us-east-2.amazonaws.com/fetchappbucket/port/me.jpg" alt="me"/>
                <div className="introduction">
                    <h1>Marc Dwyer</h1>
                    <h2>Web Developer</h2>
                    <h4>marcdwyer1738@gmail.com</h4>
                </div>
            </div>
            {(() => {
                if (!isAbout) return null
                return (
                    <span>Hey its me</span>
                )
            })()}
            <div className="stack">
            <h1>Skills</h1>
            <div className="stackskills">
                <span>HTML, CSS, JavaScript, React, Redux, NodeJS, Go and Git</span>
            </div>
        </div>
        </div>
        </div>
     </div>
    )
}

export default Intro