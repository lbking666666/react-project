//引入mock
import Mock from 'mockjs';
//大类
let largeData = [{
  id: '1',
  value: '军用'
}, {
  id: '00002',
  value: '民用'
}, {
  id: '00003',
  value: '外贸'
}]
//客户类型
//大类为国内军用
let customerArr1 = [{
  id: '0000',
  value: '全部'
}, {
  id: '0001',
  value: '陆军'
}, {
  id: '0002',
  value: '海军'
}, {
  id: '0003',
  value: '空军'
}, {
  id: '0004',
  value: '武警'
}]
//大类为国内军用
let customerArr11 = [{
  id: '0000',
  value: '全部'
}, {
  id: '0001',
  value: '陆军'
}, {
  id: '0003',
  value: '空军'
}, {
  id: '0004',
  value: '武警'
}]
//大类为国内民用
let customerArr2 = [{
  id: '0000',
  value: '全部'
}, {
  id: '0001',
  value: '民航'
}, {
  id: '0002',
  value: '公安'
}]
//大类为外贸
let customerArr3 = [{
    id: '0000',
    value: '全部'
  },
  {
    id: '0001',
    value: '保利'
  },
  {
    id: '0002',
    value: '中航技'
  },
  {
    id: '0003',
    value: '中航国际'
  }
]
//机关名称
//大类为国内军用
let organArr1 = [{
    id: '0000',
    value: '全部'
  },
  {
    id: '0001',
    value: '东部战区'
  },
  {
    id: '0002',
    value: '南部战区'
  },
  {
    id: '0003',
    value: '西部战区'
  },
  {
    id: '0004',
    value: '北部战区'
  },
  {
    id: '0005',
    value: '中部战区'
  },
  {
    id: '0006',
    value: '武警第一中队'
  },
  {
    id: '0007',
    value: '武警第二中队'
  }
]
//大类为国内军用
let organArr11 = [{
    id: '0000',
    value: '全部'
  },
  {
    id: '0002',
    value: '南部战区'
  },
  {
    id: '0003',
    value: '西部战区'
  },
  {
    id: '0004',
    value: '北部战区'
  },
  {
    id: '0005',
    value: '中部战区'
  },
  {
    id: '0006',
    value: '武警第一中队'
  },
  {
    id: '0007',
    value: '武警第二中队'
  }
]
//大类为国内民用
let organArr2 = [{
    id: '0000',
    value: '全部'
  },
  {
    id: '0001',
    value: '华东地区'
  },
  {
    id: '0002',
    value: '中南地区'
  },
  {
    id: '0003',
    value: '华北地区'
  },
  {
    id: '0004',
    value: '华中地区'
  },
  {
    id: '0005',
    value: '东北地区'
  },
  {
    id: '0006',
    value: '西南地区'
  },
  {
    id: '0007',
    value: '西北地区'
  }
]
//大类为外贸
let organArr3 = [{
    id: '0000',
    value: '全部'
  },
  {
    id: '0001',
    value: '客户'
  }
]
//列表数据
let listData = [{
  id: '@id',
  value: '南部战区',
  userNum: '@integer(3000, 5000)',
  travelNum: '@integer(3000, 5000)',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}, {
  id: '@id',
  value: '北部战区',
  userNum: '@integer(3000, 5000)',
  travelNum: '@integer(3000, 5000)',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}, {
  id: '@id',
  value: '新疆战区',
  userNum: '@integer(3000, 5000)',
  travelNum: '@integer(3000, 5000)',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}, {
  id: '@id',
  value: '西部战区',
  userNum: '@integer(3000, 5000)',
  travelNum: '@integer(3000, 5000)',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}, {
  id: '@id',
  value: '东部战区',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}, {
  id: '0005',
  value: '中部战区',
  total: { id: '@id', num: '@integer(3000, 5000)' },
  inservice: { id: '@id', num: '@integer(200, 1000)' },
  scrap: { id: '@id', num: '@integer(200, 1000)' },
  grounded: { id: '@id', num: '@integer(200, 1000)' },
  fault: { id: '@id', num: '@integer(200, 1000)' },
  fixedInspection: { id: '@id', num: '@integer(200, 1000)' },
  overhaul: { id: '@id', num: '@integer(20, 300)' },
}]
//故障列表
let listTableData = {
  total: {
    id: '@id',
    value: '@integer(200, 1000)'
  },
  'list|15': [{
    name: '@cname',
    id: '@id',
    code: 'z9',
    model: 'z91'
  }]
}
//机群统计
let totalData = ['@integer(1000, 1500)', '@integer(500, 800)', '@integer(100, 300)', '@integer(100, 300)', '@integer(100, 300)']
//场外信息
let outData = {
  faultSituation: {
    doing: '@integer(2, 100)', //排故中
    done: '@integer(2, 100)' //已完成
  },
  faultLiability: {
    myFault: '@integer(2, 100)', //122厂故障
    otherFault: '@integer(2, 100)' //配套供应商故障
  }
}
//交付信息
let annualDelivery = {
  delivery: [{
      name: "已交付",
      id: "4",
      value: "@integer(2, 100)",
    },
    {
      name: "待用户接收",
      id: "2",
      value: "@integer(2, 100)",
    },
    {
      name: "未铅封",
      id: "1",
      value: "@integer(2, 100)",
    },
    {
      name: "正交付",
      id: "3",
      value: "@integer(2, 100)",
    }
  ],
  planeType: [{
    name: 'z80',
    id: '0001',
    value: '@integer(2, 100)'
  }, {
    name: 'z90',
    id: '0002',
    value: '@integer(2, 100)'
  }, {
    name: 'z10',
    id: '0003',
    value: '@integer(2, 100)'
  }]
}
//客户需求任务监控
let demandTask = {
  "line": {
    "doing": [{
        "name": "其他",
        "id": "8:11",
        "value": "3"
      },
      {
        "name": "航材支援",
        "id": "4:17",
        "value": "17"
      }
    ],
    "done": [{
        "name": "其他",
        "id": "8:11",
        "value": "8"
      },
      {
        "name": "技术支援",
        "id": "5:3:18:14:2:1",
        "value": "31"
      }
    ]
  },
  "ratio": [{
      "longNum": 2,
      "doubleNum": 2.0,
      "intNum": 2,
      "one": 1,
      "name": "未完成",
      "index": 2147483647,
      "id": "0",
      "list": [],
      "sourceData": [],
      "value": "2",
      "age": "0"
    },
    {
      "longNum": 0,
      "doubleNum": 0.0,
      "intNum": 0,
      "one": 1,
      "name": "已完成",
      "index": 2147483647,
      "id": "1",
      "list": [],
      "sourceData": [],
      "value": "5",
      "age": "0"
    }
  ]
}
//航材投产统计
let commissioningData = [{
  name: '服务航材',
  list: [{
    name: '一般',
    value: '10',
    list: [{
      name: '投产中',
      value: '5',
    }, {
      name: '已交付',
      value: '5',
    }]
  }, {
    name: '紧急',
    value: '20',
    list: [{
      name: '投产中',
      value: '8',
    }, {
      name: '已交付',
      value: '12',
    }]
  }]
}, {
  name: '通报航材',
  list: [{
    name: '一般',
    value: '@integer(2, 100)',
    list: [{
      name: '投产中',
      value: '@integer(2, 100)',
    }, {
      name: '已交付',
      value: '@integer(2, 100)',
    }]
  }, {
    name: '紧急',
    value: '@integer(2, 100)',
    list: [{
      name: '投产中',
      value: '@integer(2, 100)',
    }, {
      name: '已交付',
      value: '@integer(2, 100)',
    }]
  }]
}, {
  name: '销售航材',
  list: [{
    name: '一般',
    value: '@integer(2, 100)',
    list: [{
      name: '投产中',
      value: '@integer(2, 100)',
    }, {
      name: '已交付',
      value: '@integer(2, 100)',
    }]
  }, {
    name: '紧急',
    value: '@integer(2, 100)',
    list: [{
      name: '投产中',
      value: '@integer(2, 100)',
    }, {
      name: '已交付',
      value: '@integer(2, 100)',
    }]
  }]
}]

let chart1Data = [{
  "longNum": 0,
  "doubleNum": 0.0,
  "intNum": 2,
  "num": "2",
  "one": 1,
  "index": 2147483647,
  "jSONDATA": null,
  "list": [{
    "longNum": 0,
    "doubleNum": 0.0,
    "intNum": 1,
    "num": "1",
    "one": 1,
    "index": 2147483647,
    "jSONDATA": null,
    "list": [],
    "produnctId": null,
    "name": "Z9Z",
    "id": "402880a86e3fd0ac016e3fd77e43369e",
    "sourceData": [],
    "produnctName": null,
    "value": "1",
    "age": "50.0"
  }, {
    "longNum": 0,
    "doubleNum": 0.0,
    "intNum": 1,
    "num": "1",
    "one": 1,
    "index": 2147483647,
    "jSONDATA": null,
    "list": [],
    "produnctId": null,
    "name": "Z9E",
    "id": "402880a86e3fd0ac016e3fd7bf3a36a0",
    "sourceData": [],
    "produnctName": null,
    "value": "1",
    "age": "50.0"
  }],
  "produnctId": null,
  "name": "Z9",
  "id": "402880a86e3ec7fc016e3f6caf03369f",
  "sourceData": [],
  "produnctName": null,
  "value": "2",
  "age": "33.33"
}, {
  "longNum": 0,
  "doubleNum": 0.0,
  "intNum": 1,
  "num": "1",
  "one": 1,
  "index": 2147483647,
  "jSONDATA": null,
  "list": [{
    "longNum": 0,
    "doubleNum": 0.0,
    "intNum": 1,
    "num": "1",
    "one": 1,
    "index": 2147483647,
    "jSONDATA": null,
    "list": [],
    "produnctId": null,
    "name": "Z15F",
    "id": "402880a86e3fd0ac016e3fd842ff36a6",
    "sourceData": [],
    "produnctName": null,
    "value": "1",
    "age": "100.0"
  }],
  "produnctId": null,
  "name": "Z15",
  "id": "402880a86e3ec7fc016e3f87456836a4",
  "sourceData": [],
  "produnctName": null,
  "value": "1",
  "age": "16.67"
}, {
  "longNum": 0,
  "doubleNum": 0.0,
  "intNum": 3,
  "num": "3",
  "one": 1,
  "index": 2147483647,
  "jSONDATA": null,
  "list": [{
    "longNum": 0,
    "doubleNum": 0.0,
    "intNum": 2,
    "num": "2",
    "one": 1,
    "index": 2147483647,
    "jSONDATA": null,
    "list": [],
    "produnctId": null,
    "name": "Z10W",
    "id": "402880a86e3fd0ac016e3fd8190636a4",
    "sourceData": [],
    "produnctName": null,
    "value": "2",
    "age": "66.67"
  }, {
    "longNum": 0,
    "doubleNum": 0.0,
    "intNum": 1,
    "num": "1",
    "one": 1,
    "index": 2147483647,
    "jSONDATA": null,
    "list": [],
    "produnctId": null,
    "name": "Z10B",
    "id": "402880a86e3fd0ac016e3fd7ec9836a2",
    "sourceData": [],
    "produnctName": null,
    "value": "1",
    "age": "33.33"
  }],
  "produnctId": null,
  "name": "Z10",
  "id": "402880a86e3ec7fc016e3f87118636a2",
  "sourceData": [],
  "produnctName": null,
  "value": "3",
  "age": "50.0"
}]
let chart2Data = [{
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '审签中',
    value: 8
  }, {
    id: '@id',
    name: '配套中',
    value: 20
  }, {
    id: '@id',
    name: '已完成',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '审签中',
    value: 8
  }, {
    id: '@id',
    name: '配套中',
    value: 20
  }, {
    id: '@id',
    name: '已完成',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '审签中',
    value: 8
  }, {
    id: '@id',
    name: '配套中',
    value: 20
  }, {
    id: '@id',
    name: '已完成',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '审签中',
    value: 8
  }, {
    id: '@id',
    name: '配套中',
    value: 20
  }, {
    id: '@id',
    name: '已完成',
    value: 12
  }]
}, ]
let chart3Data = [{
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '未超期',
    value: 8
  }, {
    id: '@id',
    name: '即将超期',
    value: 20
  }, {
    id: '@id',
    name: '已超期',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '未超期',
    value: 8
  }, {
    id: '@id',
    name: '即将超期',
    value: 20
  }, {
    id: '@id',
    name: '已超期',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '未超期',
    value: 8
  }, {
    id: '@id',
    name: '即将超期',
    value: 20
  }, {
    id: '@id',
    name: '已超期',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '未超期',
    value: 8
  }, {
    id: '@id',
    name: '即将超期',
    value: 20
  }, {
    id: '@id',
    name: '已超期',
    value: 12
  }]
}, {
  name: '@cname',
  value: 40,
  id: '@id',
  'list': [{
    id: '@id',
    name: '未超期',
    value: 8
  }, {
    id: '@id',
    name: '即将超期',
    value: 20
  }, {
    id: '@id',
    name: '已超期',
    value: 12
  }]
}]
let chart4Data = [{
  name: '故障',
  list: [{ name: '完好', value: '@integer(2, 100)' }, { name: '故障', value: '@integer(2, 100)' }, { name: '退役', value: '@integer(2, 100)' }, { name: '报废', value: '@integer(2, 100)' }]
}, {
  name: '大修',
  list: [{ value: 0 }, { name: '大修', value: '@integer(2, 100)' }]
}, {
  name: '定检',
  list: [{ value: 0 }, { name: '定检', value: '@integer(2, 100)' }]
}]
let chart5Data = {
  "selectData": [ //下拉 系统top10
    {
      "name": "全部",
      "id": "310000198907265357"
    },
    {
      "name": "系统A",
      "id": "710000199801253015"
    },
    {
      "name": "系11111统B",
      "id": "450000200007199287"
    },
    {
      "name": "系统C",
      "id": "340000198009285538"
    }
  ],
  "data": [ //图表数据
    {
      "name": "122厂故障", //122厂数据
      "list": [{
          "name": "z4",
          id: '@id',
          "value": 56
        },
        {
          "name": "z6",
          id: '@id',
          "value": 82
        },
        {
          "name": "z9",
          id: '@id',
          "value": 88
        }
      ]
    },
    {
      "name": "供应商故障", //供应商数据
      "list": [{
          "name": "z4",
          id: '@id',
          "value": 21
        },
        {
          "name": "z9",
          id: '@id',
          "value": 14
        }
      ]
    }
  ]
}

let chart6Data = {
  selectData: [{
    name: '全部',
    id: '@id'
  }, {
    name: 'z9',
    id: '@id',
  }, {
    name: 'z2',
    id: '@id',
  }, {
    name: 'z10',
    id: '@id',
  }],
  data: [{
    name: '未完成',
    list: [{
      name: '供应商1',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商2',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商3',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商4',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商5',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商6',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商7',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商8',
      value: '@integer(2, 100)'
    }, {
      name: '供应商9',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商10',
      id: '@id',
      value: '@integer(2, 100)'
    }]
  }, {
    name: '已完成',
    list: [{
      name: '供应商1',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商2',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商3',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商4',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商5',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商6',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商7',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商8',
      value: '@integer(2, 100)'
    }, {
      name: '供应商9',
      id: '@id',
      value: '@integer(2, 100)'
    }, {
      name: '供应商10',
      id: '@id',
      value: '@integer(2, 100)'
    }]
  }]
}

let chart7Data = {
  selectData: [{
    name: '全部',
    id: '@id'
  }, {
    name: 'z9',
    id: '@id',
  }, {
    name: 'z2',
    id: '@id',
  }, {
    name: 'z10',
    id: '@id',
  }],
  data: [{
      "one": 1,
      "id": "402880a86e4463c5016e446bbddc36a8",
      "value": "17.5",
      "produnctName": null,
      "produnctId": null,
      "num": "17.5",
      "intNum": 0,
      "doubleNum": 17.5,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "gys001",
      "age": "0",
      "list": [],
      "jsondata": null
    },
    {
      "one": 1,
      "id": "402881e96ebff019016ec0031be336dc",
      "value": "16.5",
      "produnctName": null,
      "produnctId": null,
      "num": "16.5",
      "intNum": 0,
      "doubleNum": 16.5,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "122厂",
      "age": "0",
      "list": [],
      "jsondata": null
    }
  ]
}
let chart8Data = [{
  name: 'z9',
  list: [{
      name: '供应件',
      status: '已完成',
      value: '@integer(2, 100)'
    }, {
      name: '自制件',
      status: '已完成',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '超期',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '超期',
      value: '@integer(2, 100)'
    }, {
      name: '已完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    }, {
      name: '未完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    }
  ]
}, {
  name: 'z10',
  list: [{
      name: '供应件',
      status: '已完成',
      value: '@integer(2, 100)'
    }, {
      name: '自制件',
      status: '已完成',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '超期',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '超期',
      value: '@integer(2, 100)'
    },
    {
      name: '已完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    },
    {
      name: '未完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    }
  ]
}, {
  name: 'z11',
  list: [{
      name: '供应件',
      status: '已完成',
      value: '@integer(2, 100)'
    }, {
      name: '自制件',
      status: '已完成',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '处理中',
      value: '@integer(2, 100)'
    },
    {
      name: '供应件',
      status: '超期',
      value: '@integer(2, 100)'
    },
    {
      name: '自制件',
      status: '超期',
      value: '@integer(2, 100)'
    },
    {
      name: '已完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    },
    {
      name: '未完成',
      status: 'AOG',
      value: '@integer(2, 100)'
    }
  ]
}]

let chart9Data = [{
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}, {
  name: '件号' + '@integer(2, 10)',
  id: '@id',
  value: '@integer(2, 100)'
}]
let chart10Data = {
  selectData: [{
    name: '全部',
    id: '@id'
  }, {
    name: '值班经理批办',
    id: '@id',
  }, {
    name: '科室主任批办',
    id: '@id',
  }, {
    name: '业务人员办理',
    id: '@id',
  }],
  data: [{
      time: '1d',
      name: '1天',
      value: '@integer(2, 100)'
    },
    {
      time: '2d',
      name: '2天',
      value: '@integer(2, 100)'
    },
    {
      time: '3d',
      name: '3天',
      value: '@integer(2, 100)'
    },
    {
      time: '1w',
      name: '1周',
      value: '@integer(2, 100)'
    },
    {
      time: '1m',
      name: '1月',
      value: '@integer(2, 100)'
    }
  ]
}

let chart11Data = {
  selectData: [{
    name: '全部',
    id: '@id'
  }, {
    name: '客服经理审核',
    id: '@id',
  }, {
    name: '任务分派',
    id: '@id',
  }, {
    name: '办理',
    id: '@id',
  }, {
    name: '审校',
    id: '@id',
  }, {
    name: '审定',
    id: '@id',
  }],
  data: [{
      time: '1d',
      name: '1天',
      value: '@integer(2, 100)'
    },
    {
      time: '2d',
      name: '2天',
      value: '@integer(2, 100)'
    },
    {
      time: '3d',
      name: '3天',
      value: '@integer(2, 100)'
    },
    {
      time: '1w',
      name: '1周',
      value: '@integer(2, 100)'
    },
    {
      time: '1m',
      name: '1月',
      value: '@integer(2, 100)'
    }
  ]
}

let chart12Data = {
  selectData: [{
    name: '全部',
    id: '@id'
  }, {
    name: '航材计划员核对',
    id: '@id',
  }, {
    name: '生成汇签',
    id: '@id',
  }, {
    name: '采购汇签',
    id: '@id',
  }, {
    name: '客服经理审批',
    id: '@id',
  }, {
    name: '生成部办理',
    id: '@id',
  }, {
    name: '采购部办理',
    id: '@id',
  }],
  data: [{
      time: '1d',
      name: '1天',
      value: '@integer(2, 100)'
    },
    {
      time: '5d',
      name: '2天',
      value: '@integer(2, 100)'
    },
    {
      time: '1w',
      name: '1周',
      value: '@integer(2, 100)'
    },
    {
      time: '2w',
      name: '2周',
      value: '@integer(2, 100)'
    },
    {
      time: '1m',
      name: '1月',
      value: '@integer(2, 100)'
    }
  ]
}


let chartColData = {
  "pieData": [{
      "one": 1,
      "id": "未完成",
      "value": "2",
      "produnctName": null,
      "produnctId": null,
      "num": "2",
      "intNum": 2,
      "doubleNum": 0.0,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "未完成",
      "age": "25.0",
      "list": [{
        "one": 1,
        "id": "未通知",
        "value": "2",
        "produnctName": null,
        "produnctId": null,
        "num": "2",
        "intNum": 2,
        "doubleNum": 0.0,
        "longNum": 0,
        "sourceData": [],
        "dataType": null,
        "index": 2147483647,
        "name": "未通知",
        "age": "100.0",
        "list": [],
        "jsondata": null
      }],
      "jsondata": null
    },
    {
      "one": 1,
      "id": "已完成",
      "value": "6",
      "produnctName": null,
      "produnctId": null,
      "num": "6",
      "intNum": 6,
      "doubleNum": 0.0,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "已完成",
      "age": "75.0",
      "list": [{
          "one": 1,
          "id": "已通知",
          "value": "1",
          "produnctName": null,
          "produnctId": null,
          "num": "1",
          "intNum": 1,
          "doubleNum": 0.0,
          "longNum": 0,
          "sourceData": [],
          "dataType": null,
          "index": 2147483647,
          "name": "已通知",
          "age": "16.67",
          "list": [],
          "jsondata": null
        },
        {
          "one": 1,
          "id": "未通知",
          "value": "5",
          "produnctName": null,
          "produnctId": null,
          "num": "5",
          "intNum": 5,
          "doubleNum": 0.0,
          "longNum": 0,
          "sourceData": [],
          "dataType": null,
          "index": 2147483647,
          "name": "未通知",
          "age": "83.33",
          "list": [],
          "jsondata": null
        }
      ],
      "jsondata": null
    }
  ],
  "titleData": {
    "todo": 14,

  },
  "lineData": [{
      "one": 1,
      "id": "4B875E0EE55548CD8D4F6391E4BFD219",
      "value": "1",
      "produnctName": null,
      "produnctId": null,
      "num": "1",
      "intNum": 1,
      "doubleNum": 0.0,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "随机文件室",
      "age": "50.0",
      "list": [],
      "jsondata": null
    },
    {
      "one": 1,
      "id": "D13BE60D339D4153B957A6827F8A4F55",
      "value": "1",
      "produnctName": null,
      "produnctId": null,
      "num": "1",
      "intNum": 1,
      "doubleNum": 0.0,
      "longNum": 0,
      "sourceData": [],
      "dataType": null,
      "index": 2147483647,
      "name": "航材支援室",
      "age": "50.0",
      "list": [],
      "jsondata": null
    }
  ]
}


export default {
  'get /api/getLargeClassData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: largeData,
      })
    }, 20)
  },
  'post /api/postCustomerData': function(req, res, next) {
    if (req.body.customerBigTypeId == "1") {
      if (req.body.highOrganId == '0002') {
        setTimeout(() => {
          res.json({
            code: 200,
            result: customerArr11,
          })
        }, 20)
      } else {
        setTimeout(() => {
          res.json({
            code: 200,
            result: customerArr1,
          })
        }, 20)
      }
    } else if (req.body.customerBigTypeId == "00002") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: customerArr2,
        })
      }, 20)
    } else if (req.body.customerBigTypeId == "00003") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: customerArr3,
        })
      }, 20)
    }

  },
  'post /api/postNameOrganData': function(req, res, next) {
    if (req.body.customerBigTypeId == "1") {
      if (req.body.customerTypeId == '0002') {
        setTimeout(() => {
          res.json({
            code: 200,
            result: organArr11,
          })
        }, 20)
      } else {
        setTimeout(() => {
          res.json({
            code: 200,
            result: organArr1,
          })
        }, 20)
      }

    } else if (req.body.customerBigTypeId == "00002") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: organArr2,
        })
      }, 20)
    } else if (req.body.customerBigTypeId == "00003") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: organArr3,
        })
      }, 20)
    }
  },
  'post /api/postMapData': function(req, res, next) {
    if (req.body.customerBigTypeId == "00003") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: Mock.mock(worldData),
        })
      }, 20)
    } else if (req.body.customerBigTypeId == "00002") {
      setTimeout(() => {
        res.json({
          code: 200,
          result: Mock.mock(minData),
        })
      }, 20)
    } else {
      if (req.body.highOrganId == '0005') {
        setTimeout(() => {
          res.json({
            code: 200,
            result: Mock.mock(zoneData2),
          })
        }, 20)
      } else {
        setTimeout(() => {
          res.json({
            code: 200,
            result: Mock.mock(zoneData),
          })
        }, 20)
      }

    }

  },
  'post /api/postListData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        dataType: 'highOrgan',
        result: Mock.mock(listData),
      })
    }, 20)
  },
  'post /api/postListTableData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(listTableData),
      })
    }, 20)
  },
  'post /api/getTotalData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(totalData),
      })
    }, 20)
  },
  'post /api/postOutData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(outData),
      })
    }, 20)
  },

  'post /api/annualDelivery': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(annualDelivery),
      })
    }, 20)
  },
  'post /api/demandTask': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(demandTask),
      })
    }, 20)
  },
  'post /api/postPersonData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(personData),
      })
    }, 20)
  },
  'post /api/postCommissioningData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(commissioningData),
      })
    }, 20)
  },
  'post /api/chartPlaneData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart1Data),
      })
    }, 20)
  },
  'post /api/chartAviationMaterialsData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart2Data),
      })
    }, 20)
  },
  'post /api/chartLifepartData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart3Data),
      })
    }, 20)
  },
  'post /api/chartPlanestateData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart4Data),
      })
    }, 20)
  },
  'post /api/chartPlaneerroData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart5Data),
      })
    }, 20)
  },
  'post /api/chartCusterrData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart6Data),
      })
    }, 20)
  },
  'post /api/chartRevisTimeData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart7Data),
      })
    }, 20)
  },
  'post /api/chartCommissioningData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart8Data),
      })
    }, 20)
  },
  'post /api/chartAmClaimSheeData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart9Data),
      })
    }, 20)
  },
  'post /api/chartBpmHistData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chart10Data),
      })
    }, 20)
  },
  'post /api/postChartColData': function(req, res, next) {
    setTimeout(() => {
      res.json({
        code: 200,
        result: Mock.mock(chartColData),
      })
    }, 20)
  },
}
//世界地图
let worldData = {
  world: {
    total: 200,
    data: [{
        "code": "GL",
        total: '@integer(20, 100)',
        user: '@cword(5,8)',
        status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0],
        'type|5-8': ['@word(4)'],
        "name": "Greenland"
      },
      {
        "code": "SiH",
        total: '@integer(20, 100)',
        user: '@cword(5,8)',
        status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0],
        'type|5-8': ['@word(4)'],
        "name": "Scarborough Reef"
      },
      {
        "code": "BU",
        total: '@integer(20, 100)',
        user: '@cword(5,8)',
        status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'],
        'type|5-8': ['@word(4)'],
        "name": "Bajo Nuevo Bank (Petrel Is.)"
      },
      {
        "code": "LK",
        total: '@integer(20, 100)',
        user: '@cword(5,8)',
        status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'],
        'type|5-8': ['@word(4)'],
        "name": "Sri Lanka"
      }

    ]
  },
  servers: {
    data: [
      { "code": "VI", value: '@integer(1, 20)', "name": "United States Virgin Islands" },
      { "code": "CA", value: '@integer(1, 20)', "name": "Canada" }
    ]
  }
}
//地图数据
let zoneData = {
  users: {
    total: 15,
    data: [
      { id: '@id', name: "青岛", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "陆军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "阳泉", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "陆军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "贵阳", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "陆军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "西安", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "陆军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "榆林", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "陆军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 1], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "汉中", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "海军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 1], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "苏州", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "空军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 1], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "温州", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 1], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "杭州", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "杭州", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "杭州", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] }, { name: "太原", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "海军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "上海", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "空军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "北京", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "空军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "天津", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
    ]
  },
  highOrgans: {
    total: 5,
    data: [
      { id: '@id', name: "大庆", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "西安", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "呼和浩特", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { id: '@id', name: "合肥", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
    ]
  },
  servers: {
    total: 25,
    data: [{ "name": "北京", value: '@integer(1, 20)' },
      { "name": "天津", value: '@integer(1, 20)' },
      { "name": "石家庄", value: '@integer(1, 20)' },
      { "name": "重庆", value: '@integer(1, 20)' },
      { "name": "成都", value: '@integer(1, 20)' },
      { "name": "贵阳", value: '@integer(1, 20)' },
      { "name": "昆明", value: '@integer(1, 20)' },
      { "name": "拉萨", value: '@integer(1, 20)' },
      { "name": "西安", value: '@integer(1, 20)' },
      { "name": "兰州", value: '@integer(1, 20)' },
      { "name": "西宁", value: '@integer(1, 20)' },
      { "name": "银川", value: '@integer(1, 20)' },
      { "name": "乌鲁木齐", value: '@integer(1, 20)' }
    ]
  },
}

let zoneData2 = {
  users: {
    total: 15,
    data: [
      { name: "北京", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "空军", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { name: "天津", total: '@integer(20, 100)', user: '@cword(5,8)', "dataType": "武警", status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
    ]
  },
  highOrgans: {
    total: 5,
    data: [
      { name: "北京", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
    ]
  },
  servers: {
    total: 25,
    data: [{ "name": "北京", value: '@integer(1, 20)' },
      { "name": "天津", value: '@integer(1, 20)' },
      { "name": "石家庄", value: '@integer(1, 20)' },
      { "name": "重庆", value: '@integer(1, 20)' },
      { "name": "成都", value: '@integer(1, 20)' },
      { "name": "贵阳", value: '@integer(1, 20)' },
      { "name": "昆明", value: '@integer(1, 20)' },
      { "name": "拉萨", value: '@integer(1, 20)' },
      { "name": "西安", value: '@integer(1, 20)' },
      { "name": "兰州", value: '@integer(1, 20)' },
      { "name": "西宁", value: '@integer(1, 20)' },
      { "name": "银川", value: '@integer(1, 20)' },
      { "name": "乌鲁木齐", value: '@integer(1, 20)' }
    ]
  },
}

//地图数据
let minData = {
  min: {
    total: 25,
    data: [
      { name: "石家庄", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { name: "黑河", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "沈阳", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "南京", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "拉萨", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "呼和浩特", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "合肥", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "西安", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "福州", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "石家庄", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "南昌", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "北京", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "广州", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "北京", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { name: "天津", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "上海", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "武汉", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "鹤岗", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "哈尔滨", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "威海", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "南昌", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "海口", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "厦门", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "大庆", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "鸡西", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "长春", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "大连", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', 0], 'type|5-8': ['@word(4)'] },
      { name: "锦州", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "葫芦岛", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
      { name: "", total: '@integer(20, 100)', user: '@cword(5,8)', status: ['@integer(1, 20)', '@integer(0, 10)', '@integer(5, 15)', '@integer(0, 5)', '@integer(0, 5)'], 'type|5-8': ['@word(4)'] },
    ]
  },
  servers: {
    data: [
      { "name": "石家庄", value: '@integer(1, 20)' },
      { "name": "重庆", value: '@integer(1, 20)' },
      { "name": "成都", value: '@integer(1, 20)' },
      { "name": "贵阳", value: '@integer(1, 20)' },
      { "name": "昆明", value: '@integer(1, 20)' },
      { "name": "拉萨", value: '@integer(1, 20)' },
      { "name": "西安", value: '@integer(1, 20)' },
      { "name": "兰州", value: '@integer(1, 20)' },
      { "name": "西宁", value: '@integer(1, 20)' },
      { "name": "银川", value: '@integer(1, 20)' },
      { "name": "乌鲁木齐", value: '@integer(1, 20)' }
    ]
  },
}
