import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  return (
    <div>
      <h1>THis {params.id}</h1>
    </div>
  );
}

export default Post;
