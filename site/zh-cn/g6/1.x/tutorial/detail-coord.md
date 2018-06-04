<!--
index: 5
title: 坐标详解
resource:
  jsFiles:
-->

## 概述

<span data-type="color" style="color:rgb(38, 38, 38)"><span data-type="background" style="background-color:rgb(255, 255, 255)">本文档主要向大家介绍 G6 的坐标转换，如有描述不清楚、有误的地方欢迎大家在 GitHub 上提 Issue 指正，或是直接 PR 修缮，根据您的贡献度，我们会视情况将您加入 AntV 共建者名录 :-)</span></span>

## 概念

<img src="https://cdn.yuque.com/lark/0/2018/png/223/1527929185898-f674be76-3c83-411d-91e0-4b74667fad42.png" style="width: 380px" />

在使用 G6 的过程中，如果你需要结合自定义的 dom 元素做一些额外的订制。你可能需要知道三个坐标系，第一个是窗口坐标系，其定义和原生 dom 事件的定义一致。容器坐标系是指 graph 所在容器的坐标系，在 G6 中这部分坐标会用 domX, domY 表示，单位是像素。图坐标系是最关键的坐标，也是 G6 使用过程中最常用，最一般的坐标系，它决定了图项之间基本的位置关系。

## 接口介绍
G6 提供了一套图坐标系与其它坐标系之间相互转换的接口。开发者可以通过这些接口轻易的完成，图坐标系坐标与其它坐标之间的正向转换和反向转换。

#### 正向变换 -- 其它坐标系到图坐标系
```javascript
getPointByDom(domPoint);        // dom 坐标转换为图坐标
getPointByClient(clientPoint);  // client 坐标转换为图坐标
```

#### 反向变换 -- 图坐标系到其它坐标系
```javascript
getDomPoint(domPoint);         // 图坐标转换为 dom 坐标
getClientPoint(clientPoint);   // 图坐标转换为 dom 坐标
```


