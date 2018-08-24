<!--
index: 0
title: F2 简介
resource:
  jsFiles:
    - ${url.f2}
-->

更好的阅读体验，请移步[语雀](https://www.yuque.com/antv/blog/introducing-f2)。

![F2 banner 中文.png | center | 747x205](https://cdn.nlark.com/lark/0/2018/png/514/1535008708711-5b627e8b-979d-46d0-8f84-b2bc73dd3b91.png "")


[F2](https://github.com/antvis/f2)，一个专注于移动，开箱即用的可视化解决方案，完美支持 H5 环境同时兼容多种环境（node, 小程序，weex）。完备的图形语法理论，满足你的各种可视化需求。专业的移动设计指引为你带来最佳的移动端图表体验。


![Snip20180823_55.png | center | 752x299.7973333333333](https://cdn.nlark.com/lark/0/2018/png/514/1535011187502-53c5bcc7-b05f-4876-8cae-f799b08e4b92.png "")



# 特性
## 专注移动，体验优雅

在“准确、有效、清晰、美”的可视化原则的基础之上，结合移动设备特性（规格不一，计算能力不足和触摸界面）以及人们对移动设备的使用习惯，我们从设计、性能以及多端异构三个角度出发，为用户提供移动端图表的最佳实践。

* **轻量化呈现，自然反馈**：在设计上我们以人为本，追求自然简单易懂，有吸引力的表达效果，让用户在碎片化的时间里更快更高效得获取图表信息。同时在可视化的操作我们追求内容和操作有机融合，符合人的自然行为反应，让交互操作更自然。

![英文动图.gif | left | 747x172](https://cdn.nlark.com/lark/0/2018/gif/514/1535088926433-f537b63b-6c98-4160-9d44-e24526e7a220.gif "")


<div data-type="alignment" data-value="center" style="text-align:center">
  <div data-type="p">
    <span data-type="color" style="color:#8C8C8C">常见图表：从左到右分别为折线图、柱状图和饼图</span>
  </div>
</div>

<img src="https://cdn.nlark.com/yuque/0/2018/gif/98090/1535090684798-b202005c-bb82-4b89-a4e1-15d79d1897d6.gif" width="747" />


* **轻巧流畅**：性能我相信是移动端长期关注的问题，虽然移动设备硬件以及计算能力一直在不断提升，但是可以肯定地说，大多数用户并没有使用最新和最强大的移动设备。因此，F2 一直致力于追求极致的性能，针对移动设备做了大量的优化，在支持丰富（50+）图表的基础上同时保持代码量的小巧（不带交互版本 Gzip 压缩后 44k，带所有交互版本 56k），同时提供模块化的设计以支持动态加载，提供更优的大小。

* **多端异构**：在完美支持 H5 环境的同时，同时兼容 [Node.js](https://antv.alipay.com/zh-cn/f2/3.x/tutorial/node-env.html)，[支付宝小程序](https://github.com/antvis/my-f2)、[微信小程序](https://github.com/antvis/wx-f2)、[React Native](https://github.com/chenshuai2144/f2-demo) 以及 [Weex 端](https://github.com/weex-plugins/weex-chart)的渲染，一份代码，多设备多环境渲染。


![多端异构.png | left | 747x80](https://cdn.nlark.com/lark/0/2018/png/514/1535089894910-9d77736e-7b74-4043-b68c-69d8c7a44e78.png "")


## 图表丰富，组件完备
与传统的图表库不同，抛弃了特图特做的封装思路，基于强大的图形语法理论，以数据驱动，通过图形语法的组合灵活构建各类图表，目前可绘制 [50+ 图表类型](https://antv.alipay.com/zh-cn/f2/3.x/demo/index.html)（当然，还可以更多），覆盖各类场景。在提供基础的图表可视化能力外，我们还提供了丰富图表功能组件，满足各种功能需求。


![Group.png | center | 747x676](https://cdn.nlark.com/lark/0/2018/png/514/1534652854390-0b44280e-4655-4b09-86ed-d7046b7ed309.png "")


## 扩展灵活，创意无限
我们在提供最佳实践的同时，还为开发者提供了灵活的扩展机制，包括 Shape、动画以及交互的自定义能力，当然还有图表样式的个性化定制，满足各种个性化的图表要求。

<div class="bi-table">
  <table>
    <colgroup>
      <col width="auto" />
      <col width="auto" />
      <col width="auto" />
    </colgroup>
    <tbody>
      <tr height="34px">
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <div id="gm6fzx" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655012578-72eba48e-23d4-4054-853a-82a10fbec5b0.gif" data-width="228">
              <img src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655012578-72eba48e-23d4-4054-853a-82a10fbec5b0.gif" width="228" />
            </div>
          </div>
          <div data-type="p">
            <div id="ztlyzn" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/514/1534655175645-7049314d-e379-480b-a5b8-97292766ad97.png" data-width="228">
              <img src="https://cdn.nlark.com/lark/0/2018/png/514/1534655175645-7049314d-e379-480b-a5b8-97292766ad97.png" width="228" />
            </div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <div id="zp54tw" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655028385-6c902504-bcdf-482c-b734-09202d9ba93d.gif" data-width="228">
              <img src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655028385-6c902504-bcdf-482c-b734-09202d9ba93d.gif" width="228" />
            </div>
            <div id="xqfhgf" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/png/514/1534655236972-7b492ae4-2eb6-4c4c-b8dd-578cdec28e15.png" data-width="228">
              <img src="https://cdn.nlark.com/lark/0/2018/png/514/1534655236972-7b492ae4-2eb6-4c4c-b8dd-578cdec28e15.png" width="228" />
            </div>
          </div>
        </td>
        <td rowspan="1" colSpan="1">
          <div data-type="p">
            <div id="b0xwtc" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655037639-1fc102f5-d673-4782-918f-dd27a37e361e.gif" data-width="229">
              <img src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655037639-1fc102f5-d673-4782-918f-dd27a37e361e.gif" width="229" />
            </div>
          </div>
          <div data-type="p">
            <div id="l7fepu" data-type="image" data-display="block" data-align="left" data-src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655160934-c674afa3-0ce8-475d-b53f-243c7eb41bf9.gif" data-width="229">
              <img src="https://cdn.nlark.com/lark/0/2018/gif/514/1534655160934-c674afa3-0ce8-475d-b53f-243c7eb41bf9.gif" width="229" />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

# 拥抱开源
自 F2 开源以来，收到了很多有价值的意见和反馈，同时开源社区也基于 F2 进行了各种封装，非常感谢大家的支持信任，也欢迎更多的有志之士一起加入我们。

* [ant-design-mobile-chart](https://github.com/ant-design/ant-design-mobile-chart)：基于 F2 封装的 ant-mobile 图表组件。
* [BizCoblin](https://github.com/alibaba/BizGoblin)：基于 F2，React 移动端可视化图表库。
* [VChart](https://doc.vux.li/zh-CN/components/v-chart.html)：[VUX](https://vux.li/)(Vue.js 移动端 UI 组件库)基于 F2 封装的图表组件。
* [weex-chart](https://github.com/weex-plugins/weex-chart)：Weex 上的图表组件。
* [eapp-dd-charts](https://github.com/opendingtalk/eapp-dd-charts-demo)：钉钉 E 应用图表。
* <span data-type="color" style="color:#8C8C8C">虚席以待</span>

# 实例赏析
F2 现已服务于阿里系各大 app：蚂蚁财富、支付宝、淘票票（专业版）等，每日经受着千万级 pv 的考验。



![实例赏析.png | left | 747x180](https://cdn.nlark.com/lark/0/2018/png/514/1535076361946-40855b53-6897-4558-8444-2c3c1d4e7b83.png "")


# 感谢

![image.png | left | 747x160](https://cdn.nlark.com/lark/0/2018/png/514/1534311975812-cdb0113a-8c7b-40c1-bfc8-1989fc0cf354.png "")

<div data-type="alignment" data-value="center" style="text-align:center">
  <div data-type="p"><span data-type="color" style="color:#8C8C8C">感谢并期待与你一起同行</span></div>
</div>


# 最后
感兴趣的小伙伴们欢迎通过以下途径**关注我们！联系我们！！加入我们！！！**

* GitHub：[https://github.com/antvis/f2](https://github.com/antvis/f2)
* 官网：[https://antv.alipay.com/zh-cn/f2/3.x](https://antv.alipay.com/zh-cn/f2/3.x)
* 邮件：[antv@antfin.com](https://lark.alipay.com/antv/g2-3.x/g2-3.2-release)

