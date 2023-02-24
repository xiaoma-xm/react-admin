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

    return chart;
  }

  useEffect(() => {
    const chart1 = createCharts(barChartRef.current as HTMLDivElement, chartOptions.barOptions);
    const chart2 = createCharts(lineChartRef.current as HTMLDivElement, chartOptions.lineOptions);
    const chart3 = createCharts(pointChartRef.current as HTMLDivElement, chartOptions.pointOptions);
    const chart4 = createCharts(riverChartRef.current as HTMLDivElement, chartOptions.riverOptions);
    const chart5 = createCharts(stackChartRef.current as HTMLDivElement, chartOptions.stackOptions);
    const chart6 = createCharts(pieChartRef.current as HTMLDivElement, chartOptions.pieOptions);
    const chart7 = createCharts(rainbowChartRef.current as HTMLDivElement, chartOptions.rainbowOptions);    

    window.onresize = () => {
      chart1.resize();
      chart2.resize();
      chart3.resize();
      chart4.resize();
      chart5.resize();
      chart6.resize();
      chart7.resize();
    }
  }, []);

  return (
    <HomeWrapper>
      <Row className="mb-10">
        <Col className="col" xs={24} md={12} xl={6}>
          <div className="barChart" ref={barChartRef}>图表1</div>
        </Col>
        <Col className="col" xs={24} md={12} xl={6}>
          <div className="lineChart" ref={lineChartRef}>图表2</div>
        </Col>
        <Col className="col" xs={24} md={12} xl={6}>
          <div className="pointChart" ref={pointChartRef} >图表3</div>
        </Col>
        <Col className="col" xs={24} md={12} xl={6}>
          <div className="riverChart" ref={riverChartRef}>图表4</div>
        </Col>
      </Row>

      <Row className="mb-10">
        <Col className="col" xs={24} xl={14}>
          <div className="stackChart" ref={stackChartRef}>图表5</div>
        </Col>
        <Col className="col" xs={24} xl={10}>
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