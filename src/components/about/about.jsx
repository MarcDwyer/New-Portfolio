import React from 'react'
import Intro from '../intro/intro'

export const About = (props) => {
    return (
        <Intro pather={props.location.pathname} />
    )
}

export default About