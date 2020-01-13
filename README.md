<p align="center">
  <a href="https://github.com/NidhoggDJoking" target="_blank">
    <img width="120" src="https://raw.githubusercontent.com/NidhoggDJoking/VueCli/master/src/image/Logo/snoopy.png" alt="logo">
  </a>
</p>

<h1 align="center">Over the Evolution</h1>

<p align="center">
  <a href="https://cn.vuejs.org" target="_blank">
    <img src="https://img.shields.io/badge/Vue-2.6.10-green">
  </a>
  <a href="https://element.eleme.cn/#/zh-CN" target="_blank">
    <img src="https://img.shields.io/badge/Element-2.13.0-informational">
  </a>
  <a href="https://vuex.vuejs.org/zh" target="_blank">
    <img src="https://img.shields.io/badge/vuex-3.1.0-blueviolet">
  </a>
  <a href="http://www.axios-js.com" target="_blank">
    <img src="https://img.shields.io/badge/axios-0.18.1-9cf">
  </a>
</p>

### 日志

```
npm install less less-loader --save-dev

安装了less预编译

它自身原来也支持是Sass

ElementUI v2.7.2 => v2.13.0

utils/get-page-title.js 控制title内容

```

### 目录结构

```
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── plop-templates             # 基本模板
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── lang                   # 国际化 language
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── .travis.yml                # 自动化CI配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json
```
#### 全局样式
```
├── styles
│   ├── btn.scss                 # 按钮样式
│   ├── element-ui.scss          # 全局自定义 element-ui 样式
│   ├── index.scss               # 全局通用样式
│   ├── mixin.scss               # 全局mixin
│   ├── sidebar.scss             # sidebar css
│   ├── transition.scss          # vue transition 动画
│   └── variables.scss           # 全局变量
```
### 页面详情

```
─── view                               # 页面
│   ├── index                          # 首页
│   ├── member                         # 会员信息
│   │    └── memberManagement          # 会员管理
│   ├── resource                       # 系统资源
│   │    ├── destination               # 目的地
│   │    ├── boutiqueLine              # 精品路线
│   │    ├── culture                   # 文化
│   │    ├── strategy                  # 攻略
│   │    ├── travelNotes               # 游记
│   │    └── information               # 资讯
│   ├── commercial                     # 供应商户
│   │    ├── commercialManagement      # 供应商管理
│   │    ├── commercialUser            # 供应商用户
│   │    ├── commercialRole            # 供应商角色
│   │    └── commercialPower           # 供应商权限
│   ├── scenic                         # 旅游景点
│   │    ├── scenicManagement          # 景点管理
│   │    ├── ticketManagement          # 门票管理
│   │    ├── scenicOrderManagement     # 订单管理
│   │    ├── ticketStock               # 门票存量
│   │    └── liveStreaming             # 景区直播
│   ├── itinerary                      # 旅行路线
│   │    ├── agencyManagement          # 旅行社管理
│   │    ├── tourismProduct            # 旅游产品
│   │    ├── orderManagement           # 订单管理
│   │    └── travelBooking             # 旅行预约
│   ├── hotel                          # 民宿酒店
│   │    ├── hotelManagement           # 酒店管理
│   │    ├── roomManagement            # 房型管理
│   │    ├── hotelOrderManagement      # 订单管理
│   │    └── bookingManagement         # 预约管理
│   ├── specialty                      # 特色产品
│   │    ├── specialtyShops            # 特产店铺
│   │    ├── localProducts             # 特产商品
│   │    └── specialtyOrderManagement  # 订单管理
│   ├── restaurant                     # 餐馆美食
│   │    ├── restaurantManagement      # 饭店管理
│   │    └── foodProducts              # 美食产品
│   ├── entertainment                  # 休闲娱乐
│   │    ├── entertainmentVenues       # 娱乐场所
│   │    └── entertainmentProject      # 娱乐项目
│   ├── leasing                        # 便民租车
│   │    ├── leasingCompany            # 租赁公司
│   │    └── LeaseGoods                # 租赁商品
│   ├── merchantBill                   # 商户账单
│   │    ├── flowRecord                # 流水记录
│   │    └── billingRecords            # 账单记录
│   ├── customization                  # 旅行定制
│   │    └── customOrder               # 定制订单
│   ├── website                        # 网站内容
│   │    ├── pageContent               # 页面内容
│   │    └── photoManagement           # 相册管理
│   ├── personalCenter                 # 个人中心
│   │    ├── myMessage                 # 我的消息
│   │    ├── changeInformation         # 修改信息
│   │    └── changePassword            # 修改密码
│   └── systemManagement               # 系统管理
│        ├── userManagement            # 用户管理
│        ├── rightsGroup               # 权限分组
│        ├── institutionalFramework    # 组织机构
│        ├── functionModule            # 功能模块
│        ├── dataDictionary            # 数据字典
│        ├── operatingParameter        # 运行参数
│        ├── messagerie                # 站内消息
         └── applicationManagement     # 应用管理

```
### 关于环境

```

不要乱起名，也无需专门手动控制加载哪个文件

.env 全局默认配置文件，不论什么环境都会加载合并

.env.development 开发环境下的配置文件

.env.production  生产环境下的配置文件

注意：属性名必须以VUE_APP_开头，比如VUE_APP_XXX

# 打包正式环境
 npm run build:prod

# 打包预发布环境
 npm run build:stage

```

### 个人 

```
Navbar 是头部

此项目基于element UI

layout/components 是通用的

左边菜单 在router/index.js里配置

mock里是测试数据 包括用户信息和表单表格里的数据

没采用权限限制的路由模式当然我还是做了两手准备找到根目录permission.js文件搜索权限限制

el-table 表头隐藏 :show-header="false"

el-table在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。
可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。
可以使用sort-method或者sort-by使用自定义的排序规则。
如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。
在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理

```

