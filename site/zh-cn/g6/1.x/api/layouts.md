<!--
 index: 6
 title: Layouts
 resource:
   jsFiles:
     - ${url.g6}
-->

<style>
.inner-page-toc{
  display: none;
}
</style>

# Layouts

本文档是关系图库 —— G6.Layouts 布局包文档, 您能从该文档中快速查找到其内置的所有布局。如果有你觉得描述的不够清晰的地方敬请联系我们！

## 树布局

为了方便大家使用，G6 官方自研并内置了以下几种树布局算法：

* [使用方式](#_使用方式)
* [紧凑树——CompactBoxTree](#_紧凑树——CompactBoxTree)
* [生态树——Dendrogram](#_生态树——Dendrogram)
* [缩进树——IndentedTree](#_缩进树——IndentedTree)

# 使用方式

只需要在外部实例化一个布局对象，并传入图类就行。

```js
const layout = new G6.Layouts.CompactBoxTree(options);
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
  layout,
  fitView: 'cc'
});
tree.read(data);
```

# 紧凑树——CompactBoxTree

紧凑盒树布局。这是树图的默认布局，其特点是布局时统合考虑每个树节点的包围盒，由经典的[Reingold–Tilford tidy布局算法](http://emr.cs.iit.edu/~reingold/tidier-drawings.pdf)演进而来，适合于脑图等应用场景。

![图片](https://zos.alipayobjects.com/skylark/8aee7a6b-9e79-41f2-918c-7c5269011e68/attach/5286/9f92b3c9ea6abea7/right-logical.png)

## 属性

### direction

[String] 树布局的方向，默认为LR，可选值为

* LR（根节点在左，往右布局）
* RL（根节点在右，往左布局）
* H（根节点在中间，水平对称布局）
* TB（根节点在上，往下布局）
* BT（根节点在下，往上布局）
* H（根节点在中间，垂直对称布局）

> Layout.IndentedTree只有前三个方向，也就是LR／RL／H

### getHGap

[Function|Number] 每个节点的水平间隙，默认18

### getVGap

[Function|Number] 每个节点的垂直间隙，默认18

# 生态树——Dendrogram

[生态树](https://en.wikipedia.org/wiki/Dendrogram)布局。特点是所有子节点布局在同一层级，适用于表示层次聚类。

![图片](http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/skylark/attach/5286/17725fb0e7af3a7a/dendrogram-lr.png)

## 属性

### direction

[String] 树布局的方向，默认为LR，可选值为

* LR（根节点在左，往右布局）
* RL（根节点在右，往左布局）
* H（根节点在中间，水平对称布局）
* TB（根节点在上，往下布局）
* BT（根节点在下，往上布局）
* H（根节点在中间，垂直对称布局）

> Layout.IndentedTree只有前三个方向，也就是LR／RL／H

### getHGap

[Function|Number]  每个节点的水平间隙，默认18

### getVGap

[Function|Number]  每个节点的垂直间隙，默认18

### nodeSep

[Function|Number]  节点间距

### nodeSize

[Function|Number] 节点大小

### rankSep

层级间距

### subTreeSep

子树间隔

# 缩进树——IndentedTree

缩进树布局。树节点的层级通过水平方向的缩进量来表示，常用场景是文件目录结构。

![图片](http://alipay-rmsdeploy-image.cn-hangzhou.alipay.aliyun-inc.com/skylark/attach/5286/665db9cced8fc459d82b1fb5fba0ca9b)

## 属性

### [direction](#_direction) {String}

树布局的方向，默认为LR，可选值为

* LR（根节点在左，往右布局）
* RL（根节点在右，往左布局）
* H（根节点在中间，水平对称布局）
* TB（根节点在上，往下布局）
* BT（根节点在下，往上布局）
* H（根节点在中间，垂直对称布局）

> Layout.IndentedTree只有前三个方向，也就是LR／RL／H

### getHGap

[Function|Number] 每个节点的水平间隙，默认18

### getVGap

[Function|Number] 每个节点的垂直间隙，默认18

### indent

[Function|Number] 缩进量