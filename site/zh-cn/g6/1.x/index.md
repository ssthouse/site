<!--
template: home
title: G6
keywords:
  - G6
  - Graph
  - Tree
  - Net
  - 图
  - 树
  - 网
description: G6 是解决流程图和关系分析的图表库，集成了大量的交互，可以轻松的进行动态流程图和关系网络的开发。
featuresCards:
  - img: ${assets}/image/home/features-simple.svg
    title: 完备的基础设施
    description: 简单、易用、完备的图可视化引擎。
  - img: ${assets}/image/home/features-professional.svg
    title: 丰富插件
    description: 丰富、优雅、易于复用的解决方案
  - img: ${assets}/image/home/features-powerful.svg
    title: 强大扩展能力
    description: 高可订制，满足你无限的创意
resource:
  jsFiles:
    - ${url.g6}
    - ${url['g6-plugins']}
    - ${url.d3}
-->

<style>
.node-tool {
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  color: #666;
  list-style-type:none;
  background: #fff;
  box-shadow: 0 2px 5px #ccc;
}
.node-tool li {
  padding: 4px 2px;
}
.node-tool li:hover {
  color: #26A8FB;
  cursor: pointer;
}
.outter-graph-container{
    white-space:nowrap;
    width: 100%;
    z-index: 1;
}
.intro .header{
    position: relative
}
.texts {
    z-index: 2;
}
</style>

<section class="intro">
    <div class="container">
        <div class="header row">
            <div class="col-md-5 texts">
                <h1>G6关系数据可视化</h1>
                <p class="main-info">G6 是关系数据可视化引擎，开发者可以基于 G6 拓展出属于自己的图分析应用或者图编辑器应用。</p>
                <a href="{{ products.g6.links.demo.href }}" class="btn btn-primary btn-lg btn-round-link">{{ resource.translate.demo }}</a>
                <a href="{{base}}zh-cn/g6/1.x/tutorial/index.html#_安装" class="btn btn-light border btn-lg btn-round-link">{{ resource.translate.downloadAndUse }}</a>
                <iframe class="btn-round-link btn btn-light btn-lg github-btn" src="https://ghbtns.com/github-btn.html?user=antvis&repo=g6&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
            </div>
            <div id="mountNode" class="col-md-7 outter-graph-container"></div>
        </div>
    </div>
</section>

<section class="features text-center">
    <div class="container">
        <div class="row">
            {% for card in featuresCards %}
            <div class="feature col-md-4 text-center">
                <img src="{{ card.img }}" alt="" width="120" height="120">
                <h5>{{ card.title }}</h5>
                <div class="detail">{{ card.description }}</div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section class="get-started text-center">
<div class="container">
    <h2>快速接入</h2>
    <p>通过 <code>&lt;script&gt;</code> 标签引入：</p>
    
```html
<!-- 引入在线资源 -->
<script src="{{ url.g6 }}"></script>
```

<p class="pt-32">通过 <code>&lt;npm&gt;</code> 安装：</p>

```js
npm install @antv/g6 --save
```

</div>
<a href="{{ products.g6.links.tutorial.href }}"  class="btn btn-primary btn-lg btn-round-link more-tutorial">更多教程</a>
</section>

<!-- chart1 -->

```js-
$.getJSON('/assets/data/g6-index.json', data => {
    const Template = G6.Plugins['template.maxSpanningForest'];
    const Mapper = G6.Plugins['tool.d3.mapper'];
    const { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } = d3;
    const nodeSizeMapper = new Mapper('node', 'weight', 'size', [8, 20], {
    legendCfg: null
    });
    const edgeSizeMapper = new Mapper('edge', 'weight', 'size', [1, 8], {
    legendCfg: null
    });
    const nodeColorMapper = new Mapper('node', 'weight', 'color', ['#E0F5FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#3DA0F2', '#1581E6', '#0860BF'], {
    legendCfg: null
    });
    const template = new Template();
    const force = {
        execute() {
            const nodes = this.nodes;
            const edges = this.edges;
            const graph = this.graph;
            const width = graph.getWidth();
            const height = graph.getHeight();
            const simulation = forceSimulation(nodes)
            .force('charge', forceManyBody().distanceMax(width * 3))
            .force('link', forceLink(G6.Util.cloneDeep(edges))
                .id(model => {
                return model.id;
                })
                .strength(1)
            )
            .force('center', forceCenter(width / 2, height / 2))
            .force('collision', forceCollide().radius(model => {
                return model.width / 2 * 1.2;
            }));
            simulation.stop();
            for (let i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
            simulation.tick();
            }
            nodes.forEach(node => {
            delete node.vx;
            delete node.vy;
            });
        }
    };
    const graph = new G6.Graph({
        id: 'mountNode',             // dom id
        height: 400,
        plugins: [template, nodeSizeMapper, nodeColorMapper, edgeSizeMapper],
        animate: true,
        layout: {
            processer: force
        }
    });
    const circle = new G6.Layouts.Circle({
    sort(a, b) {
        return a.weight - b.weight;
    }
    });
    const grid = new G6.Layouts.Grid({
    sort(a, b) {
        return b.weight - a.weight;
    }
    });
    const dagre = new G6.Layouts.Dagre({
    nodesep() {
        return graph.getWidth() / 50;
    },
    ranksep() {
        return graph.getHeight() / 25;
    },
    marginx() {
        return graph.getWidth() / 16;
    },
    marginy() {
        return graph.getHeight() / 16;
    },
    useEdgeControlPoint: false,
    });
    const spiral = new G6.Layouts.ArchimeddeanSpiral({
    sort(a, b) {
        return b.weight - a.weight;
    }
    });
    graph.edge({
    style(model) {
        return {
        stroke: graph.find(model.target).getModel().color,
        strokeOpacity: 0.8
        };
    }
    });
    graph.read(data);
    setInterval(() => {
    if (document.visibilityState === 'visible') {
        let layouts = [circle, dagre, force, grid, spiral];
        layouts = layouts.filter(layout => {
        return layout !== graph.getLayout();
        });
        const layout = layouts[parseInt(layouts.length * Math.random())];
        graph.changeLayout(layout);
    }
    }, 2000);
});
```

<!-- chart2 -->

```js-
```

<!-- chart3 -->

```js-
```
