import React, { FC } from "react";
import { Button, Checkbox, InputNumber } from "antd";
import "./OpenRule.scss";

const OpenRule: FC = () => {
  const [formData, setFormData] = React.useState<any>({
    value1: true,
    value2: false,
  });
  return (
    <div className="ease-open-rule">
      <div className="title">
        <div className="line" />
        <div className="name">开平仓规则</div>
      </div>
      <div className="container-wrap">
        <div className="item">
          <div className="item-content">
            <span>开仓差率：</span>
            <InputNumber
              size="small"
              className="input-number"
              defaultValue={15}
            />
          </div>
          <Checkbox
            checked={formData.value1}
            onChange={(e) =>
              setFormData({ ...formData, value2: e.target.checked })
            }
          >
            自动启动服务策略
          </Checkbox>
        </div>
        <div className="item">
          <div className="item-content">
            <span>清仓差率：</span>
            <InputNumber
              size="small"
              className="input-number"
              defaultValue={15}
            />
          </div>
          <Checkbox
            checked={formData.value2}
            onChange={(e) =>
              setFormData({ ...formData, value3: e.target.checked })
            }
          >
            自动启动本地策略
          </Checkbox>
        </div>
      </div>
      <Button className="btn" size="small" type="primary">
        保存
      </Button>
    </div>
  );
};

export default OpenRule;
