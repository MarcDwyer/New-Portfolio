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
                        I am a 'self taught' developer from Navarre, FL. Over the past year, I went from writing a sloppy jQuery card game to creating a full on CRUD applications with multiple forms of authentication. 
                        This year my main focus was to 'master' Javascript. Although I still have a long way to go... I have come very far. <br />
                        Shortly after developing my first couple of projects in React I became fascinated with NodeJS (with GraphQL) and the Go programming language for the backend. <br />
                        After spending some time learning NodeJS & Go I began building backend dominant applications such as my Forum app and Poll app. <br />
                        At the current moment, I feel equally comfortable with the front and backend. I also believe I have achieved the correct mindset to quickly learn other technologies<br />
                        All my projects are 100% built by myself while persevering through many sleepless nights. Despite the hardships, I managed to push through because at the end of the day I was actually having fun!

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