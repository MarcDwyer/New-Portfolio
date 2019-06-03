import React from 'react'
import Project from '../projects/project'
import Intro from '../intro/intro'
import Footer from '../footer/footer'

const projects = [
    {
        title: 'gopoll.me',
        details: "This app was inspired by Strawpoll.me. In my opinion a good web app is one that has a simple UI and interactive experience. With the use of WebSockets and the power of Go, I created websocket rooms using gorilla/mux package. With Websocket rooms, I can efficiently broadcast to users viewing specific types of data. In this case, I broadcast only to users viewing the same poll. With the knowledge I've gained from this project, my skills are much more valuable. The ability to broadcast specific messages depenedent on what the client is viewing is incredibly powerful for a variety of situations.",
        url: 'https://fetchappbucket.s3.us-east-2.amazonaws.com/port/poller.jpg',
        links: [{ title: "Live Demo", link: "https://gopoll.me/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/GoPoll" }],
        stack: "React, Go and MongoDB"
    },
    {
        title: "Fetcherapp.net v2",
        details: "This application pulls steamer's status from both the Twitch API as well as the Youtube API. Both APIs have different data structures and the biggest difficulty was merging both data types into one type and serving it to the client. The backend uses Go and makes use of Go's channels, polymorphism and GoRoutines making the application incredibly fast. The Front-end makes use of React, and keeps the client updated using WebSockets and only updates the client when the server has updated the object of streamers. The frontend is equipped with its own notification system, streamer statistics and images of the stream. This application is extremely convenient when tracking streamers from two different platforms",
        url: "https://fetchappbucket.s3.us-east-2.amazonaws.com/port/twitchu.jpg",
        links: [{ title: "Live Demo", link: "https://www.fetcherapp.net/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/theNetwork-react-hooks-typescript" }],
        stack: "React and Go"
    },
    {
        title: "Live Chat",
        details: "SocketIO is an incredibly powerful tool. Allowing multiple users to connect with eachother. I created this app because I feel like its important for a Developer to be able to create software that allow users to communicate.",
        url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/livechat.jpg",
        links: [{ title: "Live Demo", link: "https://livechattesting.herokuapp.com/" }, { title: "Full-Stack", link: "https://github.com/MarcDwyer/Live-Chat" }],
        stack: "HTML, CSS, JavaScript, NodeJS and SocketIO"
    },
    {
        title: "My Portfolio Page",
        details: "This portfolio page uses React! Wasn't exactly necessary to use it but it was fun!",
        url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/port.jpg",
        links: [{ title: "Front-End", link: "https://github.com/MarcDwyer/NewPort" }],
        stack: "React and Sass"
    }
]
const Home = () => {
    return (
        <div>
            <Intro />
            <Project project={projects} />
            <Footer />
        </div>
    )
}


export default Home