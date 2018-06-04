<!--
 index: 0
 title: G6
 resource:
   jsFiles:
     - ${url.g6}
-->

## 常量

### version 

```js
G6.version // 返回当前 G6 的版本号
```

当前版本号

## 构造类

### Graph

渲染网状关系图，详细文档见 [Graph API](./graph.html) ，获取：

```js
G6.Graph;
```

### Tree

渲染树状关系图，详细文档见 [Tree API](./tree.html) ，获取：

```js
G6.Tree;
```

## 静态方法

### registerNode

```js
G6.registerNode(name, arguments, extend);
```

注册新节点。详见教程 [自定义图形](../tutorial/custom-shape.html) 。

#### 参数

* `name`                  {string}   新节点名称
* `arguments`         {object}  新节点属性方法
* `extend`              {string}   继承节点名称

### registerEdge

```js
G6.registerEdge(name, arguments, extend)
```

注册新边。详见教程 [自定义图形](../tutorial/custom-shape.html) 。

#### 参数

* `name`                  {string}   新导引名称
* `arguments`         {object}  新导引属性方法
* `extend`              {string}   继承导引名称

### registerGroup

```js
G6.registerGroup(name, arguments, extend);
```

注册新群组。详见教程 [自定义图形](../tutorial/custom-shape.html) 。

#### 参数

* `name`                  {string}   新群组名称
* `arguments`         {object}  新群组属性方法
* `extend`              {string}   继承群组名称

### registerGuide

```js
G6.registerGuide(name, arguments, extend)
```

注册新的导引信息。详见教程 [自定义图形](../tutorial/custom-shape.html) 。

#### 参数

* `name`                  {string}   新边名称
* `arguments`         {object}  新边属性方法
* `extend`              {string}   继承导引名称

### registerBehaviour

```js
G6.registerBehaviour(name, callback);
```

注册新的行为。详见教程 [自定义交互](../tutorial/custom-interaction.html) 。

#### 参数

* `name`                 {string}   新行为
* `callback`         {function}  回调函数

