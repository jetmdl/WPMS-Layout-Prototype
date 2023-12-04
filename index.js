function insertJobElements(){
    for (let i=0; i<=10; i++){
        const div = document.createElement("div");
        div.id = i;
        div.className = "list-object-container ";
        div.style = "background-color: white;";
        document.getElementById("inner-content-container").appendChild(div);  

        const shownElementsContainer = document.createElement("div");
        shownElementsContainer.id = "shownElementsContainer" + i;
        shownElementsContainer.className = "shownElementsContainer";
        shownElementsContainer.style = "background-color: green;";
        document.getElementById(i).appendChild(shownElementsContainer);  

        const columnContainer = document.createElement("div");
        columnContainer.id = "columnContainer" + i;
        columnContainer.className = "columnContainer";
        columnContainer.style = "background-color: green;";
        document.getElementById(shownElementsContainer.id).appendChild(columnContainer); 

        const jobButtonContainer = document.createElement("div");
        jobButtonContainer.id = "jobButtonContainer" + i;
        jobButtonContainer.className = "jobButtonContainer";
        jobButtonContainer.style = "background-color: green;";
        document.getElementById(shownElementsContainer.id).appendChild(jobButtonContainer); 

        const hiddenElementsContainer = document.createElement("div");
        hiddenElementsContainer.id = "hiddenElementsContainer" + i;
        hiddenElementsContainer.className = "hiddenElementsContainer";
        hiddenElementsContainer.style = "background-color: pink;";
        document.getElementById(i).appendChild(hiddenElementsContainer);  

    }
}

function addTestExpandListeners(){
    let clickedIdLight = document.getElementsByClassName("jobButtonContainer");
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', getClickedId);
    }
}

function getClickedId(){
    console.log(this.id);
    expandJobSummary();
}

function addExpandListeners(){
    let clickedIdLight = document.getElementsByClassName('job-light');
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', getClickedId);
    }
    let clickedIdDark = document.getElementsByClassName('job-dark');
    for (let i = 0; i < clickedIdDark.length; i++){
        clickedIdDark[i].addEventListener('click', getClickedId);
    }
}

function expandJobSummary(){
    const expandDiv1 = document.getElementById("0");
    const expandDiv2 = document.getElementById("hiddenElementsContainer0");

    expandDiv1.style = "height: 120px";
    expandDiv2.style = "height: 85px";

}

insertJobElements();
addTestExpandListeners()