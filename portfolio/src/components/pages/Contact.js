import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_qka1inh', 'template_bjqzny8', e.target, 'user_TkJvr2SexvhzEhzv94XWS')
          .then((result) => {
            window.location.reload();
            window.alert('email sent');
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <div>
      <h1>Contact</h1>
        <div className="container">
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="name" name="name"/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="email" className="form-control" placeholder="email" name="email"/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="(subject)" name="subject"/>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <textarea className="form-control" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Send Message"/>
                    </div>


                </div>
            </form>
        </div>
    </div>
  );
}