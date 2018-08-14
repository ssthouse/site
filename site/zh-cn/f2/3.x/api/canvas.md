<!--
index: 21
title: 绘图属性
-->

# 绘图属性

---

由于 F2 使用的是 canvas，绘制的所有图形都支持 canvas 的属性，本章列出常用的属性，详细信息参考[ canvas 属性](http://www.w3school.com.cn/tags/html_ref_canvas.asp)。

## 通用属性

| 属性名 | 描述 |
| :--- | :--- |
| `fill` | Canvas 2D API 使用内部方式描述颜色和样式的属性。默认值是 #000 （黑色）， 参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle)|
| `fillStyle` | 同 `fill` |
| `stroke` |  Canvas 2D API 描述画笔（绘制图形）颜色或者样式的属性。默认值是 #000 (black)，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeStyle) |
| `strokeStyle` | 同 `stroke` |
| `shadowColor` | Canvas 2D API 描述阴影颜色的属性，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowColor)  |
| `shadowBlur` | Canvas 2D API 描述模糊效果程度的属性； 它既不对应像素值也不受当前转换矩阵的影响。 默认值是 0，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowBlur) |
| `shadowOffsetX` | Canvas 2D API 描述阴影水平偏移距离的属性，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) |
| `shadowOffsetY` |  Canvas 2D API 描述阴影垂直偏移距离的属性，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) |
| `globalOpacity` |  Canvas 2D API 用来描述在canvas上绘图之前，设置图形和图片透明度的属性。 数值的范围从 0.0 （完全透明）到1.0 （完全不透明），参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalAlpha)  |
| `opacity` | 同 `globalOpacity` |
| `globalCompositionOperation` | 该属性设置要在绘制新形状时应用的合成操作的类型，其中type是用于标识要使用的合成或混合模式操作的字符串，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) |


## 线条样式

| 属性名 | 描述 |
| :--- | :--- |
| `lineCap` | Canvas 2D API 指定如何绘制每一条线段末端的属性。有3个可能的值，分别是：`butt`, `round` and `square`。默认值是 butt，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap). |
| `lineJoin` | Canvas 2D API 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略），参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin). |
| `lineWidth` |  Canvas 2D API 设置线段厚度的属性（即线段的宽度）。当获取属性值时，它可以返回当前的值（默认值是1.0 ）。 当给属性赋值时， 0、 负数、 Infinity 和 NaN 都会被忽略；除此之外，都会被赋予一个新值，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineWidth). |
| `miterLimit` | Canvas 2D API 设置斜接面限制比例的属性。 当获取属性值时， 会返回当前的值（默认值是10.0 ）。当给属性赋值时， 0、负数、 Infinity 和 NaN 都会被忽略；除此之外都会被赋予一个新值。，参见 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit). |
| `lineDash` | 设置线的虚线样式，可以指定一个数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。这个属性取决于浏览器是否支持 `setLineDash()` 函数，详情参考 [setLineDash](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setLineDash)。


## 文本属性

| 属性名 | 描述 |
| :--- | :--- |
| `textAlign` | 设置文本内容的当前对齐方式, 支持的属性：center|end|left|right|start |
| `textBaseline` | 设置在绘制文本时使用的当前文本基线, 支持的属性:top|middle|bottom |
| `fontStyle` | 规定字体样式。可能的值：'normal', 'italic', 'oblique' |
| `fontSize` | 规定字号，以像素计 |
| `fontFamily` | 规定字体系列 |
| `fontWeight` | 规定字体的粗细。可能的值：'normal', 'bold', 'bolder', 'lighter', '100', '200, '300', '400','500', '600', '700', '800', '900' |
| `fontVariant` | 规定字体变体。可能的值：'normal', 'small-caps' |
| `lineHeight` | 规定行高，以像素计  |
| `roate` | 设置文本旋转的角度，单位为弧度 |
