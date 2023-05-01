import React from "react";
import "./TitleBar.scss";

function App(props: { title: string }) {

  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div
      className="ease-title-bar"
      style={{ height: process.env.IS_WEB ? "0px" : "36px" }}>
        <div className="ease-title-bar__logo">
          <div className="logo" />
          <div className="app-name">品牌名</div>
        </div>
        <div className="ease-title-bar__title">{props.title}</div>
        <div className="ease-title-bar__menu">
          <div className={`ease-title-bar__menu-item ${currentTab === 0 ? 'active' : ''}`} onClick={() => setCurrentTab(0)}>期现</div>
          <div className={`ease-title-bar__menu-item ${currentTab === 1 ? 'active' : ''}`} onClick={() => setCurrentTab(1)}>期期</div>
          <div className={`ease-title-bar__menu-item ${currentTab === 2 ? 'active' : ''}`} onClick={() => setCurrentTab(2)}>现现</div>
          <div className={`ease-title-bar__menu-item ${currentTab === 3 ? 'active' : ''}`} onClick={() => setCurrentTab(3)}>弹出</div>
        </div>
      </div>
  );
}

export default App;
