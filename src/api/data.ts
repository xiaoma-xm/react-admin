import request from "@/utils/request";

// 获取data页面的员工数据
export const getData = () => {
    return request.get('/getData');
};