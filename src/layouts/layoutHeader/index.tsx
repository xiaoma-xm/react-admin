import { Layout, Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";
import { type NavigateFunction, useNavigate } from "react-router-dom";
const { Header } = Layout;

let navigate: NavigateFunction;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a href="" onClick={(e) => {
                e.preventDefault();
            }}>回到首页</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="" onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                navigate('/login');
            }}>
                退出登录
            </a>
        ),
    },
];

function LayoutHeader() {
    navigate = useNavigate();
    
    return (
        <Header className="header">
            <div >Left</div>

            <div className="aboutUser">
                <div className="username">
                    { localStorage.getItem('username') }
                </div>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <Avatar>
                        { localStorage.getItem('username')?.slice(0, 1).toLocaleUpperCase() }
                    </Avatar>
                </Dropdown>
            </div>
        </Header>
    )
}

export default LayoutHeader