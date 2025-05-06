'use strict';

import { Service } from 'egg';
import { CreateOptions } from 'sequelize';

export default class Products extends Service {
  async list({ offset = 0, limit = 10 }: { offset: number; limit: number; }) {
    return this.ctx.model.Products.findAndCountAll({
      offset,
      limit,
      attributes: [ 'id', 'product_name', 'category', 'unit', 'updated_at' ],
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
    });
  }

  async create(products: CreateOptions) {
      return this.ctx.model.Products.create(products);
  }
}
