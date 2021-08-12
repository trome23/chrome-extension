let myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector( "#tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = "" //<== created variable to store ul list items
    for (let i = 0; i < leads.length; i++) {   //<==for loop to iterate through array
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>  
                    ${leads[i]} 
                </a>
            </li> ` //<== using template string instead of string concatenation 
    }

    ulEl.innerHTML = listItems  //<== rendering list to DOM
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){   //<==from CHROME docs, to get current tab URL
        myLeads.push(tabs[0].url)   //<==pushing current tab's URL to myLeads array
        localStorage.setItem("myLeads", JSON.stringify(myLeads))   //using stringify to convert to string for local storage
        render(myLeads)
    })
})


deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()  //<== clears local storage
    myLeads= []  //<== clears myLeads array
    render(myLeads)  //<== renders the DOM which in this case is empty
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value) //<==push value from input to myLeads array
    inputEl.value = "" //<==clear input box after clicking button
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) //<==converting our array, myLeads, into a string so it can be stored locally

    render(myLeads) //<== calling function to render content to DOM

    console.log( localStorage.getItem("myLeads"))
})

    

