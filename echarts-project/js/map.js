/**
 * @author YangLing
 * @date 2022/8/1 14:07
 */

(function (){
   $(document).ready(function (){
       const geo = document.querySelector(".geo")
       const myChart = echarts.init(geo)

       let geoCoordMap = {
           '北京': [116.4551, 40.2539],
           '天津': [117.4219, 39.4189],
           '河北': [114.4995, 38.1006],
           '山西': [112.3352, 37.9413],
           '内蒙古': [111.4124, 40.4901],
           '辽宁': [123.1238, 42.1216],
           '吉林': [125.8154, 44.2584],
           '黑龙江': [127.9688, 45.368],
           '上海': [121.4648, 31.2891],
           '江苏': [118.8062, 31.9208],
           '浙江': [119.5313, 29.8773],
           '安徽': [117.29, 32.0581],
           '福建': [119.4543, 25.9222],
           '江西': [116.0046, 28.6633],
           '山东': [117.1582, 36.8701],
           '河南': [113.4668, 34.6234],
           '湖北': [114.3896, 30.6628],
           '湖南': [113.0823, 28.2568],
           '广东': [113.5107, 23.2196],
           '广西': [108.479, 23.1152],
           '海南': [110.3893, 19.8516],
           '重庆': [107.7539, 30.1904],
           '四川': [103.9526, 30.7617],
           '贵州': [106.6992, 26.7682],
           '云南': [102.9199, 25.4663],
           '西藏': [91.1865, 30.1465],
           '陕西': [109.1162, 34.2004],
           '甘肃': [103.5901, 36.3043],
           '青海': [101.4038, 36.8207],
           '宁夏': [106.3586, 38.1775],
           '新疆': [87.9236, 43.5883],
           '新疆兵团': [85.42, 41.82]
       };

       let list = [
           { name: '北京',cons:100,apct:100},
           { name: '天津',cons:30,apct:30},
           { name: '河北',cons:30,apct:30},
           { name: '山西',cons:30,apct:30},
           { name: '内蒙古',cons:30,apct:30},
           { name: '辽宁',cons:30,apct:30},
           { name: '吉林',cons:30,apct:30},
           { name: '黑龙江',cons:30,apct:30},
           { name: '上海',cons:30,apct:30},
           { name: '江苏',cons:30,apct:30},
           { name: '浙江',cons:30,apct:30},
           { name: '安徽',cons:30,apct:30},
           { name: '福建',cons:30,apct:30},
           { name: '江西',cons:30,apct:30},
           { name: '山东',cons:30,apct:30},
           { name: '河南',cons:30,apct:30},
           { name: '湖北',cons:30,apct:30},
           { name: '湖南',cons:30,apct:30},
           { name: '广东',cons:30,apct:30},
           { name: '广西',cons:30,apct:30},
           { name: '海南',cons:30,apct:30},
           { name: '重庆',cons:30,apct:30},
           { name: '四川',cons:30,apct:30},
           { name: '贵州',cons:30,apct:30},
           { name: '云南',cons:30,apct:30},
           { name: '西藏',cons:30,apct:30},
           { name: '陕西',cons:30,apct:30},
           { name: '甘肃',cons:30,apct:30},
           { name: '青海',cons:30,apct:30},
           { name: '宁夏',cons:30,apct:30},
           { name: '新疆',cons:30,apct:30},
           { name: '新疆兵团',cons:30,apct:30}
       ];

       let convertData = function (data) {
           var res = [];
           res = data.map(function (dataItem) {
               var res = {};
               var fromCoord = geoCoordMap[dataItem.name];
               var toCoord = geoCoordMap['北京'];
               var b = fromCoord && toCoord;
               if (fromCoord && toCoord) {
                   return {
                       fromName: dataItem.name,
                       toName: '北京',
                       coords: [fromCoord, toCoord]
                   };
               }
               return res;
           })
           return res;
       };

       var color = ['#5E7AA9', '#1e90ff', '#46bee9'];
       var series = [];
       var key = ['cons','acpt'];
       var keyname = ['建设项目','验收项目'];
       for(var i=0;i<key.length;i++){
           series.push(
               {
                   name: keyname[i],
                   type: 'lines',
                   zlevel: 2,
                   effect: {
                       show: true,
                       period: 6,
                       constantSpeed: 100,
                       trailLength: 0.4,
                       color: '#F9FAFD',
                       symbolSize: 5
                   },
                   lineStyle: {
                       normal: {
                           color: color[i],
                           width: 0,
                           curveness: 0.2
                       }
                   },
                   data: convertData(list)
               },
               {
                   name: keyname[i],
                   type: 'lines',
                   zlevel: 1,
                   effect: {
                       show: true,
                       period: 6,
                       trailLength: 0,
                       symbol: 'image://',
                       symbolSize: 15
                   },
                   label: {
                       emphasis: {
                           show: true,

                       }
                   },
                   lineStyle: {
                       normal: {
                           color: color[i],
                           width: 2,
                           opacity: 0.8,
                           curveness: 0.2
                       },
                       emphasis:{
                           color: color[i],
                           shadowColor: 'rgba(0, 0, 0, 0.5)',
                           shadowBlur: 10,
                           width: 6
                       }
                   },
                   data: convertData(list)
               },
               {
                   name: keyname[i],
                   type: 'effectScatter',
                   coordinateSystem: 'geo',
                   zlevel: 2,
                   rippleEffect: {
                       period: 5,
                       scale: 8,
                       brushType: 'stroke'
                   },
                   symbolSize: function (val) {
                       if([val[0],val[1]].toString()==geoCoordMap['北京'].toString()){
                           return 13;
                       }
                       return 5;
                   },
                   itemStyle: {
                       normal: {
                           color: color[i]
                       }
                   },
                   data: list.map(function (dataItem) {
                       return {
                           name: dataItem.name,
                           value: geoCoordMap[dataItem.name].concat([dataItem[key[i]]])
                       };
                   })
               },
               {
                   name: keyname[i],
                   type: 'map',
                   mapType: 'china',
                   zlevel: 0,
                   roam: false,
                   zoom: 1.2,
                   selectedMode : 'single',
                   label: {
                       normal: {
                           show: false
                       },
                       emphasis: {
                           show: false
                       }
                   },
                   itemStyle: {
                       normal: {
                           areaColor: '#F0F2F5',
                           borderColor: 'red'
                       },
                       emphasis: {
                           areaColor: '#F79092'
                       }
                   },
                   data:list.map(function (dataItem) {
                       return {
                           name: dataItem.name,
                           value: dataItem[key[i]]
                       };
                   })
               }
           );
       }

       console.log(series);
       option = {
           title : {
               text: '模拟迁徙',
               subtext: '数据纯属虚构',
               left: 'center',
               textStyle : {
                   color: '#fff'
               }
           },
           tooltip : {
               trigger: 'item',
               formatter: function(params){
                   var res = params.seriesName+'<br/>';
                   if(params.seriesType=='lines'){
                       res += params.data.fromName+' > '+params.data.toName;
                       var myseries = option.series;
                       for (var i = 0; i < myseries.length; i++) {
                           if(myseries[i].name==params.seriesName &&
                               myseries[i].type=='effectScatter'){
                               for (var j = 0; j < myseries[i].data.length; j++) {
                                   if(myseries[i].data[j].name==params.data.fromName){
                                       res += '：'+myseries[i].data[j].value[2]+'个';
                                   }
                               }
                           }
                       }
                   }else if(params.seriesType=='effectScatter'){
                       res += params.data.name+'：'+params.data.value[2]+'个';
                   }else if(params.seriesType=='map'){
                       res += params.data.name+'：'+params.data.value+'个';
                   }
                   //console.log(params);
                   return res;
               },
           },
           legend: {
               orient: 'vertical',
               top: 'bottom',
               left: 'right',
               data:['建设项目','验收项目'],
               textStyle: {
                   color: '#fff'
               },
               selectedMode: 'single'
           },
           geo: {
               map: 'china',
               label: {
                   emphasis: {
                       show: false
                   }
               },
               roam: false,
               zoom:1.2,
               itemStyle: {
                   normal: {
                       areaColor: '#F0F2F5',
                       borderColor: 'red'
                   },
                   emphasis: {
                       areaColor: '#F79092'
                   }
               }
           },
           series: series
       };



       myChart.on('mapselectchanged', function (params) {
           var provinceName = "";
           var selectedMap = params.selected;
           for (var key in selectedMap) {
               if(selectedMap[key]){
                   provinceName = key;
               }
           }
           console.log('选择的省份是：'+provinceName);
           console.log(params);
       });

       var a=0
       setInterval(function (){
           var i = a % 2;
           var aa = ['建设项目','验收项目']
           myChart.dispatchAction({type: 'legendSelect',name: aa[i]});
           a++;
       }, 2100);


       myChart.setOption(option)


       window.addEventListener("resize",function(){
           myChart.resize()
       })
   })
})()
