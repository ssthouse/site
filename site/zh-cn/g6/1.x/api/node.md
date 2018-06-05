<!--
 index: 4
 title: Node
 resource:
   jsFiles:
     - ${url.g6}
-->

## 简介

该类是节点类，继承于图项 Item，享有 Item 上的所有接口，本文档只介绍差异的接口，其它接口请参考[ Item API 文档](./item.html)。

## 方法

### getEdges
获取与该节点相连的所有边。

```js
node.getEdges();
```

#### 返回
`edges` {array} 获取该节点相连的边集合