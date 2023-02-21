import { Spin } from "antd";

const loadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
};

function Loading() {
  return (
    <div style={loadingStyle}>
        <Spin size="large" tip='Loading...' />
    </div>
  )
}

export default Loading