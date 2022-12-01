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

        ]
    },
    methods: {
        add_task(){
          fetch('PHP.php', {

            method: 'POST',

            headers: {

              'Content-Type': 'application/json',

            },

            body: JSON.stringify({

            name: this.name,

            desc: this.desc,

            time: this.time

          }),

        }).then(response => {
          console.log(response);

        }).catch(error => {

          console.log(error);
        });

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
        
    },

    
})
