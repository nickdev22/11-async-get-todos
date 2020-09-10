fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((list) => {
    document.querySelector("#todo-list").innerHTML = list
      .map(
        (item) =>
          `<li>${item.title}<button onClick="deleteArrElement()" class="delete">Delete</button></li>`
      )
      .join("");
    console.log(list);
    return list;
  });

let button = document.getElementById("enter");

let newitem = document.getElementById("userinput");

let ul = document.querySelector("ul");

let list = document.getElementsByTagName("li");

let del = document.getElementsByClassName("delete");

// register actions initially on existing elements
for (let i = 0; i < del.length; i++) {
  del[i].addEventListener("click", deleteListElement);
}

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
}

function deleteArrElement() {
  let del = document.getElementsByClassName("delete");
  if (del.length > 0) {
    del.parentElement.remove();
  }
}

function deleteListElement() {
  this.parentElement.remove(); // remove parent, since button is child
}

function liClick() {
  this.classList.toggle("done");
}

function inputLength() {
  return newitem.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(newitem.value));

  newitem.value = " ";
  let delbutt = document.createElement("button");
  delbutt.appendChild(document.createTextNode("Delete"));
  li.appendChild(delbutt);
  ul.appendChild(li);

  // Register action on newly added elements
  li.addEventListener("click", liClick);
  delbutt.addEventListener("click", deleteListElement);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
newitem.addEventListener("keypress", addListAfterEnter);
