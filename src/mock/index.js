import Mock from 'mockjs'
const vehicle = Mock.mock(
    '/api/menuList','get', (req, res) =>{
       return  {
           code:200,
           status:true,
           data:[  
            {   label:'个人中心',name:"m1",  
                menuitems:[  
                    {name:'m1-1',label:'菜单1-1',url:'iview.html'},  
                    {name:'m1-2',label:'菜单1-2',url:'grid.html'},  
                    {name:'m1-3',label:'菜单1-3',url:'button.html'},  
                    {name:'m1-4',label:'菜单1-4',url:'table.html'}
                ]  
            },  
            {   label:'活动管理',name:"m2",  
                menuitems:[  
                    {name:'m2-1',label:'活动中心',url:''}
                ]  
            },  
            {   label:'相册管理',name:"m3",  
                menuitems:[  
                    {name:'m3-1',label:'公共相册',url:'m3-1.html'},  
                    {name:'m3-2',label:'个人相册',url:'m3-1.html'},  
                    {name:'m3-3',label:'轮播相册',url:'m3-1.html'} 
                ]  
            },  
            {   label:'系统管理',name:"m4",  
                menuitems:[  
                    {name:'m4-1',label:'角色管理',url:'m4-1.html'},  
                    {name:'m4-2',label:'资源管理',url:'m4-1.html'},  
                    {name:'m4-3',label:'用户管理',url:'m4-1.html'},  
                    {name:'m4-4',label:'公告管理',url:'m4-1.html'}
                ]  
            }  
        ],  
           message:'查询成功'
       }
   } )
const user = Mock.mock(
'/api/userlist','get', (req, res) =>{
    return  {
        code:200,
        status:true,
        data:{
            count:12,
            size:8,
            list:[{'loginName':' zhangsan', 'realName': '张三','phone': '11111100000', 'sex': '男'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' zhangsan', 'realName': '张三','phone': '11111100000', 'sex': '男'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' zhangsan', 'realName': '张三','phone': '11111100000', 'sex': '男'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'},
            {'loginName':' lisi', 'realName': '李四','phone': '11111100000', 'sex': '女'}]
        },
        message:'查询成功'
    }
} )
   
export default { vehicle,user }