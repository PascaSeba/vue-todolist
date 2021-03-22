var app = new Vue({
    el: '#root',
    data: {
        toDoList: [
            "Fare attività fisica", "Salutare il tizio urlante dei limoni", "Fare una spremuta i limoni"
        ],
        inputext: "ciao",
    },
})
Vue.config.devtools = true;