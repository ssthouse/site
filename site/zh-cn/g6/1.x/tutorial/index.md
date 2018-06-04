<!--
index: 0
title: 快速上手
resource:
  jsFiles:
    - ${url.g6}
-->

# 快速上手

## G6

G6 是关系数据可视化引擎，开发者可以基于 G6 拓展出属于自己的图分析应用或者图编辑器应用。

## 特性

- 简单、易用、完备的图可视化引擎。
- 丰富、优雅、易于复用的解决方案
- 高可订制，满足你无限的创意

## 安装

### 浏览器引入

既可以通过将脚本下载到本地也可以直接引入在线资源；


```html
<!-- 引入在线资源 -->
<script src="{{ url.g6 }}"></script>
```

```html
<!-- 引入本地脚本 -->
<script src="./g6.js"></script>
```

### 通过 npm 安装

<a href="https://www.npmjs.com/package/@antv/g6" target="_blank"><img src="https://img.shields.io/npm/v/@antv/g6.svg?style=flat-square"></a>

我们提供了 G6 npm 包，通过下面的命令即可完成安装

```bash
npm install @antv/g6 --save
```
成功安装完成之后，即可使用 `import` 或 `require` 进行引用。

```js
import G6 from '@antv/g6';

const graph = new G6.Graph({
  container: 'mountNode',
  width: 600,
  height: 300
});
```

## 开始使用

在 G6 引入页面后，我们就已经做好了创建第一个图的准备了。

下面是以一个简单关系图为例开始我们的第一个图创建。

### 浏览器引入方式

#### 1. 创建 `div` 图表容器

在页面的 `body` 部分创建一个 div，并制定必须的属性 `id`：

```html
<div id="mountNode"></div>
```

#### 2. 编写图绘制代码

这部分代码用 `<script></script>`，可以放在页面代码的任意位置（最好的做法是放在 `</body>` 之前）。

```js
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
```

完成上述两步之后，保存文件并用浏览器打开，一张简单关系图就绘制成功了：

<div id="mountNode"></div>

```js-
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
```

完整的代码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>柱状图</title>
    <!-- 引入 G6 文件 -->
    <script src="{{ url.g6 }}"></script>
  </head>
  <body>
    <!-- 创建图容器 -->
    <div id="mountNode"></div>
    <script>
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
    </script>
  </body>
</html>
```

## 体验改进计划说明

为了更好服务用户，G6 会将 URL 和版本信息发送回 AntV 服务器：

```html
https://kcart.alipay.com/web/bi.do
```

除了 URL 与 G6 版本信息外，不会收集任何其他信息，一切为了能对 G6 的运行情况有更多了解，以更好服务于用户。如有担心，可以通过下面的代码关闭：

```js
// 关闭 G6 的体验改进计划打点请求
G6.track(false)
```
