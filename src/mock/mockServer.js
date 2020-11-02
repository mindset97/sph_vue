//模拟接口

//引入三文件
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'


//通过mock.mock去模拟接口

Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})

// 路径（往这发） 返回的数据