import { useState, useEffect, useMemo } from 'react';
import { Table, Button, Input, Space, Popconfirm } from "antd";
import type { ColumnsType } from 'antd/es/table';
import { DataWrapper } from "./styled";
import { getData } from '@/api/data';
import type { IData } from '@/mocks/db/data';
const { Search } = Input;

function Data() {
  const [data, setData] = useState<IData[]>([]);

  // 删除员工
  const delData = (key: string) => {
    const newData = [...data];
    const index = newData.findIndex(val => val.name === key);
    newData.splice(index, 1);
    setData(newData);
  };

  const columns = useMemo(() => {
    const columns: ColumnsType<IData> = [
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
        render: (_, val, id) => (
          <Space size="middle">
            <Button>更新</Button>
            <Popconfirm
              placement="bottomRight"
              title={'你确定要删除' + val.name +'吗？'}
              onConfirm={() => delData(val.name)}
              okText="确定"
              cancelText="取消"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ];
    return columns;
  }, [data]);

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