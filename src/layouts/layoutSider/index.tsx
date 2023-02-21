import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
function createNavMenu(routes: IRoutes[]): any {
    return routes.map(route => {
        let subRoute;
        // 获取二级路由
        if (route.children) {
            subRoute = createNavMenu(route.children.filter(r => !r.isHide))
        }
        return getItem(route.title, route.path, route.icon, subRoute);
    })
}

function LayoutSider() {
    const navigate = useNavigate();
    const location = useLocation();

    const items = useMemo(() => {
        return createNavMenu(menuRoutes());
    }, []);

    // 根据当前地址栏路径生成默认打开的导航菜单项
    const openKeysArr = useMemo(() => {
        const arr: string[] = [];
        const allKeys = location.pathname.split('/');
        allKeys.forEach(key => {
            allKeys.pop();
            arr.push(allKeys.join('/'));

        })
        return arr;
    }, []);

    return (
        <Sider className="sider">
            <div className="logo"></div>
            <Menu
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={openKeysArr}
                mode="inline"
                theme="dark"
                items={items}
                onClick={({ key }) => {
                    navigate(key);
                }}
            />
        </Sider>
    )
}

export default LayoutSider