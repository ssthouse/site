<!--
index: 6
title: 概念澄清
resource:
  jsFiles:
-->

## 概述

本文档主要向大家澄清 G6 的中有一部分容易混淆的概念，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)

## 区分 shape 

`shape` 在英文释义中是形状的意思。由于一些历史原因，在 G6 得使用过程过可能会有两个 shape ，现做以下澄清：

1. **G 的 Shape**。是底层图形 G 的 shape ，是构成图形元素的最小单位。
2. **G6 的 Shape**。沿用了可视化理论中，形状视觉通道的概念，用于区分图项绘制的图形对象。

简单举例：

```js
G6.registerNode('rect', {
  getPath(item) {
    const model = item.getModel();
    // G 的 Group，
    const group = item.getGraphicGroup();
    // G 的 Shape，绘制了一个填充为红色的矩形
    const shape = group.addShape('rect', {
      attrs: {
        x: -10,
        y: -10,
        width: 20,
        height: 20,
        fill: 'red'
      }
    });
    return shape;
  }
});

const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200,
    shape: 'rect' // G6 的 shape
  }]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500
});
graph.read(data);
```

## 区分 group 

`group` 在英文释义中是群组的意思。由于一些历史原因，在 G6 得使用过程过可能会有两个 group ，现做以下澄清：

1. **G 的 Group**。是底层图形 G 的 group ，是构成图形元素的容器。
2. **G6 的 Group**。能容纳图项的特殊图项。

简单举例：

```js
G6.registerNode('rect', {
  getPath(item) {
    const model = item.getModel();
    const group = item.getGraphicGroup();
    // G 的 Shape，绘制了一个填充为红色的矩形
    const shape = group.addShape('rect', {
      attrs: {
        x: -10,
        y: -10,
        width: 20,
        height: 20,
        fill: 'red'
      }
    });
    return shape;
  }
});

const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200,
    shape: 'rect' // G6 的 shape
  }],
  groups: [
    {
      id: 'group1',
    }
  ]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500
});
graph.read(data);
```