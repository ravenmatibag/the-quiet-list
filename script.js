const inputBox = document.querySelector(".todo__input");
const listContainer = document.querySelector(".todo__list");

function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
    alert("A quiet list begins with a thought.");
    return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("todo__item");
    listItem.textContent = taskText;

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("todo__remove");
    removeBtn.innerHTML = "&times;";

    listItem.appendChild(removeBtn);
    listContainer.appendChild(listItem);

    inputBox.value = "";
    saveData();
}

function handleListClick(e) {
    const target = e.target;

    if (target.classList.contains("todo__item")) {
    target.classList.toggle("todo__item--checked");
    } else if (target.classList.contains("todo__remove")) {
    target.parentElement.remove();
    }

    saveData();
}

function saveData() {
    localStorage.setItem("todoList", listContainer.innerHTML);
}

function loadData() {
    const saved = localStorage.getItem("todoList");
    if (saved) {
    listContainer.innerHTML = saved;
    }
}

function handleEnterKey(e) {
    if (e.key === "Enter") {
    e.preventDefault();
    addTask();
    }
}

// Event Listeners
listContainer.addEventListener("click", handleListClick);
inputBox.addEventListener("keypress", handleEnterKey);
document.querySelector(".todo__button").addEventListener("click", function () {
    this.blur(); 
});

// Initial Load
loadData();