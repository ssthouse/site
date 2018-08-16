<!--
index: 1199
title: G2 迭代计划
resource:
  jsFiles:
    - ${url.dataSet}
    - ${url.g2}
-->

# G2 迭代计划

<div id="plan"></div>

```js-
  const data = [
    { date: '2018-08-20', y: 2, type: 'site', title: '官网改进验收' },
    { date: '2018-09-10', y: 4, type: 'g2', title: '组件改造设计验收' },
    { date: '2018-09-19', y: 6, type: 'g2',  title: 'G2 3.3 组件与统计语法发布' },
    { date: '2018-10-31', y: 2, type: 'site', title: '官网国际化验收' },
    { date: '2018-11-15', y: 4, type: 'site', title: '官网改进验收' },
    { date: '2018-11-22', y: 6, type: 'g2', title: 'G2 3.4 双引擎与交互语法发布' },
    { date: '2019-01-06', y: 2, type: 'g2', title: 'G2 3.5 图表状态量与地图发布' },
  ];
  const chart = new G2.Chart({
    container: 'plan',
    forceFit: true,
    height: 280,
    padding: [0, 180, 100, 50]
  });
  chart.source(data, {
    date: {
      type: 'time',
      ticks: data.map(d => d.date),
      mask: 'MM-DD',
      nice: false,
    },
    y: {
      min: 0,
      max: 8
    }
  });
  chart.legend(false);
  chart.axis('y', false);
  chart.axis('date', {
    label: {
      offset: 20,
      textStyle: {
        rotate: 30
      }
    }
  });
  chart.point().position('date*y').label('title', {
    offset: 15,
    textStyle: {
      fontSize: 16,
      textAlign: 'start',
    }
  });
  data.forEach(row => {
    chart.guide().line({
      start: [ row.date, row.y ],
      end: [ row.date, 'min' ],
        lineStyle: {
        stroke: '#999',
        lineDash: [ 0, 2, 2 ],
        lineWidth: 1
      }, // 图形样式配置
    });
  });
  chart.render();
```
