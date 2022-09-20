var currentTime = moment();
displayCurrentDate();

function displayCurrentDate() {
    var currentDay = $('#currentDay')
    currentDay.text(currentTime.format("dddd, MMMM Do YYYY, h:mm a"));
}


let containerDiv = $(".container")
function createHtml(){
    let parentDiv = document.createElement("div")
    parentDiv.style.display = "flex";
    let timeDiv = document.createElement("div")
    timeDiv.innerHTML = moment().format();
    //let textDiv = $("textArea")
    let textDiv = document.createElement("textarea")
    textDiv.innerHTML = "This is a text area."
    //let saveButton = $("button")
    let saveButton = document.createElement("button")
    saveButton.textContent = "Save"
    parentDiv.append(timeDiv,textDiv,saveButton)
    containerDiv.append(parentDiv)

}
function renderTimeBlocks(){
    for(let i = 0; i<10; i++){
createHtml()
    }
    
}
renderTimeBlocks();
