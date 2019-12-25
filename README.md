左边菜单 在router/index.js里配置

mock里是测试数据 包括用户信息和表单表格里的数据

layout/components 是通用的

Navbar 是头部

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
│   │    ├── orderManagement           # 订单管理
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
│   │    ├── orderManagement           # 订单管理
│   │    └── bookingManagement         # 预约管理
│   ├── specialty                      # 特色产品
│   │    ├── specialtyShops            # 特产店铺
│   │    ├── localProducts             # 特产商品
│   │    └── orderManagement           # 订单管理
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
│   │    ├── specialtyShops            # 流水记录
│   │    └── localProducts             # 账单记录
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