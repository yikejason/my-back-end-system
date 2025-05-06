'use strict';

import { Controller } from 'egg';

export default class ProductsController extends Controller {
  async getList() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    ctx.body = await ctx.service.products.list(query);
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.products.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }
}
