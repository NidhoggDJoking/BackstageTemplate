import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }

  *注意:子菜单只在路由子菜单时出现。长度> = 1
*详情见:https://panjiachen.github.io/vue-element- admin-site/guide/essentials/rouand nav.html
*隐藏:true如果设置为true，项目将不会显示在侧栏中(默认为false)
* alwaysShow: true如果设置为true，将始终显示根菜单
*如果不设置alwaysShow，当项目有多个子路由时，
*它将成为嵌套模式，否则不显示根菜单
*重定向:noRedirect如果设置noRedirect将不会在面包屑重定向
* name:'router-name'这个名字被<keep-alive>(必须设置!!)
* meta: {
角色:['admin'，'editor']控制页面角色(可以设置多个角色)
title: 'title'侧栏和breadcrumb中显示的名称(推荐集)
图标:'svg-name'图标显示在侧栏
如果设置为false，则该项将隐藏在breadcrumb中(默认为true)
activeMenu: '/example/list'如果设置了路径，侧边栏将突出显示您设置的路径
}
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },

    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    //? 默认首页
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            meta: { title: '仪表盘', icon: 'dashboard' }
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: { title: '例子', icon: 'example' },
        children: [{
                path: 'table',
                name: 'Table',
                component: () =>
                    import ('@/views/table/index'),
                meta: { title: '表格', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'Tree',
                component: () =>
                    import ('@/views/tree/index'),
                meta: { title: '树状', icon: 'tree' }
            }
        ]
    },

    {
        path: '/form',
        component: Layout,
        children: [{
            path: 'index',
            name: 'Form',
            component: () =>
                import ('@/views/form/index'),
            meta: { title: '表单', icon: 'form' }
        }]
    },

    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
            title: '嵌套',
            icon: 'nested'
        },
        children: [{
                path: 'menu1',
                component: () =>
                    import ('@/views/nested/menu1/index'), // Parent router-view
                name: 'Menu1',
                meta: { title: '菜单1' },
                children: [{
                        path: 'menu1-1',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-1'),
                        name: 'Menu1-1',
                        meta: { title: '菜单1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-2'),
                        name: 'Menu1-2',
                        meta: { title: '菜单1-2' },
                        children: [{
                                path: 'menu1-2-1',
                                component: () =>
                                    import ('@/views/nested/menu1/menu1-2/menu1-2-1'),
                                name: 'Menu1-2-1',
                                meta: { title: '菜单1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () =>
                                    import ('@/views/nested/menu1/menu1-2/menu1-2-2'),
                                name: 'Menu1-2-2',
                                meta: { title: '菜单1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () =>
                            import ('@/views/nested/menu1/menu1-3'),
                        name: 'Menu1-3',
                        meta: { title: '菜单1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () =>
                    import ('@/views/nested/menu2/index'),
                meta: { title: '菜单2' }
            }
        ]
    },

    {
        path: '/joking',
        component: Layout,
        children: [{
            path: 'index',
            name: 'joking',
            component: () =>
                import ('@/views/joking/index'),
            meta: { title: '测试', icon: 'link' }
        }]
    },

    // {
    //     path: 'external-link',
    //     component: Layout,
    //     children: [{
    //         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
    //         meta: { title: 'External Link', icon: 'link' }
    //     }]
    // },


    //! 404页面必须放在最后
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router