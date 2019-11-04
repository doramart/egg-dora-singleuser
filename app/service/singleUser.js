/*
 * @Author: doramart 
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: doramart
 * @Last Modified time: 2019-09-23 15:35:57
 */

'use strict';
const Service = require('egg').Service;
const path = require('path')

// general是一个公共库，可用可不用
const {
    _list,
    _item,
    _count,
    _create,
    _update,
    _removes,
    _removeAll
} = require(path.join(process.cwd(), 'app/service/general'));


class SingleUserService extends Service {

    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {

        let listdata = _list(this.ctx.model.SingleUser, payload, {
            query: query,
            searchKeys: searchKeys,
            populate: populate,
            files
        });
        return listdata;

    }


    async count(params = {}) {
        return _count(this.ctx.model.SingleUser, params);
    }

    async create(payload) {
        return _create(this.ctx.model.SingleUser, payload);
    }

    async removes(res, values, key = '_id') {
        return _removes(res, this.ctx.model.SingleUser, values, key);
    }

    async removeAll() {
        return _removeAll(this.ctx.model.SingleUser);
    }

    async update(res, _id, payload) {
        return _update(res, this.ctx.model.SingleUser, _id, payload);
    }

    async item(res, params = {}) {
        return _item(res, this.ctx.model.SingleUser, params)
    }


}

module.exports = SingleUserService;