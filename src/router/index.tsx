import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layouts from "@/layouts";
import LayoutsAuth from "@/components/layoutsAuth";

// 懒加载函数
function lazyLoad(path: string) {
    const Comp = lazy(() => import(`@/pages/${path}`));

    return (
        <Suspense fallback={'Loading...'}>
            <Comp />
        </Suspense>
    )
}

// 路由配置
const routes = [
    {
        path: '/',
        element: <LayoutsAuth>
            <Layouts />
        </LayoutsAuth>
    },
    {
        path: '/login',
        element: lazyLoad('login')
    },
    {
        path: '*',
        element: lazyLoad('404')
    }
];

// 路由注册
export const useRenderRoutes = () => useRoutes(routes); 