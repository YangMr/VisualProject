/**
 * @author YangLing
 * @date 2022/7/29 15:14
 */
(function () {
    $(document).ready(function () {
        $(".monitor .content").eq(0).show()
        $(".tabs li").click(function () {
            $(this).addClass('active').siblings("li").removeClass('active');
            const _index = $(this).index()
            $(".monitor .content").eq(_index).show().siblings(".content").hide()
        })


        $(".marquee-view .marquee").each(function () {
            const newMarquee = $(this).children().clone()
            $(this).append(newMarquee)
        })
    })
})();

(function () {
    $(document).ready(function () {
        const myChart = echarts.init(document.querySelector(".pie"))

        const option = {
            color: [
                "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9",
                "#1d9dff"
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/> {b}: {c} ({d}%)',
                backgroundColor: 'rgba(0,0,0,0.4)',
                textStyle: {
                    color: "#fff"
                },
                borderWidth: 0
            },
            legend: {
                show: false
            },
            series: [
                {
                    name: '销售统计',
                    type: 'pie',
                    radius: ["10%", "70%"],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 0
                    },
                    label: {
                        fontSize: 10
                    },
                    labelLine: {
                        length: 6,
                        length2: 8
                    },
                    data: [
                        {value: 22, name: '云南', label: {color: '#006cff'}},
                        {value: 28, name: '北京', label: {color: '#60cda0'}},
                        {value: 25, name: '山东', label: {color: '#ed8884'}},
                        {value: 25, name: '河北', label: {color: '#ff9f7f'}},
                        {value: 32, name: '江苏', label: {color: '#ff9f7f'}},
                        {value: 22, name: '浙江', label: {color: '#9fe6b8'}},
                        {value: 31, name: '四川', label: {color: '#32c5e9'}},
                        {value: 42, name: '上海', label: {color: '#1d8dff'}}
                    ]
                }
            ]
        };

        myChart.setOption(option)

        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();

(function () {
    $(document).ready(function () {

        let item = {
            value: 1200,
            itemStyle: {
                color: '#254065'
            },
            tooltip: {
                extraCssText: 'opacity : 0'
            },
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            }
        }

        const myChart = echarts.init(document.querySelector(".bar"))

        const option = {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#00fffb' // 0% 处的颜色
                }, {
                    offset: 1, color: '#0061ce' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            tooltip: {
                trigger: 'item',
                borderWidth: 0,
                backgroundColor: "rgba(0,0,0,0.3)",
                textStyle: {
                    color: "#fff"
                },
                formatter: "{a} <br/> {b} : {c}"
            },
            grid: {

                left: '0%',
                top: '3%',
                right: '3%',
                bottom: '3%',
                containLabel: true,
                show: true,
                borderColor: "rgba(0,240,255,0.3)"

            },
            xAxis: [
                {
                    type: 'category',
                    data: [
                        "上海",
                        "广州",
                        "北京",
                        "深圳",
                        "合肥",
                        "",
                        "......",
                        "",
                        "杭州",
                        "厦门",
                        "济南",
                        "成都",
                        "重庆"
                    ],
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(0,240,255,0.3)"
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: "#4c9bfd"
                    },

                    splitLine: {
                        lineStyle: {
                            color: "rgba(0,240,255,0.3)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: '用户总量',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        2100,
                        1900,
                        1700,
                        1560,
                        1400,
                        item,
                        item,
                        item,
                        900,
                        750,
                        600,
                        480,
                        240
                    ]
                }
            ]
        }

        myChart.setOption(option)

        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();

(function () {
    $(document).ready(function () {
        let data = {
            day365: {
                orders: '30,321,988',
                amount: '99882'
            },
            day90: {
                orders: '301,987',
                amount: '9834'
            },
            day30: {
                orders: '1,987',
                amount: '3834'
            },
            day1: {
                orders: '987',
                amount: '834'
            }
        }

        const $h4Order = $(".order .data  h4:eq(0)")
        const $h4Amount = $(".order .data  h4:eq(1)")
        let _index = 1
        $(".order .tabs a").click(function () {
            _index = $(this).index()
            tabs()
        })


        setInterval(() => {
            tabs()
            _index += 1
            if (_index >= 4) {
                _index = 0
            }
        }, 1000)


        function tabs() {
            $(".order .tabs a").eq(_index).addClass("active").siblings().removeClass("active")

            // 获取标签自定义的属性值
            const _attr = $(".order .tabs a").get(_index).dataset.type
            const _data = data[_attr]
            $h4Order.html(_data.orders)
            $h4Amount.html(_data.amount)
        }
    })
})();

(function () {
    $(document).ready(function () {
        const data = {
            year: {
                info: ["2099年", "2199年", "2299年", "2399年", "2499年", "2599年", "2699年", "2799年", "2899年", "2999年", "3099年", "3199年"],
                detail: [
                    [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                    [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
                ],
            },
            quarter: {
                info: ["第一季度", "第二季度", "第三季度", "第四季度"],
                detail: [
                    [23, 75, 12, 97],
                    [43, 31, 65, 23]
                ]
            },
            month: {
                info: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                detail: [
                    [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                    [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
                ]
            },
            week: {
                info: ["近1周", "近2周", "近3周", "近4周", "近5周", "近6周"],
                detail: [
                    [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                    [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
                ]
            },
        }

        let _index = 0

        $(".sales .tabs ").on("click", 'a', function () {
            _index = $(this).index()
            tabs()
        })
        let timer = null

        function toggle() {
            clearInterval(timer)
            timer = setInterval(() => {
                tabs()
                _index += 1
                if (_index >= 4) {
                    _index = 0
                }
            }, 1000)
        }

        toggle()

        $(".sales").hover(function () {
            clearInterval(timer)

        }, function () {
            toggle()


        })

        function tabs() {
            $(".sales .tabs a").eq(_index).addClass("active").siblings().removeClass("active")
            const _type = $(".sales .tabs a").get(_index).dataset.type
            const _data = data[_type]

            option.xAxis.data = _data.info
            option.series[0].data = _data.detail[0]
            option.series[1].data = _data.detail[1]
            myChart.setOption(option)
        }


        const line = document.querySelector(".line")
        const myChart = echarts.init(line)

        const option = {
            color: ["#00f2f1", "#ed3f35"],
            title: {
                text: '单位: 万',
                textStyle: {
                    color: "#4c9bfd",
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderWidth: 0,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {
                data: ['预期销售额', '实际销售额'],
                textStyle: {
                    color: "#4c9bfd"
                },
                right: "10%"
            },
            grid: {
                left: '0%',
                right: '3%',
                bottom: '3%',
                top: '20%',
                containLabel: true,
                show: true,
                borderColor: "#012f4a"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: "#012f4a"
                    }
                }
            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210],
                    stack: 'Total',
                    smooth: true,
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    data: [220, 182, 191, 234, 290, 330, 310],
                    stack: 'Total',
                    smooth: true,
                }
            ]
        };

        // 初始化渲染年份的数据
        const year = data.year
        option.xAxis.data = year.info
        option.series[0].data = year.detail[0]
        option.series[1].data = year.detail[1]
        myChart.setOption(option)

        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();

(function () {
    $(document).ready(function () {
        const radar = document.querySelector(".radar")
        const myChart = echarts.init(radar)


        const dataBJ = [
            [110, 90, 80, 60, 30]
        ];

        const lineStyle = {
            width: 3
        };
        const option = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: "rgba(0,0,0,0.3)",
                borderWidth: 0,
                textStyle: {
                    color: "#fff"
                }
            },
            legend: {},
            radar: {
                center: ["50%", "50%"],
                radius: "50%",
                indicator: [
                    {name: '淘宝', max: 120, color: '#4c9bfd'},
                    {name: '京东', max: 120, color: '#4c9bfd'},
                    {name: '苏宁', max: 120, color: '#4c9bfd'},
                    {name: '微商', max: 120, color: '#4c9bfd'},
                    {name: '其他', max: 120, color: '#4c9bfd'},
                ],
                shape: 'circle',
                splitNumber: 4,
                axisName: {
                    color: 'rgb(238, 197, 102)'
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(255,255,255,0.6)',
                            'rgba(255,255,255,0.6)',
                            'rgba(255,255,255,0.6)',
                            'rgba(255,255,255,0.6)',
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.6)'
                    }
                }
            },

            series: [
                {
                    name: '上海',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'circle',
                    symbolSize: 8,
                    itemStyle: {
                        color: 'rgb(255,255,255)',
                    },
                    areaStyle: {
                        color: "rgba(238, 197, 102, 0.5)",
                    }
                }

            ]
        };

        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();

(function () {
    $(document).ready(function () {
        const pie = document.querySelector(".quarter .pie")
        const myChart = echarts.init(pie)

        const option = {
            color: [
                {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#00c9e0' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#005fc1' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                "#12274d"
            ],
            graphic: {
                type: 'text',
                left: 'center',
                top: '50%',
                z: 2,
                zlevel: 100,
                style: {
                    text: '50' + '%',
                    fill: '#fff',
                    width: 100,
                    height: 30,
                    fontSize: 20
                }
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    silent: 'ture',
                    radius: ['130%', '150%'],
                    center: ["48%", "80%"],
                    avoidLabelOverlap: false,
                    // label: {
                    //     normal: {
                    //         show: true,
                    //         position: 'center',
                    //         color: '#4c4a4a',
                    //         formatter: '{total|' + 50 + '}' + '{active| %}',
                    //         rich: {
                    //             total: {
                    //                 fontSize: 25,
                    //                 fontFamily: "微软雅黑",
                    //                 color: '#fff'
                    //             },
                    //             active: {
                    //                 fontFamily: "微软雅黑",
                    //                 fontSize: 12,
                    //                 color: '#fff',
                    //                 lineHeight: 30,
                    //             },
                    //         }
                    //     },
                    //     emphasis: {//中间文字显示
                    //         show: true,
                    //     }
                    // },
                    labelLine: {
                        show: false
                    },
                    startAngle: 180,
                    data: [
                        {value: 100},
                        {value: 100},
                        {value: 200, itemStyle: {color: 'transparent'}},
                    ]
                }
            ]
        };

        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();

(function () {
    $(document).ready(function () {
        const data = [
            {
                city: "北京", // 城市
                sales: "35, 279", // 销售额
                flag: true, //  上升还是下降
                brands: [
                    //  品牌种类数据
                    {name: "华为", num: "9,086", flag: true},
                    {name: "小米", num: "8,341", flag: true},
                    {name: "oppo", num: "7,407", flag: false},
                    {name: "vivo", num: "6,080", flag: false},
                    {name: "荣耀", num: "6,724", flag: false},
                    {name: "iphone", num: "2,170", flag: true}
                ]
            },
            {
                city: "河北",
                sales: "23,252",
                flag: false,
                brands: [
                    {name: "华为", num: "3,457", flag: false},
                    {name: "小米", num: "2,124", flag: true},
                    {name: "oppo", num: "8,907", flag: false},
                    {name: "vivo", num: "6,080", flag: true},
                    {name: "荣耀", num: "1,724", flag: false},
                    {name: "iphone", num: "1,170", flag: false}
                ]
            },
            {
                city: "上海",
                sales: "20,760",
                flag: true,
                brands: [
                    {name: "华为", num: "2,345", flag: true},
                    {name: "小米", num: "7,109", flag: true},
                    {name: "oppo", num: "3,701", flag: false},
                    {name: "vivo", num: "6,080", flag: false},
                    {name: "荣耀", num: "2,724", flag: false},
                    {name: "iphone", num: "2,998", flag: true}
                ]
            },
            {
                city: "江苏",
                sales: "23,252",
                flag: false,
                brands: [
                    {name: "华为", num: "2,156", flag: false},
                    {name: "小米", num: "2,456", flag: true},
                    {name: "oppo", num: "9,737", flag: true},
                    {name: "vivo", num: "2,080", flag: true},
                    {name: "荣耀", num: "8,724", flag: true},
                    {name: "iphone", num: "1,770", flag: false}
                ]
            },
            {
                city: "山东",
                sales: "20,760",
                flag: true,
                brands: [
                    {name: "华为", num: "9,567", flag: true},
                    {name: "小米", num: "2,345", flag: false},
                    {name: "oppo", num: "9,037", flag: false},
                    {name: "vivo", num: "1,080", flag: true},
                    {name: "荣耀", num: "4,724", flag: false},
                    {name: "iphone", num: "9,999", flag: true}
                ]
            }
        ]
        let supHtml = ""
        $.each(data, function (i, item) {
            supHtml += `
                <li>
                    <span>${item.city}</span>
                    <span>${item.sales}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
                </li>
            `
        })
        $(".province .sup").html(supHtml)
        $(".province .sup li").eq(0).addClass("active")
        const firstData = data[0].brands

        function renderHtml(params){
            let subHtml = ""
            $.each(params, function (i, item) {
                subHtml += `
                <li>
                  <span>${item.name}</span>
                  <span>${item.num}<s class="${item.flag ? 'icon-up' : 'icon-down'}"></s></span>
                </li>
            `
            })
            $(".province .sub").html(subHtml)
        }
        renderHtml(firstData)

        let _index = 0
        $(".province .sup").on("mouseenter",'li',function () {
            clearInterval(timer)
            _index = $(this).index()
            $(this).addClass("active").siblings().removeClass("active")
            const currentData = data[_index].brands
            renderHtml(currentData)
        })

        $(".province .sup").on("mouseleave",'li',function () {
            autoPlay()
        })

        let timer = null
        function autoPlay(){
           timer = setInterval(()=>{
                _index+=1
                if(_index>=5){
                    _index = 0
                }
                $(".province .sup li").eq(_index).addClass("active").siblings().removeClass("active")
                const currentData = data[_index].brands
                renderHtml(currentData)
            },1000)
        }
        autoPlay()

    })
})();
