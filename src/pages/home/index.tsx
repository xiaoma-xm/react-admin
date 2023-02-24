import { useRef, useEffect } from "react";
import { Col, Row } from "antd";
import { HomeWrapper } from "./styled";
import * as echarts from 'echarts';
import chartOptions from "@/utils/chartOptions";

function Home() {
  const barChartRef = useRef<HTMLDivElement>(null);
  const lineChartRef = useRef<HTMLDivElement>(null);
  const pointChartRef = useRef<HTMLDivElement>(null);
  const riverChartRef = useRef<HTMLDivElement>(null);
  const stackChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);
  const rainbowChartRef = useRef<HTMLDivElement>(null);

  const createCharts = (chartContainer: HTMLDivElement, options: any) => {
    // echarts初始化容器
    const chart = echarts.init(chartContainer);
    chart.setOption(options);
  }

  useEffect(() => {
    createCharts(barChartRef.current as HTMLDivElement, chartOptions.barOptions);
    createCharts(lineChartRef.current as HTMLDivElement, chartOptions.lineOptions);
    createCharts(pointChartRef.current as HTMLDivElement, chartOptions.pointOptions);
    createCharts(riverChartRef.current as HTMLDivElement, chartOptions.riverOptions);
    createCharts(stackChartRef.current as HTMLDivElement, chartOptions.stackOptions);
    createCharts(pieChartRef.current as HTMLDivElement, chartOptions.pieOptions);
    createCharts(rainbowChartRef.current as HTMLDivElement, chartOptions.rainbowOptions);
  }, []);

  return (
    <HomeWrapper>
      <Row className="mb-10">
        <Col className="col" sm={24} md={12} xl={6}>
          <div className="barChart" ref={barChartRef}>图表1</div>
        </Col>
        <Col className="col" sm={24} md={12} xl={6}>
          <div className="lineChart" ref={lineChartRef}>图表2</div>
        </Col>
        <Col className="col" sm={24} md={12} xl={6}>
          <div className="pointChart" ref={pointChartRef} >图表3</div>
        </Col>
        <Col className="col" sm={24} md={12} xl={6}>
          <div className="riverChart" ref={riverChartRef}>图表4</div>
        </Col>
      </Row>

      <Row className="mb-10">
        <Col className="col" sm={24} xl={14}>
          <div className="stackChart" ref={stackChartRef}>图表5</div>
        </Col>
        <Col className="col" sm={24} xl={10}>
          <div className="pieChart" ref={pieChartRef}>图表6</div>
        </Col>
      </Row>

      <Row>
        <Col className="col" span={24}>
          <div className="rainbowChart" ref={rainbowChartRef} >图表7</div>
        </Col>
      </Row>
    </HomeWrapper>
  )
}

export default Home