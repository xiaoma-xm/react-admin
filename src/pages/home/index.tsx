import { useRef, useEffect } from "react";
import { Col, Row } from "antd";
import { HomeWrapper } from "./styled";
import * as echarts from 'echarts';

function Home() {
  const barChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // echarts初始化容器
    const chart = echarts.init(barChartRef.current as HTMLDivElement);
    // 图表配置项
    let options = {
      title: {
        text: "衣服和鞋子",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    chart.setOption(options);
  }, []);

  return (
    <HomeWrapper>
      <Row className="mb-10">
        <Col className="col mr-10" span={6}>
          <div className="barChart" ref={barChartRef}>图表1</div>
        </Col>
        <Col className="col mr-10" span={6}>
          <div>图表2</div>
        </Col>
        <Col className="col mr-10" span={6}>
          <div>图表3</div>
        </Col>
        <Col className="col" span={5}>
          <div>图表4</div>
        </Col>
      </Row>

      <Row className="mb-10">
        <Col className="col mr-10" span={14}>
          <div>图表5</div>
        </Col>
        <Col className="col" span={9}>
          <div>图表6</div>
        </Col>
      </Row>

      <Row>
        <Col className="col" span={24}>
          <div>图表7</div>
        </Col>
      </Row>
    </HomeWrapper>
  )
}

export default Home