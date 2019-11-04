module.exports = app => {
    const mongoose = app.mongoose
    var shortid = require('shortid');
    var path = require('path');
    var Schema = mongoose.Schema;
    var moment = require('moment')

    var SingleUserSchema = new Schema({
        _id: {
            type: String,
            'default': shortid.generate
        },
        createTime: {
            type: Date,
        },
        updateTime: {
            type: Date,
        },
        enable: {
            type: Boolean,
            default: true
        }, // 有效 
        name: String, // 姓名 
        userName: String, // 用户名 
        password: String, // 密码 
        email: String, // 邮箱 
        phoneNum: String, // 手机号 
        logo: String, // 头像 
        group: String, // 类型 

    });

    SingleUserSchema.set('toJSON', {
        getters: true,
        virtuals: true
    });
    SingleUserSchema.set('toObject', {
        getters: true,
        virtuals: true
    });

    SingleUserSchema.path('createTime').get(function (v) {
        return moment(v).format("YYYY-MM-DD HH:mm:ss");
    });
    SingleUserSchema.path('updateTime').get(function (v) {
        return moment(v).format("YYYY-MM-DD HH:mm:ss");
    });

    return mongoose.model("SingleUser", SingleUserSchema, 'singleusers');

}