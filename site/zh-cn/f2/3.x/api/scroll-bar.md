<!--
index: 12
title: ScrollBar
resource:
  jsFiles:
    - ${url.f2}
-->

# 进度条

Scroll bar 是一个静态插件，主要用于辅助 pan 和 pinch 交互以显示当前的数据范围。

## API

### 如何引入

```js
const F2 = require('@antv/f2/lib/index');
const ScrollBar = require('@antv/f2/lib/plugin/scroll-bar');

// 注册插件 Guide
F2.Chart.plugins.register(ScrollBar); // 这里进行全局注册，也可以给 chart 的实例注册

// 或者给具体的 chart 实例注册
const chart = new F2.Chart({
  id: 'canvas',
  plugins: ScrollBar
});
```

引入插件之后，就可以调用 `chart.scrollBar()` 方法了。

```js
chart.scrollBar({
  // 一些配置项
});
```

### 配置项

<div class="bi-table">
  <table>
    <colgroup>
      <col width="111px" />
      <col width="104px" />
      <col width="198px" />
      <col width="443px" />
    </colgroup>
    <tbody>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">属性名</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">类型</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">默认值</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">说明</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p"><code>mode</code> </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">String</div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">&#x27;x&#x27; </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">用于确定进度条的渲染方向，可选值为 &#x27;x&#x27;, &#x27;y&#x27;, &#x27;xy&#x27;</div>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p"><code>xStyle</code> </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Object</div>
        </td>
        <td rowspan="1" colSpan="1"><pre data-syntax="javascript"><code class="language-javascript">{
    backgroundColor: &#x27;rgba(202, 215, 239, .2)&#x27;,
    fillerColor: &#x27;rgba(202, 215, 239, .5)&#x27;,
    size: 4,
    lineCap: &#x27;round&#x27;,
    offsetX: 0,
    offsetY: 8
  }
</code></pre></td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">用于设置 x 轴方向进度条的样式，其中：</div>
          <div data-type="p"></div>
          <ul data-type="unordered-list">
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>backgroundColor</code>：进度条背景色</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>fillColor</code>: 范围进度条的背景色</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>size</code>: 进度条线宽</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>lineCap</code>: line 的图形属性</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>offsetX</code>: 进度条 x 方向的偏移量</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>offsetY</code>: 进度条 y 方向的偏移量</div>
            </li>
          </ul>
        </td>
      </tr>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p"><code>yStyle</code></div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">Obect</div>
        </td>
        <td rowspan="1" colSpan="1"><pre data-syntax="javascript"><code class="language-javascript">{
    backgroundColor: &#x27;rgba(202, 215, 239, .2)&#x27;,
    fillerColor: &#x27;rgba(202, 215, 239, .5)&#x27;,
    size: 4,
    lineCap: &#x27;round&#x27;,
    offsetX: 8,
    offsetY: 0
  }
</code></pre></td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">用于设置 y 轴方向进度条的样式，其中：</div>
          <div data-type="p"></div>
          <ul data-type="unordered-list">
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>backgroundColor</code>：进度条背景色</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>fillColor</code>: 范围进度条的背景色</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>size</code>: 进度条线宽</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>lineCap</code>: line 的图形属性</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>offsetX</code>: 进度条 x 方向的偏移量</div>
            </li>
            <li data-type="list-item" data-list-type="unordered-list">
              <div data-type="p"><code>offsetY</code>: 进度条 y 方向的偏移量
              </div>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 实例

- [折线图平移](../demo/interaction/pan-for-line-chart.html)
