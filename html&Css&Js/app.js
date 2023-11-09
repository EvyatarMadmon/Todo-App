const ulContainer = document.getElementById("li-container");
let draggedItem = null;


//Checking that there is an input
function add() {
    const inputField = document.getElementById("inputField");
    const newItemText = inputField.value;
    if (newItemText === '') {
        alert("You need to write something");
        return;
    }


    //Drag and Drop
    const newItem = document.createElement("li");
    newItem.innerHTML = newItemText;
    newItem.setAttribute("draggable", "true");
    newItem.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
    });
    newItem.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    newItem.addEventListener("drop", (e) => {
        if (draggedItem !== null) {
            const temp = e.target.innerHTML;
            e.target.innerHTML = draggedItem.innerHTML;
            draggedItem.innerHTML = temp;
            draggedItem = null;
        }

    });


    // Delete Button => ❌ 
    const deleteButton = document.createElement("span");
    deleteButton.innerHTML = "❌";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });
    newItem.appendChild(deleteButton);
    ulContainer.appendChild(newItem);
    inputField.value = "";
}
ulContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});


// Underline the word
ulContainer.addEventListener("click", (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }
})