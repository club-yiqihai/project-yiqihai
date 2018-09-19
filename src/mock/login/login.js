import Mock from 'mockjs'
const userLogin = Mock.mock(
    '/api/userlogin','post', (req, res) =>{
        return  {
            code:200,
            status:true,
            data:{
                userInfo:{loginName: 'yoohoo',realName: '一枝梅',age: '20'},
                token:'123412340'
            },
            mes:'查询成功'
        }
    }

)
export default { userLogin }