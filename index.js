function insertJobElements(){
    for (let i=0; i<=100; i++){
        const div = document.createElement("div");
        div.id = i;
        div.className = "list-object-container ";
        div.style = "background-color: white;";
        document.getElementById("inner-content-container").appendChild(div);  

        const shownElementsContainer = document.createElement("div");
        shownElementsContainer.id = "shownElementsContainer" + i;
        shownElementsContainer.className = "shownElementsContainer";
        //shownElementsContainer.style = "background-color: lightgrey;";
        document.getElementById(i).appendChild(shownElementsContainer);  

        const columnContainer = document.createElement("div");
        columnContainer.id = "columnContainer" + i;
        columnContainer.className = "columnContainer";
        //columnContainer.style = "background-color: lightgrey;";
        document.getElementById(shownElementsContainer.id).appendChild(columnContainer); 

            const WoColumn = document.createElement("div");
            WoColumn.id = "WoColumn" + i;
            WoColumn.className = "column-item";
            WoColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(WoColumn); 

            const dieColumn = document.createElement("div");
            dieColumn.id = "dieColumn" + i;
            dieColumn.className = "column-item";
            dieColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(dieColumn); 

            const custColumn = document.createElement("div");
            custColumn.id = "custColumn" + i;
            custColumn.className = "column-item";
            custColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(custColumn); 

            const typeColumn = document.createElement("div");
            typeColumn.id = "typeColumn" + i;
            typeColumn.className = "column-item";
            typeColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(typeColumn); 

            const diaColumn = document.createElement("div");
            diaColumn.id = "diaColumn" + i;
            diaColumn.className = "column-item";
            diaColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(diaColumn); 

            const orderNoColumn = document.createElement("div");
            orderNoColumn.id = "orderNoColumn" + i;
            orderNoColumn.className = "column-item";
            orderNoColumn.style = "background-color: #E8E9EC";
            document.getElementById(columnContainer.id).appendChild(orderNoColumn); 

            const startDateColumn = document.createElement("div");
            startDateColumn.id = "startDateColumn" + i;
            startDateColumn.className = "column-item";
            startDateColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(startDateColumn); 

            const finishDateColumn = document.createElement("div");
            finishDateColumn.id = "finishDateColumn" + i;
            finishDateColumn.className = "column-item";
            finishDateColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(finishDateColumn); 

            const onTimeDateColumn = document.createElement("div");
            onTimeDateColumn.id = "onTimeDateColumn" + i;
            onTimeDateColumn.className = "column-item";
            onTimeDateColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(onTimeDateColumn); 

            const statusColumn = document.createElement("div");
            statusColumn.id = "statusColumn" + i;
            statusColumn.className = "column-item";
            statusColumn.style = "background-color: #E8E9EC;";
            document.getElementById(columnContainer.id).appendChild(statusColumn); 

        const jobButtonContainer = document.createElement("div");
        jobButtonContainer.id = "jobButtonContainer" + i;
        jobButtonContainer.className = "jobButtonContainer";
        jobButtonContainer.style = "background-color: lightgrey;";
        document.getElementById(shownElementsContainer.id).appendChild(jobButtonContainer); 

            const expandButton = document.createElement("div");
            expandButton.id = "expandButton" + i;
            expandButton.className = "expandButton";
            expandButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(expandButton); 

                const expandText = document.createTextNode("Expand");
                expandText.className = "jobButtonText";
                document.getElementById(expandButton.id).appendChild(expandText); 


            const openButton = document.createElement("div");
            openButton.id = "openButton" + i;
            openButton.className = "openButton";
            openButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(openButton); 

                const openText = document.createTextNode("Open");
                openText.className = "jobButtonText";
                document.getElementById(openButton.id).appendChild(openText); 


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
        clickedIdLight[i].addEventListener('click', expandGetClickedId);
    }
}

function expandGetClickedId(){
    expandJobSummary(this.id);
}

function contractGetClickedId(){
    contractJobSummary(this.id);
}

function addExpandListeners(){
    let clickedIdLight = document.getElementsByClassName('job-light');
    for (let i = 0; i < clickedIdLight.length; i++){
        clickedIdLight[i].addEventListener('click', expandGetClickedId);
    }
    let clickedIdDark = document.getElementsByClassName('job-dark');
    for (let i = 0; i < clickedIdDark.length; i++){
        clickedIdDark[i].addEventListener('click', getClickedId);
    }
}

function expandJobSummary(anId){
    anId = anId.replace("jobButtonContainer", "");
    let contractId = document.getElementById("columnContainer"+anId);
    const expandDiv1 = document.getElementById(anId);
    const expandDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    contractId.addEventListener('click', contractGetClickedId);
    expandDiv1.style = "height: 120px";
    expandDiv2.style = "height: 85px";
}

function contractJobSummary(anId){
    console.log(anId);
    anId = anId.replace("columnContainer", "");
    const contractDiv1 = document.getElementById(anId);
    const contractDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    contractDiv1.style = "height: 30px";
    contractDiv2.style = "height: 0px";

    addTestExpandListeners();
}

insertJobElements();
addTestExpandListeners()