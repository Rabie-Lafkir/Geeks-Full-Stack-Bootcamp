const tasks = [];
let nextId = 0;

const form      = document.getElementById('taskForm');
const input     = document.getElementById('taskInput');
const listTasks = document.getElementById('listTasks');

function renderTask(task){
  const row = document.createElement('div');
  row.className = 'task';
  if(task.done) row.classList.add('done');
  row.dataset.taskId = task.id;

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn fa-solid fa-xmark';
  delBtn.title = 'Delete';
  delBtn.addEventListener('click', deleteTask);

  const cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.checked = task.done;
  cb.addEventListener('change', doneTask);

  const label = document.createElement('label');
  label.textContent = task.text;

  row.append(delBtn, cb, label);
  listTasks.appendChild(row);
}

function refreshUI(){
  listTasks.innerHTML = '';
  tasks.forEach(renderTask);
}

function addTask(e){
  e.preventDefault();
  const txt = input.value.trim();
  if(!txt) return;

  tasks.push({ id: nextId++, text: txt, done:false });
  refreshUI();
  input.value = '';
}

function doneTask(e){
  const id = +e.target.parentElement.dataset.taskId;
  const task = tasks.find(t => t.id === id);
  if(task){
    task.done = e.target.checked;
    refreshUI();
  }
}

function deleteTask(e){
  const id = +e.target.parentElement.dataset.taskId;
  const idx = tasks.findIndex(t => t.id === id);
  if(idx > -1){
    tasks.splice(idx,1);
    refreshUI();
  }
}

form.addEventListener('submit', addTask);
