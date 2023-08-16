// # is id save it to addbtn


const addBtn = document.querySelector("#add-btn");

const newTaskInput = document.querySelector("#wrapper input");

const error = document.getElementById("error");

const tasksContainer = document.querySelector("#tasks");

const addTask = () => {

    const taskName = newTaskInput.value.trim();
    error.style.display = "none";

    if (!taskName) {
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }

    const task = `<div class="task">
        <input type="checkbox" class="task-check">
        <span class="taskname">${taskName}</span>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`;

    tasksContainer.insertAdjacentHTML("beforeend", task);

   //join deleteicion with deletbutton
    // we select  all the delete button using query selector all once the button is selected we store
    // in a variable foreach relate button we sign a onclick eventhandler that remove parenttask
    // element from the dom
    
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.onclick = () => {
            button.parentElement.remove(); 
        };
    });
};

addBtn.addEventListener("click", addTask);
