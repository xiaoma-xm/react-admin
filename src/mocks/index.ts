import Mock from 'mockjs';
import getData from './db/data';

// 登录
Mock.mock('/mock/login', 'post', (options:any) => {
    return {
        code: 200,
        message: 'success',
        data: {
            username: JSON.parse(options.body).username
        }
    }
})

// 获取data页面的员工数据
Mock.mock('/mock/getData', () => {
    return {
        code: 200,
        message: 'success',
        data: getData()
    }
});