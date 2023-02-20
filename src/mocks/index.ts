import Mock from 'mockjs';

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