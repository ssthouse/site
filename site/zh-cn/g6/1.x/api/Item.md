<!--
 index: 3
 title: Item
 resource:
   jsFiles:
     - ${url.g6}
-->

## 简介

图项，该类是 [Node](./node.html) 、[Edge](./edge.html) 、[Guide](./guide.html) 的抽象类。

## 方法

### getModel
获取数据模型

```js
item.getModel();
```

#### 返回
`model` {object} 数据模型

### getGraphicGroup
获取 G 的图形图组

```js
item.getGraphicGroup();
```

#### 返回
`group` {object} G 的图形图组

### getKeyShape
获取关键形

```js
item.getKeyShape();
```

#### 返回
`keyShape` {object} 关键形

### getBBox
获取图项包围盒

```js
item.getBBox();
```

#### 返回
`bbox` {object} 图项包围盒

### getParent
获取当前图项数据模型里 `parent` 字段对应的图项。

```js
item.getParent();
```

#### 返回
`item` {object} 父节点

### getChildren
获取数据模型里 `parent` 字段是当前图项 `id` 的图项集。

```js
item.getChildren();
```

#### 返回
`children` {array} 子项集