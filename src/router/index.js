import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * *注意:子菜单只在路由子菜单时出现。长度> = 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 * !详情见     :https://panjiachen.github.io/vue-element- admin-site/guide/essentials/rouand nav.html
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * *隐藏:true如果设置为true，项目将不会显示在侧栏中(默认为false)
 * alwaysShow: true               if set true, will always show the root menu
 * ?alwaysShow:true               如果设置为true，将始终显示根菜单
 *                                if not set alwaysShow, when item has more than one children route,
 * *如果不设置alwaysShow，当项目有多个子路由时，
 *                                it will becomes nested mode, otherwise not show the root menu
 * !它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * ?重定向:noRedirect如果设置noRedirect将不会在面包屑重定向
 * name:'router-name'             这个名字被<keep-alive>(必须设置!!)
 * meta : {
    roles: ['admin','editor']    控制页面角色(可以设置多个角色)
    title: 'title'               侧栏和breadcrumb中显示的名称(推荐集)
    icon: 'svg-name'             图标显示在侧栏
    breadcrumb: false            则该项将隐藏在breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置了路径，侧边栏将突出显示您设置的路径
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页
 * 所有角色都可以访问
 * 如果要权限限制要使用
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 * 
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    }, {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    //? 默认首页
    {
        path: '/',
        component: Layout,
        redirect: '/index',
        children: [{
            path: 'index',
            name: 'index',
            component: () =>
                import ('@/views/index'),
            meta: {
                title: '首页',
                icon: 'dashboard'
            }
        }]
    },

    {
        path: '/member',
        component: Layout,
        redirect: '/member/memberManagement',
        name: 'member',
        meta: {
            title: '会员信息',
            icon: 'example'
        },
        children: [{
            path: 'memberManagement',
            name: 'memberManagement',
            component: () =>
                import ('@/views/member/memberManagement'),
            meta: {
                title: '会员管理',
                icon: 'form'
            }
        }, ]
    },

    // {
    //     path: '/resource',
    //     component: Layout,
    //     redirect: '/resource/destination',
    //     name: 'resource',
    //     meta: { title: '系统资源', icon: 'five' },
    //     children: [{
    //             path: 'destination',
    //             name: 'destination',
    //             component: () =>
    //                 import ('@/views/resource/destination'),
    //             meta: { title: '目的地', icon: 'eye' }
    //         },
    //         {
    //             path: 'boutiqueLine',
    //             name: 'boutiqueLine',
    //             component: () =>
    //                 import ('@/views/resource/boutiqueLine'),
    //             meta: { title: '精品路线', icon: 'eye-open' }
    //         },
    //         {
    //             path: 'culture',
    //             name: 'culture',
    //             component: () =>
    //                 import ('@/views/resource/culture'),
    //             meta: { title: '文化', icon: 'culture' }
    //         },
    //         {
    //             path: 'strategy',
    //             name: 'strategy',
    //             component: () =>
    //                 import ('@/views/resource/strategy'),
    //             meta: { title: '攻略', icon: 'link' }
    //         },
    //         {
    //             path: 'travelNotes',
    //             name: 'travelNotes',
    //             component: () =>
    //                 import ('@/views/resource/travelNotes'),
    //             meta: { title: '游记', icon: 'nested' }
    //         },
    //         {
    //             path: 'information',
    //             name: 'information',
    //             component: () =>
    //                 import ('@/views/resource/information'),
    //             meta: { title: '资讯', icon: 'password' }
    //         }
    //     ]
    // },
    // {
    //     path: '/commercial',
    //     component: Layout,
    //     redirect: '/commercial/commercialManagement',
    //     name: 'commercial',
    //     meta: { title: '供应商户', icon: 'example' },
    //     children: [{
    //             path: 'commercialManagement',
    //             name: 'commercialManagement',
    //             component: () =>
    //                 import ('@/views/commercial/commercialManagement'),
    //             meta: { title: '供应商管理' }
    //         },
    //         {
    //             path: 'commercialUser',
    //             name: 'commercialUser',
    //             component: () =>
    //                 import ('@/views/commercial/commercialUser'),
    //             meta: { title: '供应商用户' }
    //         },
    //         {
    //             path: 'commercialRole',
    //             name: 'commercialRole',
    //             component: () =>
    //                 import ('@/views/commercial/commercialRole'),
    //             meta: { title: '供应商角色' }
    //         },
    //         {
    //             path: 'commercialPower',
    //             name: 'commercialPower',
    //             component: () =>
    //                 import ('@/views/commercial/commercialPower'),
    //             meta: { title: '供应商权限' }
    //         },
    //     ]
    // },
    {
        path: '/scenic',
        component: Layout,
        redirect: '/scenic/scenicManagement',
        name: 'scenic',
        meta: {
            title: '旅游景点',
            icon: 'scenic'
        },
        children: [{
            path: 'scenicManagement',
            name: 'scenicManagement',
            component: () =>
                import ('@/views/scenic/scenicManagement'),
            meta: {
                title: '景点管理',
                icon: 'table'
            }
        }, {
            path: 'ticketManagement',
            name: 'ticketManagement',
            component: () =>
                import ('@/views/scenic/ticketManagement'),
            meta: {
                title: '门票管理',
                icon: 'user'
            }
        }, {
            path: 'scenicOrderManagement',
            name: 'scenicOrderManagement',
            component: () =>
                import ('@/views/scenic/scenicOrderManagement'),
            meta: {
                title: '订单管理',
                icon: 'tree'
            }
        }, {
            path: 'ticketStock',
            name: 'ticketStock',
            component: () =>
                import ('@/views/scenic/ticketStock'),
            meta: {
                title: '门票存量',
                icon: 'setting-d'
            }
        }, {
            path: 'liveStreaming',
            name: 'liveStreaming',
            component: () =>
                import ('@/views/scenic/liveStreaming'),
            meta: {
                title: '景区直播',
                icon: 'tree'
            }
        }, ]
    }, {
        path: '/itinerary',
        component: Layout,
        redirect: '/itinerary/agencyManagement',
        name: 'itinerary',
        meta: {
            title: '旅行路线',
            icon: 'line'
        },
        children: [{
            path: 'agencyManagement',
            name: 'agencyManagement',
            component: () =>
                import ('@/views/itinerary/agencyManagement'),
            meta: {
                title: '旅行社管理',
                icon: 'table'
            }
        }, {
            path: 'tourismProduct',
            name: 'tourismProduct',
            component: () =>
                import ('@/views/itinerary/tourismProduct'),
            meta: {
                title: '旅游产品',
                icon: 'tree'
            }
        }, {
            path: 'orderManagement',
            name: 'orderManagement',
            component: () =>
                import ('@/views/itinerary/orderManagement'),
            meta: {
                title: '订单管理',
                icon: 'tree'
            }
        }, {
            path: 'travelBooking',
            name: 'travelBooking',
            component: () =>
                import ('@/views/itinerary/travelBooking'),
            meta: {
                title: '旅行预约',
                icon: 'tree'
            }
        }, ]
    }, {
        path: '/hotel',
        component: Layout,
        redirect: '/hotel/hotelManagement',
        name: 'hotel',
        meta: {
            title: '民宿酒店',
            icon: 'hotel'
        },
        children: [{
            path: 'hotelManagement',
            name: 'hotelManagement',
            component: () =>
                import ('@/views/hotel/hotelManagement'),
            meta: {
                title: '酒店管理',
                icon: 'table'
            }
        }, {
            path: 'roomManagement',
            name: 'roomManagement',
            component: () =>
                import ('@/views/hotel/roomManagement'),
            meta: {
                title: '房型管理',
                icon: 'tree'
            }
        }, {
            path: 'hotelOrderManagement',
            name: 'hotelOrderManagement',
            component: () =>
                import ('@/views/hotel/hotelOrderManagement'),
            meta: {
                title: '订单管理',
                icon: 'tree'
            }
        }, {
            path: 'bookingManagement',
            name: 'bookingManagement',
            component: () =>
                import ('@/views/hotel/bookingManagement'),
            meta: {
                title: '预约管理',
                icon: 'tree'
            }
        }, ]
    }, {
        path: '/live',
        component: Layout,
        redirect: '/live/liveManagement',
        name: 'live',
        meta: {
            title: '直播',
            icon: 'tree'
        },
        children: [{
            path: 'liveManagement',
            name: 'liveManagement',
            component: () =>
                import ('@/views/live/liveManagement'),
            meta: {
                title: '直播管理',
                icon: 'restaurant'
            }
        }, ]
    }, {
        path: '/data',
        component: Layout,
        redirect: '/data/dataStatistics',
        name: 'data',
        meta: {
            title: '数据统计',
            icon: 'bill'
        },
        children: [{
            path: 'dataStatistics',
            name: 'dataStatistics',
            component: () =>
                import ('@/views/data/dataStatistics'),
            meta: {
                title: '数据统计',
                icon: 'bill'
            }
        }, ]
    },
    // {
    //     path: '/specialty',
    //     component: Layout,
    //     redirect: '/specialty/specialtyShops',
    //     name: 'specialty',
    //     meta: { title: '特色产品', icon: 'specialty' },
    //     children: [{
    //             path: 'specialtyShops',
    //             name: 'specialtyShops',
    //             component: () =>
    //                 import ('@/views/specialty/specialtyShops'),
    //             meta: { title: '特产店铺', icon: 'table' }
    //         },
    //         {
    //             path: 'localProducts',
    //             name: 'localProducts',
    //             component: () =>
    //                 import ('@/views/specialty/localProducts'),
    //             meta: { title: '特产商品', icon: 'tree' }
    //         },
    //         {
    //             path: 'specialtyOrderManagement',
    //             name: 'specialtyOrderManagement',
    //             component: () =>
    //                 import ('@/views/specialty/specialtyOrderManagement'),
    //             meta: { title: '订单管理', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/restaurant',
    //     component: Layout,
    //     redirect: '/restaurant/restaurantManagement',
    //     name: 'restaurant',
    //     meta: { title: '餐馆美食', icon: 'example' },
    //     children: [{
    //             path: 'restaurantManagement',
    //             name: 'restaurantManagement',
    //             component: () =>
    //                 import ('@/views/restaurant/restaurantManagement'),
    //             meta: { title: '饭店管理', icon: 'restaurant' }
    //         },
    //         {
    //             path: 'foodProducts',
    //             name: 'foodProducts',
    //             component: () =>
    //                 import ('@/views/restaurant/foodProducts'),
    //             meta: { title: '美食产品', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/entertainment',
    //     component: Layout,
    //     redirect: '/entertainment/entertainmentVenues',
    //     name: 'entertainment',
    //     meta: { title: '休闲娱乐', icon: 'entertainment' },
    //     children: [{
    //             path: 'entertainmentVenues',
    //             name: 'entertainmentVenues',
    //             component: () =>
    //                 import ('@/views/entertainment/entertainmentVenues'),
    //             meta: { title: '娱乐场所', icon: 'table' }
    //         },
    //         {
    //             path: 'entertainmentProject',
    //             name: 'entertainmentProject',
    //             component: () =>
    //                 import ('@/views/entertainment/entertainmentProject'),
    //             meta: { title: '娱乐项目', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/leasing',
    //     component: Layout,
    //     redirect: '/leasing/leasingCompany',
    //     name: 'leasing',
    //     meta: { title: '便民租车', icon: 'car' },
    //     children: [{
    //             path: 'leasingCompany',
    //             name: 'leasingCompany',
    //             component: () =>
    //                 import ('@/views/leasing/leasingCompany'),
    //             meta: { title: '租赁公司', icon: 'table' }
    //         },
    //         {
    //             path: 'LeaseGoods',
    //             name: 'LeaseGoods',
    //             component: () =>
    //                 import ('@/views/leasing/LeaseGoods'),
    //             meta: { title: '租赁商品', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/merchantBill',
    //     component: Layout,
    //     redirect: '/merchantBill/specialtyShops',
    //     name: 'merchantBill',
    //     meta: { title: '商户账单', icon: 'bill' },
    //     children: [{
    //             path: 'flowRecord',
    //             name: 'flowRecord',
    //             component: () =>
    //                 import ('@/views/merchantBill/flowRecord'),
    //             meta: { title: '流水记录', icon: 'table' }
    //         },
    //         {
    //             path: 'billingRecords',
    //             name: 'billingRecords',
    //             component: () =>
    //                 import ('@/views/merchantBill/billingRecords'),
    //             meta: { title: '账单记录', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/customization',
    //     component: Layout,
    //     redirect: '/customization/customOrder',
    //     name: 'customization',
    //     meta: { title: '旅行定制', icon: 'example' },
    //     children: [{
    //         path: 'customOrder',
    //         name: 'customOrder',
    //         component: () =>
    //             import ('@/views/customization/customOrder'),
    //         meta: { title: '定制订单', icon: 'table' }
    //     }]
    // },
    // {
    //     path: '/website',
    //     component: Layout,
    //     redirect: '/website/pageContent',
    //     name: 'website',
    //     meta: { title: '网站内容', icon: 'web' },
    //     children: [{
    //             path: 'pageContent',
    //             name: 'pageContent',
    //             component: () =>
    //                 import ('@/views/website/pageContent'),
    //             meta: { title: '页面内容', icon: 'table' }
    //         },
    //         {
    //             path: 'photoManagement',
    //             name: 'photoManagement',
    //             component: () =>
    //                 import ('@/views/website/photoManagement'),
    //             meta: { title: '相册管理', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/personalCenter',
    //     component: Layout,
    //     redirect: '/personalCenter/myMessage',
    //     name: 'personalCenter',
    //     meta: { title: '个人中心', icon: 'user' },
    //     children: [{
    //             path: 'myMessage',
    //             name: 'myMessage',
    //             component: () =>
    //                 import ('@/views/personalCenter/myMessage'),
    //             meta: { title: '我的消息', icon: 'table' }
    //         },
    //         {
    //             path: 'changeInformation',
    //             name: 'changeInformation',
    //             component: () =>
    //                 import ('@/views/personalCenter/changeInformation'),
    //             meta: { title: '修改信息', icon: 'tree' }
    //         },
    //         {
    //             path: 'changePassword',
    //             name: 'changePassword',
    //             component: () =>
    //                 import ('@/views/personalCenter/changePassword'),
    //             meta: { title: '修改密码', icon: 'tree' }
    //         },
    //     ]
    // },
    // {
    //     path: '/systemManagement',
    //     component: Layout,
    //     redirect: '/systemManagement/userManagement',
    //     name: 'systemManagement',
    //     meta: { title: '系统管理', icon: 'systemManagement' },
    //     children: [{
    //             path: 'userManagement',
    //             name: 'userManagement',
    //             component: () =>
    //                 import ('@/views/systemManagement/userManagement'),
    //             meta: { title: '用户管理', icon: 'table' }
    //         },
    //         {
    //             path: 'rightsGroup',
    //             name: 'rightsGroup',
    //             component: () =>
    //                 import ('@/views/systemManagement/rightsGroup'),
    //             meta: { title: '权限分组', icon: 'tree' }
    //         },
    //         {
    //             path: 'institutionalFramework',
    //             name: 'institutionalFramework',
    //             component: () =>
    //                 import ('@/views/systemManagement/institutionalFramework'),
    //             meta: { title: '组织机构', icon: 'tree' }
    //         },
    //         {
    //             path: 'functionModule',
    //             name: 'functionModule',
    //             component: () =>
    //                 import ('@/views/systemManagement/functionModule'),
    //             meta: { title: '功能模块', icon: 'tree' }
    //         },
    //         {
    //             path: 'dataDictionary',
    //             name: 'dataDictionary',
    //             component: () =>
    //                 import ('@/views/systemManagement/dataDictionary'),
    //             meta: { title: '数据字典', icon: 'tree' }
    //         },
    //         {
    //             path: 'operatingParameter',
    //             name: 'operatingParameter',
    //             component: () =>
    //                 import ('@/views/systemManagement/operatingParameter'),
    //             meta: { title: '运行参数', icon: 'tree' }
    //         },
    //         {
    //             path: 'messagerie',
    //             name: 'messagerie',
    //             component: () =>
    //                 import ('@/views/systemManagement/messagerie'),
    //             meta: { title: '站内消息', icon: 'tree' }
    //         },
    //         {
    //             path: 'applicationManagement',
    //             name: 'applicationManagement',
    //             component: () =>
    //                 import ('@/views/systemManagement/applicationManagement'),
    //             meta: { title: '应用管理', icon: 'tree' }
    //         },
    //     ]
    // },
    // 多层嵌套
    // {
    //     path: '/nested',
    //     component: Layout,
    //     redirect: '/nested/menu1',
    //     name: 'Nested',
    //     meta: {
    //         title: '嵌套',
    //         icon: 'nested'
    //     },
    //     children: [{
    //             path: 'menu1',
    //             component: () =>
    //                 import ('@/views/nested/menu1/index'), // Parent router-view
    //             name: 'Menu1',
    //             meta: { title: '菜单1' },
    //             children: [{
    //                     path: 'menu1-1',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-1'),
    //                     name: 'Menu1-1',
    //                     meta: { title: '菜单1-1' }
    //                 },
    //                 {
    //                     path: 'menu1-2',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-2'),
    //                     name: 'Menu1-2',
    //                     meta: { title: '菜单1-2' },
    //                     children: [{
    //                             path: 'menu1-2-1',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
    //                             name: 'Menu1-2-1',
    //                             meta: { title: '菜单1-2-1' }
    //                         },
    //                         {
    //                             path: 'menu1-2-2',
    //                             component: () =>
    //                                 import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
    //                             name: 'Menu1-2-2',
    //                             meta: { title: '菜单1-2-2' }
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     path: 'menu1-3',
    //                     component: () =>
    //                         import ('@/views/nested/menu1/menu1-3'),
    //                     name: 'Menu1-3',
    //                     meta: { title: '菜单1-3' }
    //                 }
    //             ]
    //         },
    //         {
    //             path: 'menu2',
    //             component: () =>
    //                 import ('@/views/nested/menu2/index'),
    //             meta: { title: '菜单2' }
    //         }
    //     ]
    // },
    // 外链
    // {
    //     path: 'external-link',
    //     component: Layout,
    //     children: [{
    //         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //         meta: { title: 'External Link', icon: 'link' }
    //     }]
    // },


    //! 404页面必须放在最后
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router