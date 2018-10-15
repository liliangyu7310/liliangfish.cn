import Mock from 'mockjs';//es6语法引入mock模块



// 构建数据
function createData() {
  
   var navDatas = Mock.mock({
        "data|1-10":[{
            title: "@ctitle(4)",
            icon: 'iconfont icon-zixun',
            "subData|2-20": [
                {
                    title: "@ctitle(2,6)",
                    href: 'http://www.cndz.com',
                    logo: "@image('100x100')",
                    des: "@cparagraph(1,2)"
                }
            ]
        }]
    })

    return navDatas;
}

export default Mock.mock('/api', 'get', createData);
