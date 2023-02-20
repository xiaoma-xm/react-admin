import { Layout } from "antd"
import { LayoutsWrapper } from "./styled";
import LayoutSider from "./layoutSider";
import LayoutHeader from "./layoutHeader";
const { Content } = Layout;

function Layouts() {
  return (
    <LayoutsWrapper>
      <Layout className="layouts">
        <LayoutSider />

        <Layout>
          <LayoutHeader />

          <Content className="content">
            <div className="contentMain">Content</div>
          </Content>
        </Layout>
      </Layout>
    </LayoutsWrapper>
  )
}

export default Layouts