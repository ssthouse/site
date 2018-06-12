<!--
index: 4
title: 插件详解
resource:
  jsFiles:
-->

## 概述

本文档主要向大家介绍如何在 G6 中拓展交互行为，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)

## 分类
<img src="https://cdn.yuque.com/lark/0/2018/png/223/1527757827295-749ca2bb-8306-4470-8248-94915e699522.png" style="width: 500px" />

G6 的插件其实非常自由，在代码层面上没有做任何的约束，但为了让开发插件有据可依，提高插件使用者检索信息的效率。还是给出了一套官方的插件分类规范。*用户开发自己的插件时候可以遵循，也可以不遵循*。__但如果要提 PR 将插件合到 G6 的开源仓库，成为官方推荐的插件，则必须遵循上述规范。__

## 如何使用
这里只介绍如何使用官方提供的插件。

#### 安装

既可以通过将脚本下载到本地也可以直接引入在线资源；


```html
<!-- 插件依赖 G6  -->
<script src="{{ url.g6 }}"></script>
<!-- 引入在线资源 -->
<script src="{{ url.g6Plugins }}"></script>
```

```html
<!-- 引入本地脚本 -->
<script src="./g6.js"></script>
<script src="./g6Plugins.js"></script>
```

官方的插件目前维护在 G6 的主仓库里，如果要使用官方提供的插件，只需要安装 `@antv/g6` 即可。

```bash
npm install @antv/g6 --save
```

可以按需要引入

```js
const G6 = require('@antv/g6');
const Minimap = require('@antv/g6/build/toolMinimap');
```

也可以全部引入

```js
const G6 = require('@antv/g6');
const G6Plugins = require('@antv/g6/build/g6Plugins');
```

#### 全局型
非常简单，直接引入就行，例如：

![image.png | left | 334x245](https://cdn.yuque.com/lark/0/2018/png/223/1527858535128-38c2e2ae-420e-4219-9aff-4b8f0a998abf.png "")

> 顾名思义，全局型的插件只需要引入一次，全局通用。

```javascript
require('../plugins/edge.quadraticCurve/');
const G6 = require('../src/index');
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
    target: 'node2',
    source: 'node1',
    shape: 'quadraticCurve'
  },{
    target: 'node1',
    source: 'node2',
    shape: 'quadraticCurve'
  }]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500
});
graph.edge({
  style: {
    endArrow: true
  }
});
graph.read(data);
```

#### 实例型
实例型的插件必须是一个构造类，使用时要从该插件中构造出插件实例，然后传入图类进行使用，例如：


![image.png | left | 569x443](https://cdn.yuque.com/lark/0/2018/png/223/1527859212363-79d8fca4-9fb0-4c1e-98a8-82abc01035d0.png "")

> 实例型的插件意味着这个插件会和一个 graph 实例挂钩。插件自身的生命周期应跟随着 graph 的生命周期保持一致。

```javascript
const Plugin = require('../plugins/tool.minimap/');
const plugin = new Plugin({
  container: 'minimap',
  width: 180,
  height: 120
});
const data = {
  nodes: [{
    id: 'node0',
    x: -100,
    y: 200
  }, {
    id: 'node1',
    x: 100,
    y: 200
  }, {
    id: 'node2',
    x: 300,
    y: 200
  }, {
    id: 'node3',
    x: 600,
    y: 200
  }],
  edges: [{
    target: 'node0',
    source: 'node1'
  }, {
    target: 'node2',
    source: 'node1'
  }, {
    target: 'node2',
    source: 'node3'
  }]
};
const graph = new G6.Graph({
  container: 'mountNode',
  width: 500,
  height: 500,
  plugins: [plugin]
});
graph.read(data);
```

## 如何拓展

#### 全局型

全局型一般会直接调用，G6 抛出的静态注册接口，如下：

| 名称 | 接口 |
| --- | --- |
| 注册节点 | registerNode |
| 注册边 | registerEdge |
| 注册组 | registerGroup |
| 注册导引 | registerGuide |
| 注册行为 | registerBehaviour |

或者直接在 G6 的全局对象上注册：

```javascript
G6.Util.custom = ()=>{};
```

#### 实例型
G6 对实例型插件的约定非常松散，只会在初始化图类时调用一下 init(), 销毁时调用一下 destroy()，用户在写插件构造类时，只需要复写这两个方法就可以完成。

```javascript
class Plugin() {
  // 初始化图类时调用
  init() {
    this.graph; // 图类
  }
  // 销毁图类时调用
  destroy() {
  }
}
G6.Plugins[name] = Plugin; // 将插件注册到 G6.Plugins
```

另外，如果是布局型插件，应该将布局对象单独抽离。并在插件中，将布局对象构造类注册到 `G6.Layouts`。例如：

```js
/**
 * @fileOverview 圆图布局
 * @author huangtonger@aliyun.com
 */

const G6 = require('@antv/g6');
const Layout = require('./layout');

G6.Layouts.Circle = Layout;

class Plugin {
  constructor(options) {
    this.options = options;
  }
  init() {
    const graph = this.graph;
    graph.on('beforeinit', () => {
      const layout = new Layout({
        graph,
        ...this.options
      });
      graph.set('layout', layout);
    });
  }
}

G6.Plugins['layout.circle'] = Plugin;

module.exports = Plugin;
```

[官方插件目录](https://github.com/antvis/g6/tree/master/plugins)
