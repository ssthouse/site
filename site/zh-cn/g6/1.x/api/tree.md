<!--
 index: 2
 title: Tree
 resource:
   jsFiles:
     - ${url.g6}
-->

## 简介

Tree 是绘制树形关系数据的图类，继承于 Graph ，享有 Graph 上的所有接口，本文档只介绍差异的接口，其它接口请参考[ Graph API 文档](./graph.html)。

获取方式： `G6.Tree`，创建 Tree 的方式如下：

```js
new G6.Tree(cfg);
```

创建一个 graph 实例，返回一个 Graph 对象，建议在单个容器上只初始化一个 Graph 实例。 `cfg` 详见下列配置项。

## 配置项
### layout

布局参数 {object|function|object}

`type` {object} 

```
{
  auto: {boolean}, // 是否在画布数据变更后自动布局 默认 是true
  processer: {object|function}, // 布局处理器
} 
```

`type` {function}

```
(roots)=>{
  // roots 根节点数据集
  // 在此处进行布局
}
```

`type` {object}

```
{
  excute() {
    this.roots; // 根节点数据集
    this.tree; // 当前图类
  }
}
```

## 方法

### read
读取并渲染图数据。

```js
tree.read(data);
```

#### 参数：
* `data` {object} 数据模型

导入的数据模型，以下健名在 G6 中有特定含义，是保留字段，用户在设置自有数据时应 `避免使用` 。

##### 数据模型
```js
{
  roots: [
    {
      id: 'root',                    // 根节点 id 
      color: '#333',                 // 颜色 
      size: 10 || [10, 10],          // 尺寸 || [宽, 高]
      shape: 'circle',               // 根节点 id
      style: {                       // 样式 (优先级高于 color) 
        fill: 'red',
    	stroke: 'blue'
      },
      label: '文本标签' || {           // 文本标签 || 文本图形配置
        text: '文本标签',
    	fill: 'green'
      },
      parent: 'parentId',            // 父节点 id
      collapsed: false,              // 是否折叠
      index: 1,                      // 渲染层级
      children: [{                   // 子元素集 （自元素数据模型和根节点同构）
	    id: 'leaf',
      }],
    }
  ]
}
```

#### 示例


![image | left](https://cdn.yuque.com/lark/0/2018/png/223/1527739124049-622472fb-b19f-4829-a1de-640d1a2d5237.png "")


```js
const data = {
  roots: [{
    label: 'root',
    children: [{
      label: 'child1',
      children: [
        {
          label: 'child\n1.1'
        }
      ]
    }, {
      label: 'child2'
    }] 
  }]
};
const tree = new G6.Tree({
  container: 'mountNode',
  width: 500,
  height: 500,
  fitView: 'cc'
});
tree.read(data);
```

### add 
添加节点，基本使用方式同 Graph 的 add，不同之处在于，Tree 的只能添加节点（node）和导引（guide），并且添加 node 时**必须指定 parent 字段**。

#### 示例
```js
// 在 id 为 parentNode 的节点下添加一个 id 为 node1 的节点
tree.add('node', {
  id: 'node1',
  parent: 'parentNode'
})
```

