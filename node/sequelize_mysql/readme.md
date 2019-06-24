- sequelize  数据库脚手架
    mysql2  数据库驱动
    sequelize  工具  table -> object
    对底层的sql API化  model
    sequelize-cli   命令行工具
-  sequelize_mysql 目录下  
    npm init -y   初始化
    yarn add mysql2 sequelize sequelize-cli   安装sequelize  依赖
- config
  ./node_modules/.bin/sequelize init
  ./node_modules/.bin/sequelize db:create  建库
  ./node_modules/.bin/sequelize migration:create --name create-shops-table  建表或修改表
  ./node_modules/.bin/sequelize db:migrate    执行迁移
  ./node_modules/.bin/sequelize db:migrate:undo  删除上一个
  ./node_modules/.bin/sequelize seed:create --name init-shops  初始数据
  ./node_modules/.bin/sequelize db:seed:all     执行初始数据的迁移