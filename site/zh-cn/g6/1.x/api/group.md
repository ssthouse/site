<!--
 index: 4
 title: Group
 resource:
   jsFiles:
     - ${url.g6}
-->

## 简介

该类是群组类，继承于图项 Node，享有 Node 上的所有接口，本文档只介绍差异的接口，其它接口请参考[ Node API 文档](./node.html)。

![image](https://cdn.yuque.com/lark/0/2018/png/223/1527586809066-79fb42fe-cc9b-4599-a22b-d68a48e9e7e6.png)

## 方法

### getChildren
获取子元素

```js
group.getChildren();
```

#### 返回
`children` {array} 获取该群组内的一代子元素

### getAllChildren
获取所有子元素

```js
group.getAllChildren();
```

#### 返回
`children` {array} 获取该群组内的所有子元素