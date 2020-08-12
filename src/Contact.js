import React from "react";
import "./App.css";
export const Contact = () => (
  <div>
    <section className="container">
      <div className="contactleft">
        <p id="Contactheader">
        Have a question? 
      </p>
      <h6>From product support to assistance with online
        ordering, our dedicated Consumer Relations team is here to help you
        every step of the way.</h6>
        <br></br>
      <div>
        <p style={{ fontWeight: "bolder" }}>Customer Service:</p>
        <p>0333 2000 8765</p>
        <br></br>
        <p style={{ fontWeight: "bolder" }}>By email:</p>
      </div>
      </div>
      <div className="App">
        <form id="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  </div>
);
