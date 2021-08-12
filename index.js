const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
let myLeads = []

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) //<==push value from input to myLeads array
    inputEl.value = "" //<==clear input box after clicking button
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //<==converting our array, myLeads, into a string so it can be stored locally

    renderLeads() //<== calling function to render content to DOM

    console.log( localStorage.getItem("myLeads"))
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
