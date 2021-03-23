// import Vue from 'vue'
// import Vuex from 'vuex'
// import getters from './getters'
// import app from './modules/app'
// import settings from './modules/settings'
// import user from './modules/user'
// import permission from './modules/permission'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     modules: {
//         app,
//         settings,
//         user,
//         permission
//     },
//     getters
// })

// export default store

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext

//? require.context(directory, useSubdirectories, regExp)
//* directory: 要查找的文件路径
//* useSubdirectories: 是否查找子目录
//* regExp: 要匹配文件的正则

const modulesFiles = require.context('./modules', true, /\.js$/)
console.log(modulesFiles.keys())
//todo ["./app.js", "./permission.js", "./settings.js", "./tagsView.js"]
// 获取`./modules` 目录下全部*.js文件
// you do not need `import app from './modules/app'`
//* 您不需要"import app from"./modules/app`
// it will auto require all vuex module from modules file
//* 它将自动要求模块文件中的所有vuex模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    // './app.js'.replace(/^\.\/(.*)\.\w+$/, '$1') => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})



const store = new Vuex.Store({
    modules,
    getters
})

export default store