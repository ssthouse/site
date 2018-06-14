<!--
index: 1
title: 自定义图项
resource:
  jsFiles:
-->

## 概述
G6 中定义 4 个最基础的图元素，分别是 `node` 、 `edge` 、 `group` 、 `guide` ，这四者总和，我们称之为图项 `Item` ，我们可以通过拓展这四个元素，绘制出任何一种图。

本文档主要向大家介绍如何拓展 G6 的图项，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)

`提示` : 在使用自定义图项之前，应尽量熟练掌握绘图引擎 [G](https://github.com/antvis/g) 的使用。

## 注册

```js
// 注册节点
G6.registerNode(name, {
  // 绘制
  draw: callback,
  // 绘制后执行
  afterDraw: callback,
  // 获取锚点
  anchor: array || callback
}, extendShape);

// 注册边
G6.registerEdge(name, {
  // 绘制
  draw: callback,
  // 绘制后执行
  afterDraw: callback
}, extendShape);

// 注册组
G6.registerGroup(name, {
  // 绘制
  draw: callback,
  // 绘制后执行
  afterDraw: callback
}, extendShape);

// 注册导引信息
G6.registerGuide(name, {
  // 绘制
  draw: callback,
  // 绘制后执行
  afterDraw: callback
}, extendShape);

```

## 绘制
与 G2 自定 Shape 类似，`draw` 是图项最终绘制的接口，`决定了一个图项最终画成什么样`。G6 中拓展图形的最小接口，例如：




![image | center](https://gw.alipayobjects.com/zos/rmsportal/ZoCivRVCgpgMbvbUEDla.png "")


```js
const data = {
  "nodes": [
    {
      "shape": "customNode",
      "id": "node1"
    }
  ],
};

G6.registerNode('customNode', {
  draw(item){
    const group = item.getGraphicGroup();
    group.addShape('text', {
      attrs: {
        x: 100,
        y: 100,
        fill: '#333',
        text: '我是一个自定义节点，\n有下面那个方形和我自己组成'
      }
    });
    return group.addShape('rect', {
      attrs: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        stroke: 'red'
      }
    });
  }
});

const graph = new G6.Graph({
  container: 'mountNode',  // dom 容器 或 容器ID
  width: 500,              // 画布宽
  height: 500,             // 画布高
});
graph.read(data);
```

## 关键形

keyShape 是 G6 特有的概念。简单来说，keyShape 是该图项参与图形计算的关键图形。所有的__击中__、__锚点__、__控制点__都是根据关键图形生成的，所以这个形（shape）真的非常非常关键！！

## 锚点

`锚点是用户设置可用于连接的点` ，是 `节点` 和 `组` 特有的概念本文档仅介绍一种简单的设置锚点的方式：详细介绍见[锚点详解](anchor) 。


<img src="https://cdn.yuque.com/lark/2018/png/223/1522246486323-aee4537b-701c-4ece-adfd-ae167b7bcc76.png" style="width: 235px;"/>

```js
G6.registerNode('customNode', {
  anchor: [
    [0.5, 1],     // 底边中点
    [0.5, 0]      // 上边中点
  ],
}); 
```

## 绘制后

![image | center](https://gw.alipayobjects.com/zos/rmsportal/DUaFgozReaflftPCEBcq.png "")


通过上面的接口我们已经能定义出任何`节点`和`边`，但是很多时候，我们希望基于当前`形`的基础上添加一些信息，而不是用`draw`方法全部重新画。这个时候我们能通过调用 `afterDraw` 方法在原有形基础上添加新的图形。用法如下：

```js
const data = {
  nodes: [{
    id: 'node1',
    x: 100,
    y: 200,
    shape: 'custom'
  }]
};

G6.registerNode('rect', {
  draw(item){
    const group = item.getGraphicGroup();
    return group.addShape('rect', {
      attrs: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        stroke: 'red'
      }
    });
  }
});

G6.registerNode('custom', {
  afterDraw(item){
    const group = item.getGraphicGroup();
    group.addShape('text', {
      attrs: {
        x: 100,
        y: 100,
        fill: '#333',
        text: '我是一个自定义节点，\n继承于 rect'
      }
    });
  }
}, 'rect');

const graph = new G6.Graph({
  container: 'mountNode',  // 容器ID
  width: 500,       // 画布宽
  height: 500,      // 画布高
});
graph.read(data);
```

## 继承

注册图形的第三个参数，用于指定新注册的图形，所继承的图形。

`注意` 只有同类型图项下的图形类才能互相继承。



![image.png | left | 464x407](https://cdn.yuque.com/lark/0/2018/png/223/1527746225192-c63d6fd7-f523-49d7-bc92-1d9a6b06c731.png "")


```javascript
const data = {
  nodes: [{
    id: 'node1',
    x: 50,
    y: 50,
    shape: 'rect'
  }, {
    id: 'node2',
    x: 100,
    y: 200,
    shape: 'custom'
  }]
};

G6.registerNode('rect', {
  draw(item){
    const group = item.getGraphicGroup();
    this.drawText(item);
    return group.addShape('rect', {
      attrs: {
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        stroke: 'red'
      }
    });
  },
  drawText(item) {
    const group = item.getGraphicGroup();
    const text = this.getText();
    group.addShape('text', {
      attrs: {
        x: 100,
        y: 100,
        fill: '#333',
        text
      }
    });
  },
  getText() {
    return '我是一个节点 rect';
  }
});

G6.registerNode('custom', {
  getText(){
    return '我是一个自定义节点，\n继承于 rect';
  }
}, 'rect');

const graph = new G6.Graph({
  container: 'mountNode',  // 容器ID
  width: 500,       // 画布宽
  height: 500,      // 画布高
});
graph.read(data);
```


