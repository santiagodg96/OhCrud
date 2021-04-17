//creación de variables globale igualadas en valor a los elementos del HTML del mismo nombre
let addTodoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');
let deleteToDo=document.getElementById('deleteToDo');
//Función click que genera que se cree un nuevo 'p' cada vez que se acciona el addTodoButton "Add"
addTodoButton.addEventListener('click', function(){    
    var paragraph = document.createElement('p')
    paragraph.innerText=inputField.value;

    if(paragraph.innerText=inputField.value){
    var deleter=document.createElement('x')
    }else{
        window.alert("Ups you have to write something!");
        alert("Ups you have to write something");
    }    
    
    deleter.innerText='x';
    
    toDoContainer.appendChild(paragraph); 
    toDoContainer.appendChild(deleter);

    paragraph.classList.add('p-style');
    deleter.classList.add('deleter');

    inputField.value="";

    deleter.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleter);
})
    deleteToDo.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleter);
})
})
