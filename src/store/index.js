let tasks =[
    {
        title: 'Aprender Vue.js',
        pending: true,
    },
    {
        title: 'Suscribirse a fvasquez.net',
        pending: true,
    },
    {
        title: 'Grabar Leccion de Vue',
        pending: false,
    }
];

tasks.forEach((task,index) => {
    task.description = `God, cold furner. you won't break the lighthouse.Est clemens uria,
                        cesaris.Listen and you will be rejected balanced.Paradox, bliss 
                        and wrestle.For a cored dried loaf, add some champaign and radish`;
    task.id = index+1;
});

export default {
    state: {
        tasks
    },
    findTask(id){
        return this.state.tasks.find(task => task.id == id)
    }
}