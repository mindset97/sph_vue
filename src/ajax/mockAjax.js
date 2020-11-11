// 二次封装axios
// 功能

//1、引入
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


//2、用axios创建新的实例 进行二次封装
const instance =axios.create({
    baseURL:'/mock',// 配置基础路径
    timeout:20000  //超时限制
})

//3、请求拦截器和响应
//拦截器只干两件事：修改请求报文和响应报文 添加额外功能
//添加进度条功能
instance.interceptors.request.use((config)=>{
 //请求拦截器一般都只是处理成功的
  //在请求拦截器中开启进度条
    //接收参数
    //开启进度条
    Nprogress.start()
    return config
})

//响应拦截器
instance.interceptors.response.use(
    (response)=>{
        //直接返回数据(不返回响应报文)
        Nprogress.done()
        return response.data
    },
    (error)=>{
        //统一处理请求错误，具体请求也可以选择处理和不处理
        Nprogress.done()
        alert('请求失败')
        //中断promise链  返回pending状态
        return new Promise(()=>{})

    }
)

export default instance