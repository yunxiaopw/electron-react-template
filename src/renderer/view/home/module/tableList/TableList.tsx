import React from "react";
import { Button, Checkbox } from "antd";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import "./TableList.scss";

const TableList = () => {
    interface DataType {
        key: string;
        name: string;
        label0: string;
        label1: string;
        label2: string;
        label3: string;
        label4: string;
        label5: string;
        label6: string;
        label7: string;
        label8: string;
        label9: string;
        label10: string;
        label11: string;
        label12: string;
        label13: string;
        label14: string;
      }
  const [isOpen, setIsOpen] = React.useState(false);
  const [columns, setColumns] = React.useState<ColumnsType<DataType>>( [
    {
      title: '勾选',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <><Space>
            <Checkbox>{text}</Checkbox>
        </Space></>,
    },
    {
      title: '期货交易所',
      dataIndex: 'label0',
      key: 'label0',
      ellipsis: true,
    },
    {
      title: '期货交易对',
      dataIndex: 'label1',
      key: 'label1',
      ellipsis: true,
    },
    {
        title: '现货交易所',
        dataIndex: 'label2',
        key: 'label2',
        ellipsis: true
      },
      {
        title: '现货交易对',
        dataIndex: 'label3',
        key: 'label3',
      ellipsis: true,

      },
      {
        title: '当期费率',
        dataIndex: 'label4',
        key: 'label4',
      ellipsis: true,

      },
      {
        title: '预测费率',
        dataIndex: 'label5',
        key: 'label5',
      ellipsis: true,

      },
      {
        title: '开仓监控值',
        dataIndex: 'label6',
        key: 'label6',
      ellipsis: true,

      },
      {
        title: '状态',
        dataIndex: 'label7',
        key: 'label7',
      ellipsis: true,

      },
      {
        title: '更新时间',
        dataIndex: 'label8',
        key: 'label8',
      ellipsis: true,

      },
      {
        title: '期货买1',
        dataIndex: 'label9',
        key: 'label9',
      ellipsis: true,

      },
      {
        title: '现货卖1',
        dataIndex: 'label10',
        key: 'label10',
      },
      {
        title: '开仓差率',
        dataIndex: 'label11',
        key: 'label11',
      ellipsis: true,

      },
      {
        title: '清仓差率',
        dataIndex: 'label12',
        key: 'label12',
      ellipsis: true,

      },
      {
        title: '操作类型',
        dataIndex: 'label13',
        key: 'label13',
      ellipsis: true,

      },
      {
        title: '不提醒',
        dataIndex: 'label14',
        key: 'label14',
      ellipsis: true,

      },
  ])
 
  const data: DataType[] = [
    {
      key: '1',
      name: '143',
      label0: '币安金本位永续合约',
      label1: 'MCOTI_USDT',
      label2: '火币现货',
      label3: 'MCOTI_USDT',
      label4: '-0.0406',
      label5: '-0.0406',
      label6: '90',
      label7: '超出',
      label8: '18:52:12',
      label9: '1.122658',
      label10: '1.122658',
      label11: '0.83',
      label12: '1.23',
      label13: '现多期空',
      label14: '超出',
    },
    {
        key: '1',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '2',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '3',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '4',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '5',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '6',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '7',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
      {
        key: '8',
        name: '143',
        label0: '币安金本位永续合约',
        label1: 'MCOTI_USDT',
        label2: '火币现货',
        label3: 'MCOTI_USDT',
        label4: '-0.0406',
        label5: '-0.0406',
        label6: '90',
        label7: '超出',
        label8: '18:52:12',
        label9: '1.122658',
        label10: '1.122658',
        label11: '0.83',
        label12: '1.23',
        label13: '现多期空',
        label14: '超出',
      },
  ];
  return (
    <div className="ease-table-list">
      <div className="top-bar">
        <div className="top-bar-left">
          <div className="category">
            <div className="category-title">监控机会</div>
            <div className="triangle"></div>
          </div>
          <div className="message">
            <div className="message-title">即时消息</div>
            {!isOpen && <div className="count">18</div>}
            {isOpen && (
              <>
                <div className="item">
                  <span>期现：</span>
                  <span>3</span>
                </div>
                <div className="item">
                  <span>期期：</span>
                  <span>5</span>
                </div>
                <div className="item">
                  <span>现现：</span>
                  <span>15</span>
                </div>
              </>
            )}
            <div
              className={`triangle ${isOpen ? "right-icon" : "left-icon"}`}
              onClick={() => setIsOpen(!isOpen)}
            ></div>
          </div>
        </div>
        <div className="top-bar-center">
            <span>收起</span>
        </div>
        <div className="top-bar-right">
          <Button className="btn" size="small" type="primary">刷新</Button>
          <Button size="small" type="primary">开启</Button>
        </div>
      </div>
      <Table bordered pagination={false} columns={columns} dataSource={data} />
    </div>
  );
};

export default TableList;
