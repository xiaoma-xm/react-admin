import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import {
    HomeOutlined,
    DatabaseOutlined,
    EditOutlined,
    TableOutlined,
    QuestionCircleOutlined
} from '@ant-design/icons';
import Layouts from "@/layouts";
import LayoutsAuth from "@/components/layoutsAuth";
import LoginAuth from "@/components/loginAuth";
import Loading from "@/components/loading";

// 懒加载函数
function lazyLoad(path: string) {
    const Comp = lazy(() => import(`@/pages/${path}`));

    return (
        <Suspense fallback={<Loading />}>
            <Comp />
        </Suspense>
    )
}

export interface IRoutes {
    path: string,
    element: JSX.Element,
    isHide?: boolean,
    title?: string,
    icon?:  any,
    children?: IRoutes[]
}

// 路由配置
const routes: IRoutes[] = [
    {
        path: '/',
        element: <LayoutsAuth>
            <Layouts />
        </LayoutsAuth>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' />,
                isHide: true
            },
            {
                path: '/home',
                element: lazyLoad('home'),
                title: '家',
                icon: <HomeOutlined />
            },
            {
                path: '/data',
                element: lazyLoad('data'),
                title: '数据管理',
                icon: <DatabaseOutlined />
            },
            {
                path: '/formPage',
                element: lazyLoad('formPage'),
                title: '表单页',
                icon: <EditOutlined />
            },
            {
                path: '/tablePage',
                element: lazyLoad('tablePage'),
                title: '表格页',
                icon: <TableOutlined />
            },
            {
                path: '/status',
                element: lazyLoad('status'),
                title: '状态页',
                icon: <QuestionCircleOutlined />,
                children: [
                    {
                        path: '/status',
                        element: <Navigate to='/status/403' />,
                        isHide: true
                    },
                    {
                        path: '/status/403',
                        element: lazyLoad('status/403'),
                        title: '403'
                    },
                    {
                        path: '/status/404',
                        element: lazyLoad('status/404'),
                        title: '404'
                    },
                    {
                        path: '/status/500',
                        element: lazyLoad('status/500'),
                        title: '500'
                    }
                ]
            }
        ]
    },
    {
        path: '/login',
        element: <LoginAuth>
            {lazyLoad('login')}
        </LoginAuth>
    },
    {
        path: '*',
        element: lazyLoad('404')
    }
];

// 导航菜单路由
export const menuRoutes = () => {
    return routes.find(route => route.path === '/')?.children?.filter(subRoute => !subRoute.isHide) as IRoutes[];
};

// 路由注册
export const useRenderRoutes = () => useRoutes(routes); 