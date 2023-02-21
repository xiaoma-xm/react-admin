import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起！您所访问的当前页面不存在。"
      extra={<Button type="primary" onClick={() => navigate('/home')}>回家</Button>}
    />
  )
}

export default NotFound;