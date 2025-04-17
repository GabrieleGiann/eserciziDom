const ul = document.querySelector("ul");
const input = document.querySelector("input");

function addProduct() {
  const li = document.createElement("li");
  li.append(input.value);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.appendChild(checkbox);

  ul.appendChild(li);
  input.value = "";
}
