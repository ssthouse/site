<!--
index: 15
title: Theme 图表皮肤主题
resource:
  jsFiles:
    - ${url.dataSet}
    - ${url.g2}
-->

# 图表皮肤

在图表样式上，G2 提供了丰富的自定义配置选项，即可从全局设置，也支持局部设置数据层级的设置。

## 图表主题

G2 默认提供了两种图表主题： default、dark。

<img src="https://gw.alipayobjects.com/zos/rmsportal/EQadCjVFfaXjuPbSySJp.png" width="80%">

## 图表样式设置

### 图表主题切换

直接传入主题名

```js
var Global = G2.Global; // 获取 Global 全局对象
Global.setTheme('dark'); // 传入值为 'default'、'dark'、'cheery'的一种，如果不是，那么使用 default 主题。
```

### 局部样式设置

G2 图表样式的配置项都是设置到全局变量 `G2.Global` 上，可以通过如下两种方式进行局部的样式设置：

（1）方式一： 直接赋值给全局对象 Global，但是不推荐

```js
G2.Global.animate = false ; // 关闭默认动画
G2.Global.colors['default'] = ['red','blue','yellow']; // 更改默认的颜色
```

(2) 方式二： 使用 Global.setTheme 方法。推荐使用这种方式，使用方法如下：

```js
var theme = G2.Util.defaultsDeep({
  animate: false,
  colors: {...},
  shapes: {...}
  // 具体的配置项详见 api/global.html
}, G2.Theme);

G2.Global.setTheme(theme); // 将主题设置为用户自定义的主题
```

对于数据级别或者更细粒度的样式设置，可以通过 geom 对象上的 color 图形属性方法或者各个 chart 配置项上的图形属性设置。

更多 Global 上关于主题的配置属性，请查看 [Global TODO]() API。

#### demo 演示

<div id="c1"></div>
<div id="c2"></div>

```js+
var Util = G2.Util;
var theme = Util.defaultsDeep({
  shape: {
    polygon: {
      stroke: '#213c51', // 地图轮廓线颜色
      lineWidth: 1 // 地图轮廓线宽度
    },
    hollowPoint: {
      fill: '#21273b', // 点的填充颜色
      lineWidth: 2, // 点的边框宽度
      radius: 3 // 点的半径
    },
    interval: {
      fillOpacity: 1 // 填充透明度设置
    }
  },
  axis: {
    bottom: {
      label: {
        textStyle: { fill: '#999'} // 底部标签文本的颜色
      }
    },
    left: {
      label: {
        textStyle: { fill: '#999'} // 左部标签文本的颜色
      }
    },
    right: {
      label: {
        textStyle: { fill: '#999'} // 右部标签文本的颜色
      }
    }
  }
}, G2.Theme.default);
G2.Global.setTheme(theme);

$.getJSON('/assets/data/china-geo.json', function(mapData) {
  var userData = [];
  var features = mapData.features;
  for(var i=0; i<features.length; i++) {
    var name = features[i].properties.name;
    userData.push({
      "name": name,
      "value": Math.round(Math.random()*1000)
    });
  }

  // 绘制地图背景
  var ds = new DataSet();
  var bgDataView = ds.createView('back')
    .source(mapData, {
      type: 'GeoJSON'
    });
  var userPolygonDv = ds.createView()
    .source(userData)
    .transform({
      geoDataView: bgDataView,
      field: 'name',
      type: 'geo.region',
      as: [ 'longitude', 'latitude' ]
  });
  var chart = new G2.Chart({
    container: 'c1',
    width: 600,
    height: 320,
    padding: [20, 80, 0, 80]
  });
  chart.source(userPolygonDv);
  chart.tooltip({
    showTitle: false
  });
  chart.axis(false);
  chart.legend(false);
  chart.polygon().position('longitude*latitude').color('value','#39ccf4-#20546b').style({
    lineWidth: 1,
    stroke: '#999'
  });
  chart.render();

  var data = [
    {'time': '10:10', 'call': 4, 'waiting': 2, 'people': 2},
    {'time': '10:15', 'call': 2, 'waiting': 6, 'people': 3},
    {'time': '10:20', 'call': 13, 'waiting': 2, 'people': 5},
    {'time': '10:25', 'call': 9, 'waiting': 9, 'people': 1},
    {'time': '10:30', 'call': 5, 'waiting': 2, 'people': 3},
    {'time': '10:35', 'call': 8, 'waiting': 2, 'people': 1},
    {'time': '10:40', 'call': 13, 'waiting': 1, 'people': 2}
  ];
  var dv = new DataSet.DataView();
  dv.source(data).transform({
    type: 'fold',
    fields: ['call','waiting'],
    key: 'type',
    value: 'count',
    retains: ['time', 'people']
  });
  var chart2 = new G2.Chart({
    container: 'c2',
    width: 600,
    height: 250
  });
  chart2.source(dv, {
    'count': {alias: '话务量（通）', min: 0},
    'people': {alias: '人数（人）', min: 0}
  });
  chart2.legend(false);// 不显示图例
  chart2.intervalStack().position('time*count').color('type', ['#348cd1', '#43b5d8']); // 绘制层叠柱状图
  chart2.line().position('time*people').color('#5ed470').size(4).shape('smooth'); // 绘制曲线图
  chart2.point().position('time*people').color('#5ed470').tooltip(false); // 绘制点图
  chart2.render();
});
```
