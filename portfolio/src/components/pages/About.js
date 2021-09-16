import React from "react";
import image from "../pictures/ZZ.jpg"
import Image from "react-bootstrap/Image"

export default function About(img) {
  return (
    <div>
      <h1>About Me</h1>
      <Image src={image} width={100} height={100} roundedCircle></Image>
      <p>
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
