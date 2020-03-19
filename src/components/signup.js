import React, { Component } from "react";
import "../App.css";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "#000" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#06069A" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "15px", padding: 5, borderColor: '#000'}}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <br />
      <input
        style={{ fontSize: "15px", padding: 5, borderColor: '#000'}}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <br />
      <button style={{ fontSize: "15px", paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: '#000', color: '#fff'}} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

class SignUp extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div style= {{marginLeft: "1%", marginRight: "5%", border: "solid black 2px", textAlign: "center"}}>
      <div style={{display: "inline-block"}}>
        <h1>Get updates from YER</h1>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
      </div>
    );
  }
}

export default SignUp;