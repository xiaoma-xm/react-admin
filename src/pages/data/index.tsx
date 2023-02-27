import { useState, useEffect } from 'react';
import { Table, Button, Input, Space, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { DataWrapper } from "./styled";
import { getData } from '@/api/data';
const { Search } = Input;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  profession: string
}

const columns: ColumnsType<DataType> = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    render: (id) => {
      return id + 1;
    }
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '居住住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '手机号码',
    key: 'phoneNumber',
    dataIndex: 'phoneNumber'
  },
  {
    title: '职业',
    key: 'job',
    dataIndex: 'job'
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button>更新</Button>
        <Button danger>删除</Button>
      </Space>
    ),
  },
];

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(res => {
      setData(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  return (
    <DataWrapper>
      <div className="addPerson">
        <Search style={{ width: 200 }} placeholder="查找员工..." enterButton />
        <Button type="primary">增加员工</Button>
      </div>
      <Table rowKey={'id'} columns={columns} dataSource={data} bordered pagination={{ pageSize: 5 }} />
    </DataWrapper>
  )
}

export default Data