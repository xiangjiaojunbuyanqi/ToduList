let App = new Vue({
    el: ".App",
    data: {
        todo: "",
        list: [],
        localStorageArr:JSON.parse(window.localStorage.getItem('todu'))
    },
    created(){
        if (window.localStorage.getItem('todu')){
            for (let key in this.localStorageArr){
                this.list.push(this.localStorageArr[key])
            }
        }
    },
    methods: {
        addTodo() {
            if (this.todo !== ''){
                this.list.push({todo: this.todo, done: false})
                localStorage.setItem('todu',JSON.stringify(this.list))
                this.todo = ''
            }else{
                alert('无添加事项')
            }
        },
        CheckInfo(){
            if (this.todo !== '' && event.keyCode == 13){
                this.list.push({todo: this.todo, done: false})
                localStorage.setItem('todu',JSON.stringify(this.list))
                this.todo = ''
            }
        },
        Delete(index){
            this.list.splice(index,1)
            localStorage.setItem('todu',JSON.stringify(this.list))
        },
        checkItem(){
            localStorage.setItem('todu',JSON.stringify(this.list))
        },
        loseFocus(){
            localStorage.setItem('todu',JSON.stringify(this.list))
        }
    }

})