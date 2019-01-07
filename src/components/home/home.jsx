import React from 'react'
import Project from '../projects/project'
import Intro from '../intro/intro'

const projects = [
    {
    title: 'Real-Time Poll App V1',
    details: "Strawpoll.me inspired me to create this application, it's something I use frequently and didnt realize how good it was until I started building CRUD applications. The app is simple, you create a poll, you vote on it, than you share the URL to your poll to your friends/family, and once you're at the results page, websockets keep you updated on the count of each item in the poll so no refreshing needed. Its an app that takes you on a little journey to creating your own poll.",
    url: 'https://s3.us-east-2.amazonaws.com/fetchappbucket/port/poller.jpg',
    links: [{title: "Live Demo", link: "https://guarded-tundra-22341.herokuapp.com/"}, {title: "Front-End", link: "https://github.com/MarcDwyer/Poll-Frontend"}, {title: "Back-End", link: "https://github.com/MarcDwyer/Poll-Backend"}],
    stack: "React, Go and MongoDB"
 },
 {
    title: "A Reddit Clone V3",
    details: "The goal for this project was to mimick Reddits behavior as well as UI. I can only to guess what Reddit uses stack-wise. I figured GraphQL would be great as I can prevent the user from being served the comments on page load (as it is unnecessary). So I used GraphQL on the backend as well as Apollo Client on the front-end. Apollo Client was a massive headache for me to learn, however I pulled through and am very comfortable using it (and enjoy it). This app also uses JWT's as well as Oauth for authentication. Yes, passwords are encrypted and stored in mongodb. Using Apollo Client, GraphQL, and JWTS for the first time was incredibly difficult but I managed to pull through. All in all, this app made me a far better developer and was/is incredibly fun to make. I do intend on implementing new features in the future.",
    url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/forum.jpg",
    links: [{title: "Live Demo", link: "https://forumsite1234.herokuapp.com/"}, {title: "Full-Stack", link: "https://github.com/MarcDwyer/New-Graphql-repo"}],
    stack: "React, Apollo-Client, NodeJS, GraphQL and MongoDB"
},
 {
     title: "Fetcherapp.net v2",
     details: "The goal of this project was to make the UI a little more user friendly and minimize the app footprint in comparison to v1. In v1, I used redux which although a wonderful tool, wasnt really necessary for this application. Everything in this app could've used in local state and make for a smaller footprint. Also, the UI doesnt need to change to view a video (as it did in v1). All the data should be viewed on a single page for a better UI. Doing all of this, I managed to reduce the file size by about 100kb, and make for a much more enjoyable UX. Also, I've recently been very fascinated by the GO language, so I recreated the backend in Golang. Go is incredibly fast.",
     url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/twitchclone-min.jpg",
     links: [{title: "Live Demo", link: "https://www.fetcherapp.net/"}, {title: "Front-End", link: "https://github.com/MarcDwyer/YoutubeV4Front"}, {title: "Back-End", link: "https://github.com/MarcDwyer/GoTwitchClone/tree/master"}],
     stack: "React and Go"
 },
 {
    title: "Fetcherapp.net v1",
    details: "Fetcherapp does as the name implies, fetches data from Youtube's API notifying users if a streamers is currently live and updates streamers status in real time. For This app, I used NodeJS & Express for the backend. Node controls the requests to Youtube's API to ensure control over the amount of requests as well as hiding my own API key. This project was incredibly fun and gave me an idea of what my next project would be.",
    url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/fetcherv2.jpg",
    links: [{title: "Live Demo", link: "https://youtubenodetime.herokuapp.com/"}, {title: "Full-Stack", link: "https://github.com/RealRedChief/Youtube-Livestream-App"}],
    stack: "React, Redux and NodeJS"
},
{
    title: "Live Chat",
    details: "SocketIO is an incredibly powerful tool. Allowing multiple users to connect with eachother. I created this app because I feel like its important for a Developer to be able to create software that allow users to communicate.",
    url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/livechat.jpg",
    links: [{title: "Live Demo", link: "https://livechattesting.herokuapp.com/"}, {title: "Full-Stack", link: "https://github.com/MarcDwyer/Live-Chat"}],
    stack: "HTML, CSS, JavaScript, NodeJS and SocketIO"
},
{
    title: "Portfolio Page",
    details: "Usually to make simple sites such as this I wouldnt use a framework, but I just thought it would be fun.",
    url: "https://s3.us-east-2.amazonaws.com/fetchappbucket/port/port.jpg",
    links: [{title: "Front-End", link: "https://github.com/MarcDwyer/NewPort"}],
    stack: "React"
}
]
// https://s3.us-east-2.amazonaws.com/fetchappbucket/port/port.jpg
const Home = () => {
    return (
        <div>
        <Intro />
        <Project project={projects} />
     </div>
    )
}


export default Home