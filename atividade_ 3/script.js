document.addEventListener("DOMContentLoaded", () => {
    loadexercise();
})
function addexercise() {
    let exerciseInput = document.getElementById("exerciseInput")
    let exerciseText = exerciseInput.value.trim();

    if (exerciseText === "") {
        alert("digite uma tarefa valida");
        return;
    }

    let exerciseList = document.getElementById("exerciseList");
    let item = document.createElement("li");
    item.innerHTML = `
    <span onclick = "toggleexercise(this)">${exerciseText}</span>
    <button class="delete_btn" onclick="deleteexercise(this)">X</button>
    `
    exerciseList.appendChild(item);
    saveexercise();
    exerciseInput.value = "";
}
function toggleexercise(element) {
    let item = element.parentElement;
    item.classList.toggle("completed");

    if (item.classList.contains("completed")) {
        alert("Exercício concluído!");
    }

    saveexercise();
}

function deleteexercise(button) {
    button.parentElement.remove();
    saveexercise();
}
function saveexercise() {
    let exercises = [];
    document.querySelectorAll("#exerciseList li").forEach(exercise => {
        exercises.push({
            text: exercise.innerText.replace("X", "").trim(),
            completed: exercise.classList.contains("completed")
        })
    })

    localStorage.setItem("exercises", JSON.stringify(exercises));

}
function loadexercise() {
    let exercises = JSON.parse(localStorage.getItem("exercises")) || [];
    let exerciseList = document.getElementById("exerciseList");

    exercises.forEach(exercise => {
        let item = document.createElement("li");
        item.innerHTML = `
    <span onclick = "toggleexercise(this)">${exercise.text}</span>
    <button class="delete_btn" onclick="deleteexercise(this)">X</button>
    `
        if (exercise.completed) {
            item.classList.add("completed");
        }
        exerciseList.appendChild(item);
    })
}
