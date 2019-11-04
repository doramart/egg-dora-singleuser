const xss = require("xss");
const _ = require('lodash');

const singleUserRule = (ctx) => {
    return {
        
        enable: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("有效")])
        },

      
        name: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("姓名")])
        },

      
        userName: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("用户名")])
        },

      
        password: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("密码")])
        },

      
        email: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("邮箱")])
        },

      
        phoneNum: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("手机号")])
        },

      
        logo: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("头像")])
        },

      
        group: {
            type: "string",
            required: true,
            message: ctx.__("validate_error_field", [ctx.__("类型")])
        },

      
    }
}



let SingleUserController = {

    async list(ctx) {

        try {

            let payload = ctx.query;
            let queryObj = {};

            let singleUserList = await ctx.service.singleUser.find(payload, {
                query: queryObj,
            });

            ctx.helper.renderSuccess(ctx, {
                data: singleUserList
            });

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }
    },

    async create(ctx) {


        try {

            let fields = ctx.request.body || {};
            const formObj = {
                
     
        enable:fields.enable, 

  
      
     
        name:fields.name, 

  
      
     
        userName:fields.userName, 

  
      
     
        password:fields.password, 

  
      
     
        email:fields.email, 

  
      
     
        phoneNum:fields.phoneNum, 

  
      
     
        logo:fields.logo, 

  
      
     
        group:fields.group, 

  
      
                createTime: new Date()
            }


            ctx.validate(singleUserRule(ctx), formObj);



            await ctx.service.singleUser.create(formObj);

            ctx.helper.renderSuccess(ctx);

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },

    async getOne(ctx) {

        try {
            let _id = ctx.query.id;

            let targetItem = await ctx.service.singleUser.item(ctx, {
                query: {
                    _id: _id
                }
            });

            ctx.helper.renderSuccess(ctx, {
                data: targetItem
            });

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }

    },


    async update(ctx) {


        try {

            let fields = ctx.request.body || {};
            const formObj = {
                
     
        enable:fields.enable, 

  
      
     
        name:fields.name, 

  
      
     
        userName:fields.userName, 

  
      
     
        password:fields.password, 

  
      
     
        email:fields.email, 

  
      
     
        phoneNum:fields.phoneNum, 

  
      
     
        logo:fields.logo, 

  
      
     
        group:fields.group, 

  
      
                updateTime: new Date()
            }


            ctx.validate(singleUserRule(ctx), formObj);



            await ctx.service.singleUser.update(ctx, fields._id, formObj);

            ctx.helper.renderSuccess(ctx);

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });

        }

    },


    async removes(ctx) {

        try {
            let targetIds = ctx.query.ids;
            await ctx.service.singleUser.removes(ctx, targetIds);
            ctx.helper.renderSuccess(ctx);

        } catch (err) {

            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },

}

module.exports = SingleUserController;