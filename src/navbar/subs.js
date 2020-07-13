import React from "react";
import styled from "styled-components";

const Item = styled.div`
  padding: 10px 0px 0px 0px;
  text-decoration: none;
  font-size: 15px;
  color: rgb(44, 44, 44);
  display: block;
  text-align: right;
  font-family: Gill Sans;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
    border-radius: 5px;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 140px;
  max-width: 140px;
  width: 140px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-left: -10px;
  z-index: 1;
`;

const Dropdown = styled.div`
  :hover ${DropdownContent} {
    display: block;
  }
  display: "flex";
  margin-top: 7px;
`;
export const AboutNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            textDecoration: "none",
            fontSize: "15px",
            color: "rgb(44, 44, 44)",
            display: "block",
            textAlign: "right",
            fontFamily: "Gill Sans",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 20"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
          About
        </div>
        <DropdownContent>
          <Item>
            {" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Gill Sans",
                textAlign: "left",
                paddingLeft: "5px",
                cursor: "pointer",
              }}
              href="/static?id=About"
            >
              About Us
            </a>
          </Item>
          <Item>
            {" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Gill Sans",
                textAlign: "left",
                paddingLeft: "5px",
                cursor: "pointer",
              }}
              href="/static?id=Team"
            >
              Team
            </a>
          </Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export const SubmitNav = () => {
  return (
    <div>
      <Dropdown>
        <div
          style={{
            textDecoration: "none",
            fontSize: "15px",
            color: "rgb(44, 44, 44)",
            display: "block",
            textAlign: "right",
            fontFamily: "Gill Sans",
            cursor: "pointer",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 20"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
          Submit
        </div>
        <DropdownContent>
          <Item>
            {" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Gill Sans",
                textAlign: "left",
                paddingLeft: "5px",
                cursor: "pointer",
              }}
              href="/static?id=Submit"
            >
              Submit
            </a>
          </Item>
          <Item>
            {" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Gill Sans",
                textAlign: "left",
                paddingLeft: "5px",
                cursor: "pointer",
              }}
              href="/static?id=Guidelines"
            >
              Guidelines
            </a>
          </Item>
          <Item>
            {" "}
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "Gill Sans",
                textAlign: "left",
                paddingLeft: "5px",
                cursor: "pointer",
              }}
              href="/static?id=WritingCompetitions"
            >
              Writing Competitions
            </a>
          </Item>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};
