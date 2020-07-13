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
  const [searchContent, setSearchContent] = useState(null);
  const [query, setQuery] = useState("");
  let history = useHistory();

  const getArticle = async () => {
    let client = contentful.createClient({
      space: "obm5e8rm0eay",
      accessToken: "xLxHCYuAYz3XfWCE_29SoJe9eVVHfnzTrgIuKg1sIqU",
    });
    console.log(query);
    let response = await client.getEntries({
      query: query,
    });
    console.log(response.items);

    setSearchContent(response.items);
  };

  const goToSearch = () => {
    history.push({
      pathname: "/search",
      search: "?id=" + query,
    });
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
    </div>
  );
};

export default withRouter(Search);
