const titleElement = document.getElementById("title")
titleElement.style = "color:darkslategray";
titleElement.style.fontFamily = "Georgia";

console.log(titleElement);

const contentElements = document.getElementById("content")

contentElements.style.color = "orange"

contentElements.style.fontFamily = "Georgia";

// site p elementi menuvanje fontFamily preku style svojstvoto

const paragraphElements = document.querySelectorAll(".paragraphs");
paragraphElements.forEach(paragraph => {
    paragraph.style.fontFamily = "Georgia";
    paragraph.style.color = "orange"
});

// Event Listeners ("click", "mouseover", "mouseleave") create alert() popup

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
    btn.style.color = "green";

    btn.addEventListener("click", () => {
        console.log("Clicked");
    })
    btn.addEventListener("mouseover", () => {
        console.log("MouseOver");

    })
    btn.addEventListener("mouseleave", () => {
        console.log("MouseLeave");

    })
})

const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", () => {
    const userConfirmed = confirm("Are you sure you want to toggle Dark Mode?");
    if (userConfirmed) {
        document.body.classList.toggle("dark-mode");
        darkMode.classList.toggle("dark-toggle");
    }

});
// Input pole preku koe mozam da kreiram todo so svojstva: "title" i "completed"
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    const cardHTML = `
        <div class="todo-card">
            <span>${taskText}</span>
            <button class="delete-btn">Remove</button>
        </div>
    `;


    todoList.insertAdjacentHTML('beforeend', cardHTML);


    const newDeleteButton = todoList.lastElementChild.querySelector('.delete-btn');
    newDeleteButton.addEventListener('click', function () {
        this.closest('.todo-card').remove();
    });


    todoInput.value = "";
}



// fetch + DOM rendering na lista na objekti (public API)
// Error handling so catch
// setTimeout + setInterval