import React, { Component } from "react";
import "../App.css";

// const CustomForm = ({ status, message, onValidated }) => {
//   let email, name;
//   const submit = () =>
//     email &&
//     name &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email.value,
//       NAME: name.value,
//     });

//   return (
//     <div
//       style={{
//         borderRadius: 2,
//         padding: 10,
//         display: "inline-block",
//       }}
//     >
//       {status === "sending" && <div style={{ color: "#000" }}>sending...</div>}
//       {status === "error" && (
//         <div
//           style={{ color: "red" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       {status === "success" && (
//         <div
//           style={{ color: "#06069A" }}
//           dangerouslySetInnerHTML={{ __html: message }}
//         />
//       )}
//       <input
//         style={{ fontSize: "15px", padding: 10, border: "1px solid black" }}
//         ref={(node) => (name = node)}
//         type="text"
//         placeholder="Your name"
//       />
//       <br />
//       <br />
//       <input
//         style={{ fontSize: "15px", padding: 10, border: "1px solid black" }}
//         ref={(node) => (email = node)}
//         type="email"
//         placeholder="Your email"
//       />
//       <br />
//       <br />
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// };

// // .dual-section{
// //   display: flex;
// //   align-items: left;
// //   justify-content: space-between;
// // }
class SignUp extends Component {
  render() {
    const url =
      "https://gmail.us20.list-manage.com/subscribe/post?u=efcf53e5cc53e101735848444&amp;id=9d9a5c1f74";
    return (
      <div
        style={{
          marginLeft: "1%",
          marginRight: "5%",
          border: "solid rgb(240, 240, 240) 2px",
          backgroundColor: "rgb(240, 240, 240)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "5% 10% 5% 10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ maxWidth: "30vw", textAlign: "left" }}>
            Get updates from the YER
          </h1>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              padding: "15px 25px",
              fontSize: "20px",
              border: "1px solid black",
              borderRadius: "50px",
              fontWeight: "bold",
              fontFamily: "Gill Sans",
            }}
            href="https://mailchi.mp/1649f471e01f/the-yale-economic-review"
          >
            Subscribe
          </a>
        </div>
      </div>
    );
  }
}

export default SignUp;
