<!--
index: 19
title: 绘图属性
-->

# 绘图属性

---

由于 F2 使用的是 canvas，绘制的所有图形都支持 canvas 的属性，本章列出常用的属性，详细信息参考[ canvas 属性](http://www.w3school.com.cn/tags/html_ref_canvas.asp)。

## 通用属性

* `fill`：设置用于填充绘画的颜色、渐变或纹理；
* `fillStyle`：用法同 `fill`；
* `stroke`：设置用于笔触的颜色、渐变或纹理；
* `stokeStyle`：用法同 `stroke`；
* `shadowColor`：设置用于阴影的颜色；
* `shadowBlur`：设置用于阴影的模糊级别；
* `shadowOffsetX`：设置阴影距形状的水平距离；
* `shadowOffsetY`：设置阴影距形状的垂直距离；
* `opacity`：设置绘图的当前 alpha 或透明值；
* `globalAlpha`：用法同 `opacity`
* `globalCompositeOperation`：设置新图像如何绘制到已有的图像上。

## 线条样式

* [`lineCap`](http://www.w3school.com.cn/tags/canvas_linecap.asp) 设置线条的结束端点样式；
* [`lineJoin`](http://www.w3school.com.cn/tags/canvas_linejoin.asp)  设置两条线相交时，所创建的拐角形状；
* [`lineWidth`](http://www.w3school.com.cn/tags/canvas_linewidth.asp) 设置当前的线条宽度；
* [`miterLimit`](http://www.w3school.com.cn/tags/canvas_miterlimit.asp)  设置最大斜接长度。
* `lineDash`：设置线的虚线样式，可以指定一个数组。一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。

注意： `lineDash` 这个属性取决于浏览器是否支持 setLineDash 函数，详情参考[setLineDash](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)。

## 文本属性

* [`textAlign`](http://www.w3school.com.cn/tags/canvas_textalign.asp) 设置文本内容的当前对齐方式, 支持的属性：center|end|left|right|start
* [`textBaseline`](http://www.w3school.com.cn/tags/canvas_textbaseline.asp)  设置在绘制文本时使用的当前文本基线, 支持的属性:top|middle|bottom
* `rotate`: 设置文本旋转的角度，单位为弧度
* `fontStyle`: 规定字体样式。可能的值：'normal', 'italic', 'oblique'
* `fontVariant`: 规定字体变体。可能的值：'normal', 'small-caps'
* `fontWeight`: 规定字体的粗细。可能的值：'normal', 'bold', 'bolder', 'lighter', '100', '200, '300', '400','500', '600', '700', '800', '900'
* `fontSize`: 规定字号，以像素计
* `fontFamily`: 规定字体系列
* `lineHeight`: 规定行高，以像素计

