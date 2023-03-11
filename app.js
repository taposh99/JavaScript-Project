// let task=document.getElementById('task-title');
// let querys=document.querySelectorAll('ul li');

// // document.getElementById('task-title').style.background ='#333';
// // document.getElementById('task-title').style.color ='red';
// // query.style.background='yellow';

// // console.log(query);
// querys.forEach(function(query) {
//     query.style.color ='red';
//     // code
    
// });

// const li=document.createElement('li');

// //add class
// li.className='collection-item';
// li.textContent=('hello');
// // console.log(li);
// document.querySelector('ul.collection').appendChild(li);

// const link = document.createElement('a');
// link.className=('delete-item secondary-content');
// link.innerHTML='<i class="fa fa-remove"></i>';
// li.appendChild(link);

//define ui constant
const form =  document.querySelector('#task-form');
const taskInput =  document.querySelector('#task');
const taskList =  document.querySelector('.collection');
const clearBtn =  document.querySelector('.clear-tasks');
const filter =  document.querySelector('#filter');

//load all events
loadEventListeners();

function loadEventListeners(){
  //add task
    form.addEventListener('submit',addtask);
    //remove task
    taskList.addEventListener('click',removeTask);
    //clear all task
    clearBtn.addEventListener('click',clearTask);
    filterTask.addEventListener('keyup',filterTask);
};

function addtask(e) {
  if(taskInput.value===''){
    alert('add a task');

  }

  e.preventDefault();
  const li=document.createElement('li');
  li.className='collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  const link = document.createElement('a');
  link.className=('delete-item secondary-content');
  link.innerHTML='<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  taskInput.value='';

}
//remove task
function removeTask(e) {
// console.log(e.target);
if(e.target.parentElement.classList.contains('delete-item')){
if(confirm("are you sure")){
  e.target.parentElement.parentElement.remove();

}
}
  }

  //clear all task

  function clearTask(e){
    taskList.innerHTML='';
    e.parentElement();
  }
  //filterTask
  function filterTask(e){
   
    e.parentElement();
  }
//   function filterTask() {
//     var input, filter, ul, li, a, i, txtValue;
   
//     filter = taskInput.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}