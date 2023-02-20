import { useEffect, useRef } from 'react';
import { Form, Input, Button, type InputRef } from 'antd';
import { LoginWrapper } from './styled';

interface Ival {
  username: string,
  password: string
}

// 表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名！' },
    { pattern: /^[^\s]*$/, message: '请不要输入空格！' }
  ],
  password: [
    { required: true, message: '请输入密码！' },
    { pattern: /^[^\s]*$/, message: '请不要输入空格！' }
  ]
};

// 组件
function Login() {
  const inputRef = useRef<InputRef>(null);

  // 登录的回调处理
  function submitHandler(val: Ival) {
    console.log(val);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <LoginWrapper>
      <Form className='loginForm' onFinish={submitHandler}>
        <h1 className='loginTitle'>React Admin</h1>

        <Form.Item name='username' rules={rules.username}>
          <Input ref={inputRef} placeholder='请输入用户名' />
        </Form.Item>

        <Form.Item name='password' rules={rules.password}>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' block htmlType='submit'>登录</Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
}

export default Login