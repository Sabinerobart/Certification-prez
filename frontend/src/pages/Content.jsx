import React, { useState, useEffect } from "react";
import axios from "axios";
import { backend } from "../conf";

const Content = props => {
  // Replaces state
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    fetchContent();
  }, []); // <- This empty array disables automatic updates

  const fetchContent = async () => {
    const contentId = props.match.params.id;
    const res = await axios.get(`${backend}/content/page/${contentId}`);
    let data = res.data;
    setContentData(data);
  };

  return (
    <div className="center" style={{ height: "100vh" }}>
      <h1 style={{ fontSize: "3rem" }}>{contentData.page_title}</h1>
    </div>
  );
};

export default Content;
