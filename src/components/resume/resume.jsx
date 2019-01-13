import React from 'react'

const Resume = () => {
        return (
            <div className="parent">
                <div className="container" style={{height: "calc(100vh - 55px)", display: "flex"}}>
                <iframe src="https://drive.google.com/file/d/15FW1W14eDMGfpIDAsWgaJR-qMatn0Tpl/preview" width="100%" height="100%"
                title="resume"
                style={{border: "1px solid #eee"}}
                />
                </div>
            </div>
        )

}

export default Resume