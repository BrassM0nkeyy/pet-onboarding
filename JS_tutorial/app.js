// //set local storage item
// localStorage.setItem('name', 'john');

// //set session storage item goes away after closing browser
// localStorage.setItem('name', 'joe');

//remove from storage
//localStorage.removeItem('name');

//get from storage
//const name = localStorage.getItem('name')

//form to add to local storage
document.querySelector('form').addEventListener('submit',
function(e){
    const task = document.getElementById('task').value;

    let tasks; 

    if(localStorage.getItem('tasks') === null){ 
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);



    localStorage.setItem('task', JSON.stringify(tasks));
    alert('task saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});