import { Navigate } from "react-router-dom";
import type { Iprops } from "../layoutsAuth";

function LoginAuth(props: Iprops) {
  return localStorage.getItem('username') ? <Navigate to='/' /> : props.children;
}

export default LoginAuth