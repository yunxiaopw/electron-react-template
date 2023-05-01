import React from "react";
import "./TitleBar.scss";

function App(props: { title: string }) {

  return (
    <div
      className="SkyTitleBar"
      style={{ height: process.env.IS_WEB ? "0px" : "40px" }}>{props.title}</div>
  );
}

export default App;
