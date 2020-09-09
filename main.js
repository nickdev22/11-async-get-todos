const todoList = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((list) => {
    document.querySelector("#todo-list").innerHTML = list
      .map((item) => `<li>${item.title}</li>`)
      .join("");
    console.log(list);
    return list;
  });
