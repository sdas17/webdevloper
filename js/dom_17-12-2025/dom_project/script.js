const button = document.getElementById("addBtn");
const ul_list = document.getElementById("todoList");
const input_list = document.getElementById("todoInput");

let id_counter = 0;

button.addEventListener("click", () => {
  const value = input_list.value.trim();
  if (value === "") return;

  // ✅ create li INSIDE click
  const list_item = document.createElement("li");
  list_item.id = `todo_${id_counter++}`;

  const span = document.createElement("span");
  span.innerText = value;

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";

  // ✏️ Edit
  editBtn.addEventListener("click", () => {
    const newValue = prompt("Update todo:", span.innerText);
    if (newValue && newValue.trim() !== "") {
      span.innerText = newValue;
    }
  });

  // ❌ Delete
  deleteBtn.addEventListener("click", () => {
    ul_list.removeChild(list_item);
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  list_item.appendChild(span);
  list_item.appendChild(actions);

  ul_list.appendChild(list_item);
  input_list.value = "";
});
