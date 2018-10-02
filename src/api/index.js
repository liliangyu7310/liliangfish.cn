import Mock from 'mockjs';//es6语法引入mock模块

var navDatas = [];

var Random = Mock.Random;

// 构建数据
function createData() {

    for(var i=0; i<15; i++) {
        var data = {
            title: Random.ctitle(4),
            icon: 'iconfont icon-zixun',

            subData: [
                {
                    title: Random.ctitle(5),
                    href: 'http://www.cndz.com',
                    logo: Random.image('100x100',Random.color()),
                    des: Random.cparagraph(1,2)
                },
                {
                    title: Random.ctitle(5),
                    href: 'http://www.cndz.com',
                    logo: Random.image('100x100',Random.color()),
                    des: Random.cparagraph(1,2)
                },
                {
                    title: Random.ctitle(5),
                    href: 'http://www.cndz.com',
                    logo: Random.image('100x100',Random.color()),
                    des: Random.cparagraph(1,2)
                },
                {
                    title: Random.ctitle(5),
                    href: 'http://www.cndz.com',
                    logo: Random.image('100x100',Random.color()),
                    des: Random.cparagraph(1,2)
                },
                {
                    title: Random.ctitle(5),
                    href: 'http://www.cndz.com',
                    logo: Random.image('100x100',Random.color()),
                    des: Random.cparagraph(1,2)
                }
    
            ]
        };
        navDatas.push(data);
    }

    return navDatas;

}

export default Mock.mock('http://test.cn/api', createData);
