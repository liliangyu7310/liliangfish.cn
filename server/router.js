
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Data = require("./model/navSchema");

// 查询所有导航网站数据
router.get("/data", (req, res) => {
    Data.find({})
    .then(datas => {
      res.json(datas);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});


module.exports = router;




















