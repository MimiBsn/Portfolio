import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact me !</h2>
      <form>
        <label>
          Name :
          <input type="text" name="name" />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            placeholder="interestedperson@company.com"
          />
        </label>
        <label>
          Message :<textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      <div>
        <a href="https://www.linkedin.com/in/alexandra-busson/">
          LinkedIn profile
        </a>
        <a href="https://github.com/MimiBsn">GitHub profile</a>
      </div>
    </div>
  );
};
export default Contact;
