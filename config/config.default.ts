'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

export default function(appInfo: EggAppConfig) {
  const config = {} as PowerPartial<EggAppConfig>;

  config.keys = appInfo.name + '123123';

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-sequelize-ts-dev',
    username: 'root',
    password: '123456',
    host: '127.0.0.1',
    port: 3306,
    define: {
      timestamps: true,
      underscored: true
    }
  };


  config.security = {
    csrf: {
      enable: false, // 直接关闭 csrf 校验
    },
  };

  const bizConfig = {
    // your biz config
  };

  return {
    ...config as {},
    ...bizConfig,
  };
}
