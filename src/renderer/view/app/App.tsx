import React, { FC, useEffect } from "react";
import logo from "@renderer/assets/logo.svg";
import { Button, Rate } from "antd";
import { version } from "react/package.json";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "./App.scss";

import TitleBar from "@renderer/components/common/TitleBar";
import { Outlet } from "react-router";

const App: FC = () => {
  const { systemInfo } = window;
  const systemInfolist = [
    {
      name: "系统平台",
      value: systemInfo.platform || "浏览器环境",
    },
    {
      name: "electron版本",
      value: systemInfo.release || "浏览器环境",
    },
    {
      name: "系统位数",
      value: systemInfo ? `${systemInfo.arch}位` : "浏览器环境",
    },
  ];

  const handleOpen = () => {
    let data = {
      url: ''
    }
    // @ts-ignore
    window.ipcRenderer.invoke('open-win', data)
  };

  const [currentTab, setCurrentTab] = React.useState<string>('1');

  const onChange = (key: string) => {
    setCurrentTab(key);
    localStorage.setItem('currentTab', key);
  }

  useEffect(() => {
    let currentTab = localStorage.getItem('currentTab');
    console.log('currentTab: ', currentTab);
    if (currentTab) {
      setCurrentTab(currentTab);
    }
  }, [])

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  
  return (
    <div className="App">
      <div className="App-header">
        <TitleBar />
        <Tabs defaultActiveKey="1" activeKey={currentTab} items={items} onChange={onChange} />
        <div className="left-box">
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="logo-title">
              <span>electron</span>-react
            </span>
          </div>
          <div className="info-box">
            <div className="title">关于系统</div>
            <div className="items">
              <div className="item">
                <div className="name">react版本:</div>
                <div className="value">{version}</div>
              </div>

              {systemInfolist.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="name">{item.name}:</div>
                    <div className="value">{item.value}</div>
                  </div>
                );
              })}

              <div className="item">
                <div className="name">antd组件示例</div>
                <div className="value flex-box">
                  <Button type="primary" onClick={() => handleOpen()}>打开子窗口</Button>
                  <Rate />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
