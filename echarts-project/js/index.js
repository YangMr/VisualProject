/**
 * @author YangLing
 * @date 2022/7/29 15:14
 */
(function (){
    $(document).ready(function (){
        $(".monitor .content").eq(0).show()
        $(".tabs li").click(function (){
            $(this).addClass('active').siblings("li").removeClass('active');
            const _index = $(this).index()
            $(".monitor .content").eq(_index).show().siblings(".content").hide()
        })


        $(".marquee-view .marquee").each(function (){
            const newMarquee = $(this).children().clone()
            $(this).append(newMarquee)
        })
    })
})();

(function (){
    $(document).ready(function (){
        console.log(document.querySelector(".pie"))
        const myChart = echarts.init(document.querySelector(".pie"))

        const option = {
            color : [
                "#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9",
                "#1d9dff"
            ],
            tooltip : {
                trigger : 'item',
                formatter : '{a} <br/> {b}: {c} ({d}%)',
                backgroundColor : 'rgba(0,0,0,0.4)',
                textStyle : {
                    color : "#fff"
                },
                borderWidth : 0
            },
            legend: {
                show : false
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
                    label : {
                        fontSize : 10
                    },
                    labelLine: {
                        length : 6,
                        length2 : 8
                    },
                    data: [
                        { value: 22, name: '云南', label : {color : '#006cff'}},
                        { value: 28, name: '北京', label : {color : '#60cda0'} },
                        { value: 25, name: '山东', label : {color : '#ed8884'} },
                        { value: 25, name: '河北', label : {color : '#ff9f7f'} },
                        { value: 32, name: '江苏', label : {color : '#ff9f7f'} },
                        { value: 22, name: '浙江', label : {color : '#9fe6b8'} },
                        { value: 31, name: '四川', label : {color : '#32c5e9'} },
                        { value: 42, name: '上海', label : {color : '#1d8dff'} }
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

(function (){
    $(document).ready(function (){
        const myChart = echarts.init(document.querySelector(".bar"))

        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
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
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Direct',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        }

        myChart.setOption(option)

        window.addEventListener("resize", function () {
            myChart.resize()
        })
    })
})();


