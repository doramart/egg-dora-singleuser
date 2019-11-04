const _ = require('lodash');
const singleUserAdminController = require('../controller/manage/singleUser')
const singleUserApiController = require('../controller/api/singleUser')

module.exports = (options, app) => {

    return async function singleUserRouter(ctx, next) {

        let pluginConfig = app.config.doraSingleUser;
        await app.initPluginRouter(ctx, pluginConfig, singleUserAdminController, singleUserApiController);
        await next();

    }

}