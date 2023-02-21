import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from "antd";
import type { MenuProps } from 'antd';
import { menuRoutes } from "@/router";
import type { IRoutes } from '@/router';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

// 生成导航菜单
function createNavMenu(routes: IRoutes[]):any {
    return routes.map(route => {
        let subRoute;
        // 获取二级路由
        if (route.children) {
            subRoute = createNavMenu(route.children.filter(r => !r.isHide))
        }

        return getItem(route.title, route.path, route.icon, subRoute);
    })

}

// const items: MenuItem[] = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('Option 3', '3', <ContainerOutlined />),

//     getItem('Navigation One', 'sub1', <MailOutlined />, [
//         getItem('Option 5', '5'),
//         getItem('Option 6', '6'),
//         getItem('Option 7', '7'),
//         getItem('Option 8', '8'),
//     ]),

//     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
//         getItem('Option 9', '9'),
//         getItem('Option 10', '10'),

//         getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
//     ]),
// ];

function LayoutSider() {
    const navigate = useNavigate();

    const items = useMemo(() => {
        return createNavMenu(menuRoutes());
    }, []);
    
    return (
        <Sider className="sider">
            <div className="logo"></div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                // inlineCollapsed={collapsed}
                items={items}
                onClick={({ key }) => {
                    navigate(key);
                }}
            />
        </Sider>
    )
}

export default LayoutSider