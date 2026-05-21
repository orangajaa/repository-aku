const input = document.getElementById("input");
const addButton = document.getElementById("tombol");
const todoList = document.getElementById("list");

addButton.addEventListener("click", () => {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const hapus = document.createElement("button");
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(hapus);
    todoList.appendChild(li);

    input.value = "";
});