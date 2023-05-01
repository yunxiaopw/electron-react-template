import React, { FC } from "react";
import { Button, Checkbox } from 'antd';
import './ExchangeSelect.scss';

const ExchangeSelect: FC = () => {
    const [formData, setFormData] = React.useState<any>({
        value1: true,
        value2: false,
        value3: false,
    });
    return (
        <div className="ease-exchange-select">
            <div className="title">
                <div className="line"></div>
                <div className="name">交易选择区</div>
            </div>
            <div className="container-wrap">
                <div className="item">
                    <Checkbox checked={formData.value1} onChange={(e) => setFormData({ ...formData, value1: e.target.checked })}>币安现货</Checkbox>
                    <Checkbox checked={formData.value2} onChange={(e) => setFormData({ ...formData, value2: e.target.checked })}>欧易现货</Checkbox>
                </div>
                <div className="item">
                    <Checkbox checked={formData.value3} onChange={(e) => setFormData({ ...formData, value3: e.target.checked })}>火比现货</Checkbox>
                    <span className="text-btn">查看更多</span>
                </div>
            </div>
            <Button className="btn" size="small" type="primary">重新刷新监控交易数据</Button>
        </div>
    )
}

export default ExchangeSelect