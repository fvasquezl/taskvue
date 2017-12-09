import Vue from "vue";
import Router from 'vue-router'
import Tasks from 'components/Task/Tasks.vue'
import TaskDetails from 'components/Task/Details.vue'
import Dashboard from 'components/Dashboard.vue'
import ErrorNotFound from 'components/errors/NotFound.vue'


Vue.use(Router);

var router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard,
        },
        {
            path:'/mis-tareas',
            component:Tasks,
            children:[
                {
                    path:'',
                    name:'tasks',
                    component:{
                        template:'<h2>Por favor selecciona una tarea</h2>'
                    }
                },
                {
                    path: ':id',
                    name: 'tasks.details',
                    component:TaskDetails,
                    props:true
                },
            ]
        },

        {
            path:'/404',
            component: ErrorNotFound
        },
        {
            path:'*',
            redirect:'/404'
        }
    ]
});

export default router;