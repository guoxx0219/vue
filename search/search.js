new Vue({
    el:"#app",
    data:{
        list:[
            {
                id:1,title:'十以内的奇数'
            },
            {
                id:2,title:'vue.js'
            },
            {
                id:3,title:'node.js'
            }
        ],
        search:'',
        show:false,
    },
    methods:{
        focus(){
            this.show = true;
        },
        select(val){
            this.search = val;
            this.show = false;
        }
    }
});