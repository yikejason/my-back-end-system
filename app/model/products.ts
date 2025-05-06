'use strict';

import { Application } from 'egg';

export default function(app: Application) {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Model = app.model.define('products', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: STRING(30),
    category: STRING(30),
    unit: STRING(30),
    created_at: DATE(6),
    updated_at: DATE(6),
  });

  return class Products extends Model {}
}