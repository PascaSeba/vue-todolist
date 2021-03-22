/* 
Ricreare l'esercizio della to do list come fatto assieme
in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, 
  l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: 
  digitando il tasto invio oppure ciccando su un pulsante, 
  il testo digitato viene aggiunto alla lista 
  */

var app = new Vue({
    el: '#root',
    data: {
        myToDo: (""),
        toDoList: [
            "Fare attività fisica", "Salutare il tizio urlante dei limoni", "Fare una spremuta di umani"
        ],
        allTodos: [],
    },
    methods: {
        addToDo() {
            if (this.myToDo != "") {
                this.toDoList.push(this.myToDo.charAt(0).toUpperCase() + this.myToDo.slice(1).toLowerCase());
                this.myToDo = ("");
            }
        },
        deleteToDo(index) {
            var removedTodo = this.toDoList.splice(index, 1);
            alert("Complimenti! Hai svolto un TO-DO!");
            this.allTodos.push(removedTodo[0]);
        },
        returned() {
            this.allTodos.forEach((todo) => {
                this.toDoList.push(todo);
            });
            this.allTodos = [];
        },
    }
});
Vue.config.devtools = true;