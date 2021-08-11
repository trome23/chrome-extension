const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let myLeads = []

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) //<==push value from input to myLeads array
    inputEl.value = "" //<==clear input box after clicking button
    renderLeads() //<== calling function to render content to DOM
})

function renderLeads() {
    let listItems = "" //<== created variable to store ul list items
    for (let i = 0; i < myLeads.length; i++) {   //<==for loop to iterate through array
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>  
                    ${myLeads[i]} 
                </a>
            </li> ` //<== using template string instead of string concatenation 
    }

    ulEl.innerHTML = listItems  //<== rendering list to DOM
    
}
