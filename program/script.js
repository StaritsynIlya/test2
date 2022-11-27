Vue.component('task',{
    props: ["data"],
    data(){
        return{

        }
    },
    methods: {
        task_done() {
            this.$emit('task_done');
        }
    },
    template: `
    <div class="task">
        <div>
            <h3 class = "task__titel">{{data.name}}</h3>
            <div class="fullDate">{{data.time}}</div>
            <p v-if="data.desc!=''" class = "task__desc"">{{data.desc}}</p>
        </div>
        <button @click = "task_done()" class = "task__done">Delete</button>
    </div>
    `
})

var vue = new Vue({
    el: '#app',
    data: {
        newTask:{
            name: '',
            desc: '',
            time: ''
        },
        tasks: [
            {
                name: 'Олег',
                desc: 'Прочитать книгу',
                time: '1.4.2020 12:28'
            },
            {
                name: 'Антон',
                desc: 'Поговорить с жирафом',
                time: '25.7.2021 19:35'
            }
        ]
    },
    methods: {
        add_task(){
            if(this.newTask.name != ''){
              this.tasks.push({
                name: this.newTask.name,
                desc: this.newTask.desc,
                time: this.newTask.time = new Date().getDate()+'.'+ (new Date().getMonth()+1)+'.'+ new Date().getFullYear()+' '+new Date().getHours()+':'+new Date().getMinutes()
              });
              this.newTask.name='';
              this.newTask.desc='';
              this.newTask.time='';
            }
          },
        delete_task(id){
            this.tasks.splice(id, 1);
        }
    }
})