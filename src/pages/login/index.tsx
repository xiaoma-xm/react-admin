import { Form, Input, Button } from 'antd';
import { LoginWrapper } from './styled';

function Login() {
  return (
    <LoginWrapper>
      <Form className='loginForm'>
        <h1 className='loginTitle'>React Admin</h1>

        <Form.Item>
          <Input placeholder='请输入用户名' />
        </Form.Item>

        <Form.Item>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' block>登录</Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  )
}

export default Login