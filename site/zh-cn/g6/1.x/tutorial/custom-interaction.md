<!--
index: 2
title: 自定义交互
resource:
  jsFiles:
-->

## 概述
本文档主要向大家介绍如何在 G6 中拓展交互行为，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)

## 简单交互
如果你做的是一个仅用于展示，或者简单分析的图可视化场景，那么恭喜你，你只需要监听一些简单的__事件__，在配合一些简单的信号量，应该就能满足你的需求，例如：


![Kapture 2018-05-28 at 16.00.05.gif | left | 480x408](https://cdn.yuque.com/lark/0/2018/gif/223/1527494441154-4714e845-5b2d-4fdf-abe5-927e4f9b606a.gif "")

```javascript
const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200
  },{
    id: 'node2',
    x: 300,
    y: 200
  }],
  edges: [{
    id: 'edge1',
    target: 'node2',
    source: 'node1'
  }]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500
});
graph.read(data);
let node;
let dx;
let dy;
graph.on('node:dragstart', ev=>{
  const {item} = ev;
  const model = item.getModel();
  node = item;
  dx = model.x - ev.x;
  dy = model.y - ev.y;
});
graph.on('node:drag', ev=>{
  node && graph.update(node, {
    x: ev.x+dx,
    y: ev.y+dy
  });
});
graph.on('node:dragend', ev=>{
  node = undefined;
});
```

## 复杂交互
如果你是要做一个类似图编辑器的复杂交互的场景，你可能就要考虑如何隔离不同行为下，同一事件的相互影响。对于复杂交互的场景，G6 给出了一套，事件 -> 行为 -> 模式，的解决方案。具体使用方法如下：



![Kapture 2018-05-28 at 16.01.58.gif | left | 480x408](https://cdn.yuque.com/lark/0/2018/gif/223/1527494536849-6ca0c871-ab24-486a-a2c8-653cd8350373.gif "")


```javascript
// 注册鼠标进入节点变红的行为
G6.registerBehaviour('mouseEnterFillRed', graph=>{
  graph.behaviourOn('node:mouseenter', ev=>{
    graph.update(ev.item, {
      color: 'red'
    });
  });
});

// 注册鼠标进入节点变绿的行为
G6.registerBehaviour('mouseEnterFillGreen', graph=>{
  graph.behaviourOn('node:mouseenter', ev=>{
    graph.update(ev.item, {
      color: 'green'
    });
  });
});

// 注册鼠标移出节点变原色的行为
G6.registerBehaviour('mouseLeaveResetFill', graph=>{
  graph.behaviourOn('node:mouseleave', ev=>{
    graph.update(ev.item, {
      color: '#2f54eb'
    });
  });
});
const data = {
  nodes: [{
    id: '事件',
    x: 80,
    y: 150,
  },{
    id: '行为',
    x: 200,
    y: 150
  },{
    id: '模式',
    x: 320,
    y: 150
  }],
  edges: [{
    source: '事件',
    target: '行为',
    label: '组成'
  },{
    source: '行为',
    target: '模式',
    label: '组成'
  }]
};
let mode = 'red';
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500,
  modes: {
    red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
    green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
  },
  mode,
});
graph.node({
  label(model) {
    return model.id;
  }
});
graph.edge({
  style() {
    return {
      endArrow: true
    };
  }
});
graph.read(data);

// 点击按钮切换模式
document.getElementById('changeMode').onclick = () => {
  if(mode === 'red') {
    graph.changeMode('green');
    mode = 'green';
  } else {
    graph.changeMode('red');
    mode = 'red';
  }
};
```

从上面的例子可以看出，我们可以通过 行为和模式 实现了在不引入任何信号量的前提下，将两个 mouseenter 事件的交互进行了隔离。

`特别注意` 行为注册中，我们需要用 `behaviourOn` 而不是直接用 `on` 来绑定事件。
