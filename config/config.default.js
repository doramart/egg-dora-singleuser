'use strict'

/**
 * egg-dora-singleuser default config
 * @member Config#eggDoraSingleUser
 * @property {String} SOME_KEY - some description
 */

const pkgInfo = require('../package.json');
exports.doraSingleUser = {
    alias: 'singleUser', // 插件目录，必须为英文
    pkgName: 'egg-dora-singleuser', // 插件包名
    enName: 'doraSingleUser', // 插件名
    name: '用户系统', // 插件名称
    description: '用户系统', // 插件描述
    isadm: 1, // 是否有后台管理，1：有，0：没有，入口地址:'/ext/devteam/admin/index'
    isindex: 0, // 是否需要前台访问，1：需要，0：不需要,入口地址:'/ext/devteam/index/index'
    version: pkgInfo.version, // 版本号
    iconName: 'icon_people_fill', // 主菜单图标名称
    adminUrl: 'https://cdn.html-js.cn/cms/plugins/static/admin/singleUser/js/app.js',
    adminApi: [{
        url: 'singleUser/getList',
        method: 'get',
        controllerName: 'list',
        details: '获取用户系统列表',
    }, {
        url: 'singleUser/getOne',
        method: 'get',
        controllerName: 'getOne',
        details: '获取单条用户系统信息',
    }, {
        url: 'singleUser/addOne',
        method: 'post',
        controllerName: 'create',
        details: '添加单个用户系统',
    }, {
        url: 'singleUser/updateOne',
        method: 'post',
        controllerName: 'update',
        details: '更新用户系统信息',
    }, {
        url: 'singleUser/delete',
        method: 'get',
        controllerName: 'removes',
        details: '删除用户系统',
    }],
    fontApi: [{
        url: 'singleUser/sendVerificationCode',
        method: 'post',
        controllerName: 'sendVerificationCode',
        details: '发送验证码',
    }, {
        url: 'singleUser/doLogin',
        method: 'post',
        controllerName: 'loginAction',
        details: '用户登录',
    }, {
        url: 'singleUser/doReg',
        method: 'post',
        controllerName: 'regAction',
        details: '用户注册',
    }, {
        url: 'singleUser/userInfo',
        method: 'get',
        controllerName: 'getUserInfoBySession',
        details: '获取用户信息',
    }, {
        url: 'singleUser/logOut',
        method: 'get',
        controllerName: 'logOut',
        details: '退出登录',
    }, {
        url: 'singleUser/sentConfirmEmail',
        method: 'post',
        controllerName: 'sentConfirmEmail',
        details: '发送确认邮件',
    }, {
        url: 'singleUser/updateNewPsd',
        method: 'post',
        controllerName: 'updateNewPsd',
        details: '设置新密码',
    }, {
        url: 'singleUser/reset_pass',
        method: 'get',
        controllerName: 'reSetPass',
        details: '重设密码链接',
    }],

    initData: '', // 初始化数据脚本
    pluginsConfig: ` 
    exports.doraSingleUser = {\n
        enable: true,\n
         \n
    };\n
    `, // 插入到 plugins.js 中的配置
    defaultConfig: `
    singleUserRouter:{\n
        match: [ctx => ctx.path.startsWith('/manage/singleUser'), ctx => ctx.path.startsWith('/api/singleUser')],\n
    },\n
    `, // 插入到 config.default.js 中的配置
}