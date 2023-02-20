import request from "@/utils/request";
import type { Ival } from "@/pages/login";

// 登录接口
export const loginApi = (formData: Ival) => {
    return request.post('/login', formData);
};