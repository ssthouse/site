<!--
index: 1
title: F2
resource:
  jsFiles:
    - ${url.f2}
-->

# F2

---

当引入 F2 之后，就可以使用全局命名空间 `F2`。

## 常量 Constants

```js
F2.version // F2 的版本
```

## 类 Classes

* [F2.Chart](./chart.html)：图表的入口类
* [F2.Shape](./shape.html)：F2 Shape 图形扩展接口，用于自定义各种几何标记的 shape
* [F2.G](./g.html)：底层绘图引擎，基于原生的 Html5 Canvas 接口封装，引入容器、分层以及 Shape 等概念，使用更加便利
* [F2.Global](./global.html)：F2 的全局配置，包含图表的皮肤样式
* [F2.Util](./util.html)：辅助类工具函数


## 方法 Functions

自 **3.1.12** 版本起，F2 命名空间下添加如下方法：

```js
F2.track(true);      // 开启打点监控
F2.track(false);     // 关闭打点监控
```

该方法用于 F2 在 H5 环境下使用情况的打点监控，默认处于开启状态，如果您不想让我们知道您的版本使用情况或者该方法为您造成了困扰，请使用调用 `F2.track(false)` 将其关闭。

更多 API：
* [Chart](./chart.html)
* [Geometry](./geometry.html)
* [Scale](./scale.html)
* [Coordinate](./coordinate.html)
* [Axis](./axis.html)
* [Legend](./legend.html)
* [Tooltip](./tooltip.html)
* [Guide](./guide.html)
* [Animation](./animation.html)
* [Plugin](./plugin.html)
* [绘图属性](./canvas.html)

