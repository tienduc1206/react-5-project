import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Abc" />
          </div>

          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Abc" />
          </div>

          <div>
            <label htmlFor="">Message</label>
            <input type="email" placeholder="Tell us about your query ..." />
          </div>

          <button type="submit ">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
