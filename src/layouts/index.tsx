import React, { useState } from 'react';
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { LayoutsWrapper } from "./styled";
import LayoutSider from "./layoutSider";
import LayoutHeader from "./layoutHeader";
const { Content } = Layout;

function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <LayoutsWrapper>
      <Layout className="layouts">
        <LayoutSider collapsed={collapsed} />

        <Layout>
          <LayoutHeader collapsed={collapsed} setCollapsed={setCollapsed} />

          <Content className="content">
            <div className="contentMain">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </LayoutsWrapper>
  )
}

export default Layouts