import React, { FC } from 'react';
import { Tabs } from 'antd';
import AmountSetting from './module/amountSetting/AmountSetting';
import LoanSetting from './module/loanSetting/LoanSetting';
import './SettingModule.scss';

const SettingModule: FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const [tabList, setTabList] = React.useState<any[]>([
    {
      key: '1',
      title: '对冲金额设置',
      children: <AmountSetting />,
    },
    {
      key: '2',
      title: '现货杠杆区自动借币设置',
      children: <LoanSetting />,
    },
    {
      key: '3',
      title: '推送服务设置',
      children: <AmountSetting />,
    },
    {
      key: '4',
      title: '套利软件下载',
      children: <AmountSetting />,
    },
    {
      key: '5',
      title: '行情设置',
      children: <AmountSetting />,
    },
    {
      key: '6',
      title: '开仓习惯',
      children: <AmountSetting />,
    },
    {
      key: '7',
      title: '其他设置',
      children: <AmountSetting />,
    },
  ]);

  return (
    <div className="ease-setting-module">
      <Tabs defaultActiveKey="1" type="card" onChange={onChange}>
        {tabList.map((item) => {
          return (
            <Tabs.TabPane tab={item.title} key={item.key}>
              {item.children}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default SettingModule;
