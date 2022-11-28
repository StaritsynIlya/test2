<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Image and comments</title>
</head>
<body>
    <?php
        include 'PHP.php';
    ?>
    <img src="/img/photo_test.jpg" alt="">
    <div id="app">
        <div class="status">
            <h3>Комментарии</h3>
        </div>
        <task @task_done="delete_task(index)" :data="data" v-for = "(data,index) in tasks" :key = "index"></task>
        <div class = "add_task">
            <div class = "add_task__input">
                <input type="text" v-model="newTask.name">
                <textarea type="text" v-model="newTask.desc"></textarea>
            </div>
            <vue-racaptcha> </vue-racaptcha>
            <button class = "add_task__btn" @click="add_task">+</button>
        </div>
    </div>
</body>
<script src = "script.js"></script>
</html>