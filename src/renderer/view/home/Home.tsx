import React, { FC } from 'react';
import ExchangeSelect from './module/exchangeSelect/ExchangeSelect';
import OpenRule from './module/openRule/OpenRule';
import SettingModule from './module/settingModule/SettingModule';
import TableList from './module/tableList/TableList';
import './Home.scss';

const Home: FC = () => {
  return (
    <div className="ease-main-container">
      <div className="top-container">
        <div className="item">
          <ExchangeSelect />
        </div>
        <div className="item">
          <OpenRule />
        </div>
        <div className="item">
          <SettingModule />
        </div>
      </div>
      <div className="main-container">
        <TableList />
      </div>
    </div>
  );
};

export default Home;
