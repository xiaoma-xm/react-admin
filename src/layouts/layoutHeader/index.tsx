import React, { useState } from 'react';
import { Layout, Dropdown, Avatar } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined
} from '@ant-design/icons';
import type { MenuProps } from "antd";
import { type NavigateFunction, useNavigate } from "react-router-dom";
import screenfull from 'screenfull';
const { Header } = Layout;

let navigate: NavigateFunction;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a href="" onClick={(e) => {
                e.preventDefault();
                navigate('/home');
            }}>回家</a>
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

interface IProps {
    collapsed: boolean,
    setCollapsed: Function
}

function LayoutHeader(props: IProps) {
    navigate = useNavigate();

    const [isFullscreen, setIsFullscreen] = useState(false);
    
    return (
        <Header className="header">
            <div className='toggleMenuIcon'>
                {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => props.setCollapsed(!props.collapsed),
                })}
            </div>

            <div className="aboutUser">
                <div className='fullScreenIcon'>
                    {React.createElement(isFullscreen ? FullscreenExitOutlined : FullscreenOutlined, {
                        className: 'trigger',
                        onClick: () => {
                            screenfull.toggle();
                            setIsFullscreen(!isFullscreen);
                        },
                    })}
                </div>

                <div className="username">
                    {localStorage.getItem('username')}
                </div>

                <Dropdown menu={{ items }} placement="bottomRight">
                    <Avatar>
                        {localStorage.getItem('username')?.slice(0, 1).toLocaleUpperCase()}
                    </Avatar>
                </Dropdown>
            </div>
        </Header>
    )
}

export default LayoutHeader