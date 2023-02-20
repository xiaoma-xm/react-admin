import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export interface Iprops {
    children: ReactElement
}

function LayoutsAuth(props: Iprops) {
    return localStorage.getItem('username') ? props.children : <Navigate to='/login' />
}

export default LayoutsAuth