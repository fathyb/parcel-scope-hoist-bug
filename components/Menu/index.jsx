import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <Antd.Menu
        theme="light"
        style={{
          width: 160,
        }}
      >
        <Antd.Menu.Item key="166" icon={<AntDesignIcons.HomeOutlined />}>
          Home
        </Antd.Menu.Item>
        <Antd.Menu.Divider />

        <Antd.Menu.Item key="14" icon={<AntDesignIcons.LineChartOutlined />}>
          Analytics
        </Antd.Menu.Item>
        <Antd.Menu.Divider />

        <Antd.Menu.Item key="133" icon={<AntDesignIcons.UserOutlined />}>
          Account
        </Antd.Menu.Item>
        <Antd.Menu.Divider />

        <Antd.Menu.ItemGroup key="g13" title="Customers">
          <Antd.Menu.Item key="908" icon={<AntDesignIcons.TeamOutlined />}>
            List
          </Antd.Menu.Item>

          <Antd.Menu.Item key="570" icon={<AntDesignIcons.DollarOutlined />}>
            Purchases
          </Antd.Menu.Item>
          <Antd.Menu.Divider />
        </Antd.Menu.ItemGroup>
      </Antd.Menu>
    </div>
  );
}

export default Menu;
