(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{479:function(n,t,a){"use strict";a.r(t);var e=a(19),s=Object(e.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"混合-水平スクロール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合-水平スクロール"}},[this._v("#")]),this._v(" 混合 (水平スクロール)")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  datasets: [\n    {\n      label: 'データセット1 (ライン)',\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      borderColor: Utils.CHART_COLORS.red,\n      cubicInterpolationMode: 'monotone',\n      data: []\n    },\n    {\n      type: 'bar',\n      label: 'データセット2 (バー)',\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      borderColor: Utils.CHART_COLORS.blue,\n      borderWidth: 1,\n      data: []\n    }\n  ]\n};\n\nconst onRefresh = chart => {\n  const now = Date.now();\n  chart.data.datasets.forEach(dataset => {\n    dataset.data.push({\n      x: now,\n      y: Utils.rand(-100, 100)\n    });\n  });\n};\n// </block:setup>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'ランダム化',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.forEach(dataObj => {\n          dataObj.y = Utils.rand(-100, 100);\n        });\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'データセット追加',\n    handler(chart) {\n      const datasets = chart.data.datasets;\n      const dsColor = Utils.namedColor(datasets.length);\n      const newDataset = {\n        label: 'データセット' + (datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: []\n      };\n      datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'データ追加',\n    handler(chart) {\n      onRefresh(chart);\n      chart.update();\n    }\n  },\n  {\n    name: 'データセット削除',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'データ削除',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.shift();\n      });\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    scales: {\n      x: {\n        type: 'realtime',\n        realtime: {\n          duration: 20000,\n          refresh: 1000,\n          delay: 2000,\n          onRefresh: onRefresh\n        }\n      },\n      y: {\n        title: {\n          display: true,\n          text: '値'\n        }\n      }\n    },\n    interaction: {\n      mode: 'nearest',\n      intersect: false\n    }\n  }\n};\n// </block:config>\n\nconfig.options.plugins = {\n  annotation: false,\n  datalabels: false,\n  zoom: false\n};\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);