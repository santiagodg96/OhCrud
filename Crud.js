let addTodoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');
let deleteToDo=document.getElementById('deleteToDo');
let toDoContainer2=document.getElementById('toDoContainer2');
let saveToDo=document.getElementById('saveToDo');
let del=document.getElementById('del');

addTodoButton.addEventListener('click', function(){    
    var paragraph = document.createElement('p')
    var paragraph2 = document.createElement('p')
    paragraph2.innerText=inputField.value;
    paragraph.innerText=inputField.value;
    

    if(paragraph.innerText=inputField.value){
    var deleter=document.createElement('x')
    var deleter2=document.createElement('x')
    }else{
        window.alert("Ups you have to write something!");
        alert("Ups you have to write something");
    }    
    
    deleter.innerText='x';
    deleter2.innerText='x';

    toDoContainer.appendChild(paragraph); 
    toDoContainer.appendChild(deleter);
    toDoContainer2.appendChild(paragraph2); 
    toDoContainer2.appendChild(deleter2); 
    
    paragraph.classList.add('p-style');
    deleter.classList.add('deleter');
    paragraph2.style.display='none';
    deleter2.style.display='none';

    inputField.value="";

    saveToDo.addEventListener('click', function(){
        paragraph2.style.display='';
        paragraph2.classList.add('p-style');
        deleter2.style.display='';
        deleter2.classList.add('deleter');
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleter);
})

    deleter.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleter);
        toDoContainer2.removeChild(paragraph2);
        toDoContainer2.removeChild(deleter2);
})

    deleteToDo.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(deleter);
        toDoContainer2.removeChild(paragraph2);
        toDoContainer2.removeChild(deleter2);

})  

    deleter2.addEventListener('click', function(){
        toDoContainer2.removeChild(paragraph2);
        toDoContainer2.removeChild(deleter2);

})  

    del.addEventListener('click', function(){
        toDoContainer2.removeChild(paragraph2);
        toDoContainer2.removeChild(deleter2);
    
})
})
