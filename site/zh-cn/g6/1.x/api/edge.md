<!--
 index: 5
 title: Edge
 resource:
   jsFiles:
     - ${url.g6}
-->

## 简介

该类是边类，继承于图项 Item，享有 Item 上的所有接口，本文档只介绍差异的接口，其它接口请参考[ Item API 文档](https://lark.alipay.com/antv/g6-2.0-doc/item)。

## 方法

### getSource
获取源图项

```js
edge.getSource();
```

#### 返回
`item` {object} 源图项

### getTarget
获取目标图项

```js
edge.getTarget();
```

#### 返回
`item` {object} 目标图项

### getPoints
获取用于绘制边的点集合

```js
edge.getPoints();
```

#### 返回
`points` {array} 用于绘制边的点集合
