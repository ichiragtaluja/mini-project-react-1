import React from "react"

export default function Info() {
    return(
        <div className="about-us">
            <img className="about-us--profile_pic" src="../images/profile-picture.png"/>
            <div className="about-us--main-body">
                <h1 className="about-us--h1">Laura Smith</h1>
                <h4 className="about-us--h4">Frontend Developer</h4>
                <h6 className="about-us--h6">laurasmith.website</h6>
                <div className="container">
                    <button  className="about-us--button1" ><img src="./images/Mail.png"/>Email</button>
                    <button  className="about-us--button2" ><img src="./images/linkedin.png"/>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}