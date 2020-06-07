import React from "react";
import yermag from "../assets/YER_Fall2017.pdf";

const Mag = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
    <embed src={yermag} width="700vw" height="2000vh" />
  </div>
);

export default Mag;
