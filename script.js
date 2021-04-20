//1. Select all elements
const form = document.querySelector("#new-item-form")
const list = document.querySelector("#list")
const input = document.querySelector("#item-input")

//2. When I sumbit the form add a new element
form.addEventListener("submit", (e) => {
    e.preventDefault()

    //1. create a new item
    const item = document.createElement("div")
    item.innerText = input.value 
    item.classList.add("list-item")

    //2. Add the item to the list
    list.appendChild(item)

    //3.clear input
    input.value = ""

    //4. setup event listener to delete the item when clicked
    item.addEventListener("click", () => {
        item.remove()
    })
})