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
            <h3 class = "task__title">{{data.title}}</h3>
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
            title: '',
            desc: ''
        },
        tasks: [
            {
                title: 'Изучить Vue.js',
                desc: 'Прочитать книгу'
            },
            {
                title: 'Записаться к врачу',
                desc: 'Поговорить с жирафом'
            }
        ]
    },
    methods: {
        add_task(){
            if(this.newTask.title != ''){
              this.tasks.push({
                title: this.newTask.title,
                desc: this.newTask.desc
              });
              this.newTask.title='';
              this.newTask.desc='';
            }
          },
        delete_task(id){
            this.tasks.splice(id, 1);
        }
    }
})