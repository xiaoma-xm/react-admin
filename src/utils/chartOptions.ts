import * as echarts from 'echarts';

export default {
    barOptions: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    },
    pointOptions: {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                ],
                type: 'scatter'
            }
        ]
    },
    riverOptions: {
        singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
                animation: true,
                label: {
                    show: true
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    opacity: 0.2
                }
            }
        },

        series: [
            {
                type: 'themeRiver',
                emphasis: {
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                },
                data: [
                    ['2015/11/08', 10, 'DQ'],
                    ['2015/11/09', 15, 'DQ'],
                    ['2015/11/10', 35, 'DQ'],
                    ['2015/11/11', 38, 'DQ'],
                    ['2015/11/12', 22, 'DQ'],
                    ['2015/11/13', 16, 'DQ'],
                    ['2015/11/14', 7, 'DQ'],
                    ['2015/11/15', 2, 'DQ'],
                    ['2015/11/16', 17, 'DQ'],
                    ['2015/11/17', 33, 'DQ'],
                    ['2015/11/18', 40, 'DQ'],
                    ['2015/11/19', 32, 'DQ'],
                    ['2015/11/20', 26, 'DQ'],
                    ['2015/11/21', 35, 'DQ'],
                    ['2015/11/22', 40, 'DQ'],
                    ['2015/11/23', 32, 'DQ'],
                    ['2015/11/24', 26, 'DQ'],
                    ['2015/11/25', 22, 'DQ'],
                    ['2015/11/26', 16, 'DQ'],
                    ['2015/11/27', 22, 'DQ'],
                    ['2015/11/28', 10, 'DQ'],
                    ['2015/11/08', 35, 'TY'],
                    ['2015/11/09', 36, 'TY'],
                    ['2015/11/10', 37, 'TY'],
                    ['2015/11/11', 22, 'TY'],
                    ['2015/11/12', 24, 'TY'],
                    ['2015/11/13', 26, 'TY'],
                    ['2015/11/14', 34, 'TY'],
                    ['2015/11/15', 21, 'TY'],
                    ['2015/11/16', 18, 'TY'],
                    ['2015/11/17', 45, 'TY'],
                    ['2015/11/18', 32, 'TY'],
                    ['2015/11/19', 35, 'TY'],
                    ['2015/11/20', 30, 'TY'],
                    ['2015/11/21', 28, 'TY'],
                    ['2015/11/22', 27, 'TY'],
                    ['2015/11/23', 26, 'TY'],
                    ['2015/11/24', 15, 'TY'],
                    ['2015/11/25', 30, 'TY'],
                    ['2015/11/26', 35, 'TY'],
                    ['2015/11/27', 42, 'TY'],
                    ['2015/11/28', 42, 'TY'],
                    ['2015/11/08', 21, 'SS'],
                    ['2015/11/09', 25, 'SS'],
                    ['2015/11/10', 27, 'SS'],
                    ['2015/11/11', 23, 'SS'],
                    ['2015/11/12', 24, 'SS'],
                    ['2015/11/13', 21, 'SS'],
                    ['2015/11/14', 35, 'SS'],
                    ['2015/11/15', 39, 'SS'],
                    ['2015/11/16', 40, 'SS'],
                    ['2015/11/17', 36, 'SS'],
                    ['2015/11/18', 33, 'SS'],
                    ['2015/11/19', 43, 'SS'],
                    ['2015/11/20', 40, 'SS'],
                    ['2015/11/21', 34, 'SS'],
                    ['2015/11/22', 28, 'SS'],
                    ['2015/11/23', 26, 'SS'],
                    ['2015/11/24', 37, 'SS'],
                    ['2015/11/25', 41, 'SS'],
                    ['2015/11/26', 46, 'SS'],
                    ['2015/11/27', 47, 'SS'],
                    ['2015/11/28', 41, 'SS'],
                    ['2015/11/08', 10, 'QG'],
                    ['2015/11/09', 15, 'QG'],
                    ['2015/11/10', 35, 'QG'],
                    ['2015/11/11', 38, 'QG'],
                    ['2015/11/12', 22, 'QG'],
                    ['2015/11/13', 16, 'QG'],
                    ['2015/11/14', 7, 'QG'],
                    ['2015/11/15', 2, 'QG'],
                    ['2015/11/16', 17, 'QG'],
                    ['2015/11/17', 33, 'QG'],
                    ['2015/11/18', 40, 'QG'],
                    ['2015/11/19', 32, 'QG'],
                    ['2015/11/20', 26, 'QG'],
                    ['2015/11/21', 35, 'QG'],
                    ['2015/11/22', 40, 'QG'],
                    ['2015/11/23', 32, 'QG'],
                    ['2015/11/24', 26, 'QG'],
                    ['2015/11/25', 22, 'QG'],
                    ['2015/11/26', 16, 'QG'],
                    ['2015/11/27', 22, 'QG'],
                    ['2015/11/28', 10, 'QG'],
                    ['2015/11/08', 10, 'SY'],
                    ['2015/11/09', 15, 'SY'],
                    ['2015/11/10', 35, 'SY'],
                    ['2015/11/11', 38, 'SY'],
                    ['2015/11/12', 22, 'SY'],
                    ['2015/11/13', 16, 'SY'],
                    ['2015/11/14', 7, 'SY'],
                    ['2015/11/15', 2, 'SY'],
                    ['2015/11/16', 17, 'SY'],
                    ['2015/11/17', 33, 'SY'],
                    ['2015/11/18', 40, 'SY'],
                    ['2015/11/19', 32, 'SY'],
                    ['2015/11/20', 26, 'SY'],
                    ['2015/11/21', 35, 'SY'],
                    ['2015/11/22', 4, 'SY'],
                    ['2015/11/23', 32, 'SY'],
                    ['2015/11/24', 26, 'SY'],
                    ['2015/11/25', 22, 'SY'],
                    ['2015/11/26', 16, 'SY'],
                    ['2015/11/27', 22, 'SY'],
                    ['2015/11/28', 10, 'SY'],
                    ['2015/11/08', 10, 'DD'],
                    ['2015/11/09', 15, 'DD'],
                    ['2015/11/10', 35, 'DD'],
                    ['2015/11/11', 38, 'DD'],
                    ['2015/11/12', 22, 'DD'],
                    ['2015/11/13', 16, 'DD'],
                    ['2015/11/14', 7, 'DD'],
                    ['2015/11/15', 2, 'DD'],
                    ['2015/11/16', 17, 'DD'],
                    ['2015/11/17', 33, 'DD'],
                    ['2015/11/18', 4, 'DD'],
                    ['2015/11/19', 32, 'DD'],
                    ['2015/11/20', 26, 'DD'],
                    ['2015/11/21', 35, 'DD'],
                    ['2015/11/22', 40, 'DD'],
                    ['2015/11/23', 32, 'DD'],
                    ['2015/11/24', 26, 'DD'],
                    ['2015/11/25', 22, 'DD'],
                    ['2015/11/26', 16, 'DD'],
                    ['2015/11/27', 22, 'DD'],
                    ['2015/11/28', 10, 'DD']
                ]
            }
        ]
    },
    lineOptions: {
        xAxis: {
            type: 'category',
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '30%']
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [
                {
                    gt: 1,
                    lt: 3,
                    color: 'rgba(0, 0, 180, 0.4)'
                },
                {
                    gt: 5,
                    lt: 7,
                    color: 'rgba(0, 0, 180, 0.4)'
                }
            ]
        },
        series: [
            {
                type: 'line',
                smooth: 0.6,
                symbol: 'none',
                lineStyle: {
                    color: '#5470C6',
                    width: 5
                },
                markLine: {
                    symbol: ['none', 'none'],
                    label: { show: false },
                    data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
                },
                areaStyle: {},
                data: [
                    ['2019-10-10', 200],
                    ['2019-10-11', 560],
                    ['2019-10-12', 750],
                    ['2019-10-13', 580],
                    ['2019-10-14', 250],
                    ['2019-10-15', 300],
                    ['2019-10-16', 450],
                    ['2019-10-17', 300],
                    ['2019-10-18', 100]
                ]
            }
        ]
    },
    stackOptions: {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    },
    pieOptions: {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    },
    rainbowOptions: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
            text: 'Gradient Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
        },
        toolbox: {
            feature: {
                // saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90, 340, 250]
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220, 340, 310]
            },
            {
                name: 'Line 3',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(55, 162, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(116, 21, 219)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 132, 201, 334, 190, 130, 220]
            },
            {
                name: 'Line 4',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 0, 135)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(135, 0, 157)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 402, 231, 134, 190, 230, 120]
            },
            {
                name: 'Line 5',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 191, 0)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(224, 62, 76)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 302, 181, 234, 210, 290, 150]
            }
        ]
    },
}