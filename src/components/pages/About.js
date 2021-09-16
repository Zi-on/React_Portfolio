import React from "react";
import image from "../pictures/ZZ.jpg"
import Image from "react-bootstrap/Image"
import "../styles/About.css"


export default function About(img) {
  return (
    <div className="about-me">
      <h1 className="header">About Me</h1>
      <Image className="zenny" src={image} width={150} height={150} roundedCircle></Image>
      <p className="description">
        I am a Web Developer who is looking to learn anything & everything
        coding/programming related. I am currently enrolled in a UTSA coding
        bootcamp & will be a certified full stack web developer by October of
        2021. Through my experience with this bootcamp me & two fellow class
        mates created a crypto currency news website that grabs data from apis
        to fill the page with crypto stock information as well as news articles
        pertaining to the crypto selected. I have found myself prevailing in
        back end functionality & Java-scripting.
      </p>
    </div>
  );
}
