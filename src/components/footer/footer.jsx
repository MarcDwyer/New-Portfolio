import React from 'react'
import './footer_styles.scss'

const Footer = () => {
    return (
        <div className="parent footer-parent">
            <div className="container footer-cont">
                <div className="footer-btns">
                <a target="_blank" href="https://github.com/MarcDwyer" className="fa fa-github" />
                <a target="_blank" href="https://www.linkedin.com/in/marc-dwyer-53087339/" className="fa fa-linkedin" />
                </div>
            </div>
        </div>
    )
}

export default Footer