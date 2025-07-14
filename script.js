const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '✔️';
  completeBtn.className = 'complete';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
  };

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.className = 'edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit your task:', span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => {
    todoList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  todoList.appendChild(li);
  taskInput.value = '';
}

taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTask();
});
