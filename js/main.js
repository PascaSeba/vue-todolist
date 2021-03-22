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
    },
    methods: {
        addToDo() {
            this.toDoList.push(this.myToDo);
            this.myToDo = ("");
        },
        deleteToDo(index) {
            this.toDoList.splice(index, 1);
            alert("Complimenti! Hai svolto un TO-DO!");
        }
    }
});
Vue.config.devtools = true;