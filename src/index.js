document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')

  form.addEventListener('submit', e => {
    e.preventDefault()
    let newToDo = e.target['new-task-description'].value

    document.querySelector("#tasks").append(newToDo)
  })
});
