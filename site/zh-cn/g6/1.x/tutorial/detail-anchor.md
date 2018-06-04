<!--
index: 3
title: 锚点详解
resource:
  jsFiles:
-->

## 概述
本文档主要向大家介绍如何在 G6 中锚点机制的原理和拓展，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)

## 定义

锚点：用户设置可用于连接的点，从属于节点




![image | center](https://gw.alipayobjects.com/zos/skylark/2eaaac95-0562-4569-8df9-a596040335eb/2018/png/8ba83700-9ba2-4b64-8483-a9e052c93e48.png "")



连接点：边和节点的连接点。



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/5dc4a1ef-99e8-4dbf-bc09-5374b48f176c.png "")


相交盒：用于计算交点和盒模型，从属于节点



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/d6498d4b-18a3-46f4-9c6d-15fa80e4bb07.png "")


锚点坐标平面：用于设置锚点的坐标平面



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/d0513345-771d-4bbc-a6e6-7278a85ccb9a.png "")




## 锚点策略详解

#### points 值未定义

* 步骤一：截取交点



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/a20bd6da-4d12-4a88-8c4a-996bf5a36e3c.png "")


* 步骤二：返回连接点

     

#### points 值为 `array`

* 步骤一：截取交点



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/a20bd6da-4d12-4a88-8c4a-996bf5a36e3c.png "")


* 步骤二：按角度排序，所有自定义的锚点， 增序



![image | left](https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/skylark/png/220b90dd-7634-4753-a386-ae06bb3dd981.png "")


* 步骤三：返回排序后的锚点集合


## 接口

在注册节点时设置。

```
// 设置锚点
G6.registerNode('customNode', {
  anchor: {
    // 相交盒模型
    type: 'circle' || callback, // 'circle', 'rect', 'path'
    // 锚点
    points: [
      [0, 1, cfg],
      [0,5, 0,5, cfg]
    ]  || callback
  },
});

-----------快捷方式------------

// 直接传值
G6.registerNode('customNode', {
  anchor: [
    [0, 1, cfg],
    [0,5, 0,5, cfg]
  ],
}); 

// 回调函数
G6.registerNode('customNode', {
  anchor(item) {
    return [
      [0, 1, cfg],
      [0,5, 0,5, cfg]
    ];
  },
}); 
```

边的数据模型里设置需要连接的锚点

```
{
  sourceAnchor: 1, // 锚点索引
  targetAnchor: 0, // 锚点索引
}
```

获取锚点的方法

```
// 获取锚点集合 (根据索引排序)
const anchorPoints = node.getAnchorPoints();
// 获取关于某点的连接点 (根据角度逼近排序)
const linkPoints = node.getLinkPoints(); 
```