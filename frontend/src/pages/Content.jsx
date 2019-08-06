import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../conf";

const Content = props => {
  // Replaces state
  const [contentData, setContentData] = useState([]);

  // Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    const contentId = props.match.params.id;
    axios
      .get(`${backend}/content/page/${contentId}`)
      .then(({ data }) => {
        setContentData(data);
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }, []); // <- This empty array disables automatic updates
  return (
    <div className="center" style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "3rem" }}>{contentData.page_title}</h1>
    </div>
  );
};

export default Content;
