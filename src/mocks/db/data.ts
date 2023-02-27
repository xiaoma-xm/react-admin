import Mock from 'mockjs';
const Random = Mock.Random;

export interface IData {
    id: string,
    name: string,
    age: number,
    address: string,
    phoneNumber: string,
    job: string
}

export default () => {
    const data:IData[] = [];
    const jobs = ['前端工程师', '数据分析师', '测试工程师', '后端工程师', '产品经理', 'UI设计师'];

    for (let i = 0; i < 20; i++) {
        // 模拟手机号码
        const number = Mock.mock({
            'number|5': Random.integer(3, 9).toString() + Random.integer(1, 9).toString()
        });

        data.push({
            id: Math.random().toString(36).slice(3),
            name: Random.cname(),
            age: Random.integer(18, 60),
            address: Random.county(true),
            phoneNumber: '1' + number.number,
            job: jobs[Math.floor(Math.random() * jobs.length)]
        });
    }
    
    return data;
};
