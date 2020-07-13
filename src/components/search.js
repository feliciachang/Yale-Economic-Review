import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
const contentful = require("contentful");

const Input = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
`;

const H3 = styled.h3`
  font-weight: normal;
  font-size: 3.3vh;
`;

const Button = styled.button`
  font-weight: normal;
  background-color: #bdbdbd;
  border: 1px solid white;
  border-radius: 0px 5px 5px 0px;
  padding: 10px;
  margin-left: -1px;
`;

const SearchResult = styled.div`
  word-wrap: break-word;
  min-width: 45vw;
  cursor: pointer;
  :hover {
    background-color: rgb(240, 240, 240);
  }
`;

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  let history = useHistory();

  const goToSearch = () => {
    if (query !== "") {
      history.push({
        pathname: "/search",
        search: "?id=" + query,
      });
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        placeholder="Title, keyword, author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" onClick={goToSearch}>
        Search
      </Button>
      {error ? <div>please provide a search value</div> : <div />}
    </div>
  );
};

export default withRouter(Search);
