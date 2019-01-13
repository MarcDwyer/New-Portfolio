import React from 'react'
import './intro_styles.scss'

const Intro = (props) => {
    let isAbout = false

    if (props.pather === "/about") {
        isAbout = true
    }
    let styler;
    if (isAbout && window.innerWidth > 800) {
   
        styler = {height: "calc(100vh - 45px)"}
    } else if (isAbout && window.innerWidth <= 800) {
   
        styler = {height: "100%"}
    }

    return (
        <div style={styler} className="parent introdiv">
        <div className="container introcont">
        <div className="content">
            <div className="info">
            <div className="introcolumn">
            <div className="flexer">
            <img src="https://s3.us-east-2.amazonaws.com/fetchappbucket/port/me.jpg" alt="me"/>
                <div className="introduction">
                    <h1>Marc Dwyer</h1>
                    <h2>Web Developer</h2>
                    <h4>marcdwyer1738@gmail.com</h4>
            </div>
            </div>
            </div>
            {(() => {
                if (!isAbout) return null
                return (
                    <div className="aboutme">
                        <p>
                        Hello, and welcome to my portfolio! <br />
                        I am a 'self-taught' Web Developer from Navarre, FL. With no coding bootcamps or schools near me, I decided to take Udacity's Front-End Nanodegree Program. Although the program is wonderful I quickly realized
                        that creating my own projects improved my skills far more quickly and ended up being waaaaay more fun! <br />
                        After being comfortable with JavaScript and NodeJS I began learning React. 
                        </p>
                    </div>
                )
            })()}
            </div>
            <div className="stack">
            <h1>Skills</h1>
            <div className="stackskills">
                <span style={{fontWeight: "bold"}}>HTML, CSS, JavaScript, React, Redux, NodeJS, Go and Git</span>
            </div>
        </div>
        </div>
        </div>
     </div>
    )
}

export default Intro