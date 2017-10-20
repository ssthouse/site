<!--
index: 12
title: Tooltip 提示信息
resource:
  jsFiles:
    - ${url.dataSet}
    - ${url.g2}
-->

# Tooltip 提示信息

提示信息(tooltip)，是指当鼠标悬停在图表上的某点时，以提示框的形式展示该点的数据，比如该点的值，数据单位等。tooltip 内显示的信息完全可以通过格式化函数动态指定；通过调用 `chart.tooltip(false)` 即可不启用提示信息功能。

<img src="https://gw.alipayobjects.com/zos/rmsportal/VLNhkKRALafPtDCIZFqA.png" width="415px">

## tooltip 配置语法

在 G2 中提供了两种配置 tooltip 的方法，一种是设置在 chart 对象上的全局配置，另一种是设置在每个几何标记对象上的 tooltip 配置，具体如下：

（1） chart 对象上的全局配置

```js
chart.tooltip(true, cfg); // 开启 tooltip，并设置 tooltip 配置信息
chart.tooltip(cfg); // 省略 true, 直接设置 tooltip 配置信息
chart.tooltip(false); // 关闭 tooltip
```

常用的 tooltip 配置信息如下，注意，G2 的 tooltip 是使用 html 进行渲染的。

```js
chart.tooltip({
  showTitle: {Boolean}, // 是否展示 title，默认为 true
  crosshairs: {
    type: 'rect' || 'x' || 'y' || 'cross',
    style: {
      // 图形样式
    }
  }, // tooltip 辅助线配置
  offset: 10, // tooltip 距离鼠标的偏移量
  containerTpl: '<div class="g2-tooltip">'
    + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
    + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
  itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>', // tooltip 每项记录的默认模板
  inPlot: true, // 将 tooltip 展示在指定区域内
  follow: true， // tooltip 是否跟随鼠标移动
  shared: true || false, // 默认为 true, false 表示只展示单条 tooltip
  position: 'left' || 'right' || 'top' || 'bottom' // 固定位置展示 tooltip
});
```

![image](https://zos.alipayobjects.com/skylark/750725d4-2e58-4420-b886-4abe1c0335c2/attach/2378/ad8fe2daa557ad62/image.png)

更详细的配置请查看 [tooltip api TODO]()。

（2）geom 对象上的 tooltip 配置

1. 可以在 geom 几何标记上配置 tooltip 的显示内容，如下语法所示：

```js
chart.<geom>.tooltip('field1*field2...*fieldN');
```

这个时候 tooltip 的显示内容如下：

![image](https://zos.alipayobjects.com/skylark/a92d121a-5879-42ad-b12c-1b4cc3c79f69/attach/2378/b8013e9dd10fd634/image.png)

2. 除了调用 `chart.tooltip(false)` 关闭 tooltip 外，还可以在 geom 上关闭 tooltip。配置方法如下：

```js
chart.point().tooltip(false);
``` 

## 配置 tooltip

tooltip 的目的是为了展示数据点相关的数据，具体展示的内容完全可以通过多种灵活的方式来实现。

### 指定 tooltip 的显示信息

如果 G2 默认生成的 tooltip 展示内容不满足需求，用户可以通过调用几何标记的 tooltip 方法手动指定要显示的 tooltip 内容。

<div id="c0" class="chart-container"></div>

```js+
var data = [
  {"month":0,"tem":7,"city":"tokyo"},
  {"month":1,"tem":6.9,"city":"tokyo"},
  {"month":2,"tem":9.5,"city":"tokyo"},
  {"month":3,"tem":14.5,"city":"tokyo"},
  {"month":4,"tem":18.2,"city":"tokyo"},
  {"month":5,"tem":21.5,"city":"tokyo"},
  {"month":6,"tem":25.2,"city":"tokyo"},
  {"month":7,"tem":26.5,"city":"tokyo"},
  {"month":8,"tem":23.3,"city":"tokyo"},
  {"month":9,"tem":18.3,"city":"tokyo"},
  {"month":10,"tem":13.9,"city":"tokyo"},
  {"month":11,"tem":9.6,"city":"tokyo"}
];

var chart = new G2.Chart({
  container: 'c0',
  width: 800,
  height: 300
});

var defs = {
  'month':{
    type: 'cat',
    alias: '月份', // 别名，如果没有别名显示成字段名 month
    values: [
      '一月','二月','三月','四月','五月','六月',
      '七月','八月','九月','十月','十一月','十二月']
  },
  'tem': {
    alias: '温度'
  }
};

chart.source(data,defs);

chart.tooltip(true, {
  showTitle: false // 默认标题不显示
});
chart.line().position('month*tem').tooltip('month*tem');
chart.render();
```

### 格式化 tooltip 的显示内容

当需要格式化 tooltip 的显示内容时，有两种方式：

1. 大部分场景下，可以使用 `geom.tooltip('x*y*z', callback)` 同 `chart.tooltip({ itemTpl: 'xxx'})` 的方式。
2. 对于复杂的场景，可以监听 chart 对象上的 `tooltip:change` 事件。这个事件会返回如下参数：

```js
{
  x: 当前鼠标的 x 坐标,
  y: 当前鼠标的 y 坐标,
  tooltip: 当前的 tooltip 对象
  items: 数组对象，当前 tooltip 显示的每条内容
}
```

通过修改 items 的内容就可以修改 tooltip 的展示内容了。

#### 使用 geom.tooltip() 回调

这种方式通常需要同 chart.tooltip() 结合使用。

```js
//自定义模板，自定义tooltip展示
chart.tooltip({
  itemTpl: '<li>{x}: {y}</li>'
});
chart.line().position('x*y').tooltip('x*y', (x, y) => {
  return {
    x, 
    y
  }; // 返回的参数名对应 itemTpl 中的变量名
);
```

<div id="c1"></div>

```js+
var data = [
  { name: 'Microsoft Internet Explorer', value: 30 },
  { name: 'Chrome', value: 20 },
  { name: 'Firefox', value: 10 },
  { name: 'Safari', value: 10 },
  { name: 'Opera', value: 15 },
  { name: 'Others', value: 15 }
];
var chart = new G2.Chart({
  container: 'c1',
  forceFit: true,
  height: 400
});
chart.source(data);
chart.coord('theta', { innerRadius: 0.6, radius: 0.8 });
chart.tooltip({
  showTitle: false,
  itemTpl: '<li>{name}: {value}</li>'
});
chart.intervalStack()
  .position('value')
  .color('name')
  .tooltip('name*value', function(name, value) {
    return {
      name: name,
      value: value + '%'
    };
  });
chart.render();
```

#### 监听 tooltip:change 事件

<div id="c2"></div>

```js+
var data = [ // 数据
  {"time": 1428163200000,"start": 469,"end": 480},
  {"time": 1428163203600,"start": 480,"end": 430},
  {"time": 1428163207200,"start": 430,"end": 410},
  {"time": 1428163210800,"start": 410,"end": 420},
  {"time": 1428163214400,"start": 420,"end": 440},
  {"time": 1428163218000,"start": 440,"end": 460},
  {"time": 1428163221600,"start": 460,"end": 410},
  {"time": 1428163225200,"start": 410,"end": 440},
  {"time": 1428163228800,"start": 440,"end": 490}
];

var DataView = DataSet.DataView;
var dv = new DataView();
dv.source(data).transform({
  type: 'map', 
  callback: function(obj) {
    obj.range = [ obj.start, obj.end ];
    obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
    return obj;
  }
});

var chart = new G2.Chart({
  container: 'c2',
  width: 800,
  height: 400,
  padding: [ 20, 50, 95, 80 ]
});
chart.source(dv, {
  'time': { // 设置日期类型
    type: 'time',
    mask: 'YYYY-MM-DD HH:MM:ss'
  },
  'trend': { 
    alias: '趋势'
  }
});
chart.interval()
  .position('time*range')
  .color('trend', [ '#1bbd19', '#fa513a' ])
  .size(20);
chart.render();
chart.on('tooltip:change', function(ev) {
  var items = ev.items; // tooltip显示的项
  var origin = items[0]; // 将一条数据改成多条数据
  var range = origin.point._origin.range;
  items.splice(0); // 清空
  items.push({
    name: '开始值',
    title: origin.title,
    marker: true,
    color: origin.color,
    value: range[0]
  });
  items.push({
    name: '结束值',
    marker: true,
    title: origin.title,
    color: origin.color,
    value: range[1]
  });
});
````

### 自定义 html 模板

G2 也支持使用自定义的 html 展示 tooltip。配置方法如下：

```js
chart.tooltip(true, {
  containerTpl: '<div class="g2-tooltip">'
    + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
    + '<ul class="g2-tooltip-list"></ul></div>',
  itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>'
});
```

> `containerTpl` tooltip 容器模板 ，注意一定要包含以下 class:

```html
<div class="g2-tooltip">
  <!-- tooltip 标题 -->
  <div class="g2-tooltip-title" style="margin:10px 0;"></div>
  <!-- tooltip 内容列表容器 -->
  <ul class="g2-tooltip-list"></ul>
</div>
```

> `itemTpl` tooltip 每项记录的默认模板:

```html
<li data-index={index}>
  <!-- 每项记录的 marker -->
  <span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>
  {name}: {value}
</li>
```

## 其他配置

### 显示辅助线（辅助框）

默认线图和区域图会显示辅助线、柱状图会显示辅助框，当用户需要显示辅助线（框）时，可以通过配置 `crosshairs` 属性设置，crosshairs 支持四种展示形式：

```js
crosshairs: {
  type: 'rect' || 'x' || 'y' || 'cross',
  style: {
    // 图形样式
  }
}, // tooltip 辅助线配置
```

> crosshairs.type 说明：


- rect: 矩形框
- x: 水平辅助线
- y: 垂直辅助线
- cross: 十字辅助线

‘line’, ‘area’, ‘path’, ‘areaStack’ 默认会展示垂直辅助线；‘interval’ 默认会展示矩形背景框。


### 固定位置显示提示信息

通过调用 `chart.showTooltip(point)` 可以控制在固定的位置显示提示信息，参数 `point` 为画布上的坐标点，格式如下：

```js
var point = {
  x: 23,
  y: 30
};
```

另外还提供了 `chart.getXY({xField: value, yField: value})` 方法，用于获取数据对应在画布空间的坐标。

<div id="c3"></div>

```js+
var data = [
  {'time': '2016-10-25 00:00:00', 'runCount': 4, 'type': 2, 'runTime': 2},
  {'time': '2016-10-25 00:30:00', 'runCount': 2, 'type': 6, 'runTime': 3},
  {'time': '2016-10-25 01:00:00', 'runCount': 13, 'type': 2, 'runTime': 5},
  {'time': '2016-10-25 01:30:00', 'runCount': 9, 'type': 9, 'runTime': 1},
  {'time': '2016-10-25 02:00:00', 'runCount': 5, 'type': 2, 'runTime': 3},
  {'time': '2016-10-25 02:30:00', 'runCount': 8, 'type': 2, 'runTime': 1},
  {'time': '2016-10-25 03:00:00', 'runCount': 13, 'type': 1, 'runTime': 2},
  {'time': '2016-10-25 03:30:00', 'runCount': 4, 'type': 2, 'runTime': 2},
  {'time': '2016-10-25 04:00:00', 'runCount': 2, 'type': 6, 'runTime': 3},
  {'time': '2016-10-25 04:30:00', 'runCount': 13, 'type': 2, 'runTime': 5},
  {'time': '2016-10-25 05:00:00', 'runCount': 9, 'type': 9, 'runTime': 1},
  {'time': '2016-10-25 05:30:00', 'runCount': 5, 'type': 2, 'runTime': 3}
];
var chart = new G2.Chart({
  container: 'c3',
  forceFit: true,
  height: 300,
  padding: [ 50, 80 ]
});
chart.source(data);
chart.scale('time',{
  type: 'timeCat',
  mask: 'HH:MM',
  tickCount:12,
  nice:true,
});
chart.scale('runCount', {
  alias: '运行数量', // 设置属性的别名
  min: 0
});
chart.scale('runTime', {
  alias: '运行时间(ms)' // 设置属性的别名
});
chart.tooltip(false); // 关闭 tooltip
chart.legend(false); // 不显示图例
chart.line()
  .position('time*runTime')
  .color('#5ed470')
  .size(2)
  .shape('smooth'); // 绘制曲线图
chart.point()
  .position('time*runTime')
  .color('#5ed470')
  .size(5)
  .shape('circle')
  .style({
    cursor: 'pointer'
  }); // 绘制点图
chart.render();

// 初始化到最新一个点
var lastPoint  = chart.get('plotRange').br;
chart.showTooltip(lastPoint);

// 鼠标点击事件
chart.on('plotclick',function(ev){
  var point = {
    x: ev.x,
    y: ev.y
  };
  chart.showTooltip(point); // 接收的是画布坐标上的点
});
```