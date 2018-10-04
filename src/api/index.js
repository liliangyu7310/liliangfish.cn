import Mock from 'mockjs';//es6语法引入mock模块

var navDatas = [];

var Random = Mock.Random;

// 构建数据
function createData() {

    for(var i=0; i<15; i++) {
        var data = {
            title: Random.ctitle(4),
            icon: 'iconfont icon-zixun',
            subData: randomSubData()
        };
        navDatas.push(data);
    }

    return navDatas;

}

function randomSubData() {
    var num = randomNum(1,30);
    var datas = [];
    for(var i=0; i<num; i++) {
        var data = {
            title: Random.ctitle(5),
            href: 'http://www.cndz.com',
            logo: Random.image('100x100',Random.color()),
            des: Random.cparagraph(1,2)
        };
        datas.push(data);
    }

    return datas;
}


// 随机子菜单数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 


export default Mock.mock('http://test.cn/api', createData);
