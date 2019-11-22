import Mock from 'mockjs'
// items 为测试数据数量
const data = Mock.mock({
    'items|10': [{
        id: '@id',
        title: '@sentence(5, 10)',
        'button|1': ['success', 'warning', 'info', 'error'],
        'status|1': ['published', 'draft', 'deleted'],
        author: 'name',
        display_time: '@datetime',
        pageviews: '@integer(300, 5000)'
    }]
})

export default [{
    url: '/table/list',
    type: 'get',
    response: config => {
        const items = data.items
        return {
            code: 20000,
            data: {
                total: items.length,
                items: items
            }
        }
    }
}]