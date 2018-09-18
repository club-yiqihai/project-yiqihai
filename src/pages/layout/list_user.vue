<template>
    <div>   ​
        <i-table border :content="self" :columns="columns" :data="giftCardsList"></i-table>
        <div style="float: right; margin-top: 6px"><Page :total="100" show-elevator /></div>
    </div>
</template>
<script>
export default {
    data() {
      return {             
        giftCardsList: [],      
        self: this,
        columns: [
          {
            title:'序号',
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: '登陆名',
            key: 'loginName',
            align: 'center'
          },
          {
            title: '姓名',
            key: 'realName',
            align: 'center'
          },
          {
            title: '性别',
            key: 'sex',
            align: 'center'
          },
          {
            title: '电话',
            key:'phone',
            align: 'center'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '5px'
                        },
                        on: {
                            click: () => {
                                this.show(params.index)
                            }
                        }
                    }, '查看'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.remove(params.index)
                            }
                        }
                    }, '删除')
                ]);
            }
          }
        ]
      }
    },
    methods: {
        getData (params) {
           // if (!params) params = {page: 1};
            let _this = this;
            this.request('UserList', params, false).then((res) => {
            if (res.status) {
                //列表数据
                _this.giftCardsList = res.data.list;
                //总页数
                _this.total = res.data.count;
                //每页多少条数据
                _this.pageSize = res.data.size;
            } else {
                //列表数据
                _this.giftCardsList = [];
                //总页数
                _this.total = 0;
                //每页多少条数据
                _this.pageSize = 0;
            }
            });
        }
    },
    mounted () {
        this.getData("")
    }
}

</script>
