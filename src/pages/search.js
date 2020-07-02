import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
  withRouter,
  useLocation,
} from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import styled from "styled-components";
const contentful = require("contentful");

const Container = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  min-width: 40vw;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  padding-left: 5px;
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
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  margin: 3%;
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
    console.log(response.fields);

    setSearchContent(response.fields);

    //   let asset = await client.getAsset("SwkqadbMXFiT0oKlgMwBl");
    //   console.log("cover photos", asset.fields.file.url);
    //   setPhoto('https:' + asset.fields.file.url);
  };

  const goToArticle = (id) => {
    history.push({
      pathname: "/content/" + id,
      search: "?id=" + id,
      state: { contentId: id },
    });
  };

  return (
    <>
      <div className="content">
        <H3>Search for an article:</H3>
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            placeholder="Article name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit" onClick={getArticle}>
            Submit
          </Button>
        </div>
      </div>
      {searchContent != null ? (
        <div>
          {searchContent.map((b, i) => (
            <SearchResult onClick={() => goToArticle(b.id)}>
              <div>{searchContent.fields.title}</div>
              <div>By {searchContent.fields.authors[0]}</div>
              <hr />
            </SearchResult>
          ))}
        </div>
      ) : (
        <div>no results</div>
      )}
    </>
  );
};

export default withRouter(Search);
