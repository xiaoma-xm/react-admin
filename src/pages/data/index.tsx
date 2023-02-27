import { useState, useEffect, useMemo, FormEvent, useRef } from 'react';
import { Table, Button, Input, Space, Popconfirm, Modal, Form, InputNumber, Select } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { FormInstance } from 'antd/es/form';
import { DataWrapper } from "./styled";
import { getData } from '@/api/data';
import type { IData } from '@/mocks/db/data';
// const { Search } = Input;
const { Option } = Select;

// 对话框表单校验规则
const rules = {
  name: [
    { required: true, message: '请输入姓名' },
    { pattern: /^[^\s]*$/, message: '请不要输入空格！' }
  ],
  age: [
    { required: true, message: '请填写年龄' },
    { pattern: /^[1-9][0-9]?/, message: '年龄不能小于0等于0' }
  ],
  address: [
    { required: true, message: '请输入居住地址' },
    { pattern: /^[^\s]*$/, message: '请不要输入空格！' }
  ],
  phoneNumber: [
    { required: true, message: '请输入电话号码' },
    { pattern: /^1[3-9][0-9]\d{8}$/, message: '手机号码格式不正确' }
  ],
  job: [
    { required: true, message: '请填写你的职业' },
    { pattern: /^[^\s]*$/, message: '请不要输入空格！' }
  ]
}

let staticData: IData[]; // 作为查找用户的基础数据，不会改变
function Data() {
  const formRef = useRef<FormInstance>(null);
  const form: any = Form.useForm();
  
  const [data, setData] = useState<IData[]>([]);
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // 打开对话框
  const openModel = (text: string) => {
    setModalTitle(text);
    setOpen(true);
  };

  // 保存对话框
  const saveModel = (val: IData) => {
    setData([{...val, id: Math.random().toString(36).slice(3)}, ...data]);
    setOpen(false);
    // 重置校验结果
    formRef.current?.resetFields();
  }

  // 取消对话框
  const cancalModel = () => {
    setOpen(false);
    // 重置校验结果
    formRef.current?.resetFields();
  }

  // 查找员工
  const searchData = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    const searchData = staticData.filter(val => {
      // return data.filter(val2 => {
      //   if (val.name.includes(value) && val.name === val2.name) {
      //     return true;
      //   }
      // })
      return val.name.includes(value)
    });
    setData(searchData);
  };

  // 删除员工
  const delData = (key: string) => {
    const newData = [...data];
    const index = newData.findIndex(val => val.name === key);
    newData.splice(index, 1);
    setData(newData);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle >
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const columns = useMemo(() => {
    const columns: ColumnsType<IData> = [
      {
        title: 'ID',
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
            <Button onClick={() => openModel('更新员工')}>更新</Button>
            <Popconfirm
              placement="bottomRight"
              title={'你确定要删除' + val.name + '吗？'}
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
      staticData = res.data;
      // form.setFieldsValue(res.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <DataWrapper>
      <div className="addPerson">
        <Input style={{ width: 200 }} placeholder="输入姓名查找员工..." onInput={(e) => searchData(e)} suffix={<SearchOutlined />} />
        <Button type="primary" onClick={() => openModel('添加员工')}>添加员工</Button>
      </div>
      <Table rowKey={'id'} columns={columns} dataSource={data} bordered pagination={{ pageSize: 5 }} />

      {/* 对话框 */}
      <Modal
        title={modalTitle}
        open={open}
        // onOk={saveModel}
        onCancel={cancalModel}
        okText={'保存'}
        cancelText={'取消'}
        maskClosable={false}
        keyboard={false}
        footer={[]}
      >
        <Form
          ref={formRef}
          labelCol={{ span: 4 }}
          onFinish={saveModel}
          // form={form}
        >
          <Form.Item label='姓名' name='name' rules={rules.name}>
            <Input />
          </Form.Item>

          <Form.Item label='年龄' name='age' rules={rules.age}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label='居住地址' name='address' rules={rules.address}>
            <Input />
          </Form.Item>

          <Form.Item label='手机号码' name='phoneNumber' rules={rules.phoneNumber}>
            <Input addonBefore={prefixSelector} />
          </Form.Item>

          <Form.Item label='职业' name='job' rules={rules.job}>
            <Input />
          </Form.Item>

          <Form.Item style={{ textAlign: 'right', marginBottom: 0 }}>
            <Space>
              <Button onClick={cancalModel}>取消</Button>
              <Button type='primary' htmlType='submit'>保存</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </DataWrapper>
  )
}

export default Data