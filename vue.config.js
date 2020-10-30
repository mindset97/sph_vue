module.exports = {
    //  写自己想要配置的东西去覆盖系统自带的
    // 关闭ESLint的规则
     lintOnSave: false,
     devServer:{
         proxy:{
             '/api':{
                target:'http://182.92.128.115',
             }
         }
     }
}