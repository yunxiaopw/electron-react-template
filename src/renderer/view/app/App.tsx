import React, { FC } from "react";
import "./App.scss";
import AppRoutes from "@renderer/router";
import TitleBar from "@renderer/components/common/TitleBar";
import { HashRouter, useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";

function RouteElement() {
  const element = useRoutes(AppRoutes);
  return element;
}

const App: FC = () => {
  return (
    <ConfigProvider 
      theme={{
        token: {
          fontSize: 12
        }
      }}
    >
      <div className="ease-app">
        <TitleBar title="现现对冲" />
        <main className="ease-main">
          <HashRouter>
            <RouteElement />
          </HashRouter>
        </main>
      </div>
    </ConfigProvider>
  );
};

export default App;
