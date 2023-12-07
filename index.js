function insertJobElements(){
    let colourChooser = 0;
    let elementColour = "E8E9EC;";
    for (let i=0; i<=100; i++){
        colourChooser += 1;
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

            if(colourChooser % 2 === 0){
                elementColour = "background-color: #D9D9D9;";
                console.log("even");
                console.log(elementColour);
            }
            else{
                elementColour = "background-color: #E8E9EC;";
                console.log("odd");
                console.log(elementColour);
            }

            const WoColumn = document.createElement("div");
            WoColumn.id = "WoColumn" + i;
            WoColumn.className = "column-item";
            WoColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(WoColumn); 

            const dieColumn = document.createElement("div");
            dieColumn.id = "dieColumn" + i;
            dieColumn.className = "column-item";
            dieColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(dieColumn); 

            const custColumn = document.createElement("div");
            custColumn.id = "custColumn" + i;
            custColumn.className = "column-item";
            custColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(custColumn); 

            const typeColumn = document.createElement("div");
            typeColumn.id = "typeColumn" + i;
            typeColumn.className = "column-item";
            typeColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(typeColumn); 

            const diaColumn = document.createElement("div");
            diaColumn.id = "diaColumn" + i;
            diaColumn.className = "column-item";
            diaColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(diaColumn); 

            const orderNoColumn = document.createElement("div");
            orderNoColumn.id = "orderNoColumn" + i;
            orderNoColumn.className = "column-item";
            orderNoColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(orderNoColumn); 

            const startDateColumn = document.createElement("div");
            startDateColumn.id = "startDateColumn" + i;
            startDateColumn.className = "column-item";
            startDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(startDateColumn); 

            const finishDateColumn = document.createElement("div");
            finishDateColumn.id = "finishDateColumn" + i;
            finishDateColumn.className = "column-item";
            finishDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(finishDateColumn); 

            const onTimeDateColumn = document.createElement("div");
            onTimeDateColumn.id = "onTimeDateColumn" + i;
            onTimeDateColumn.className = "column-item";
            onTimeDateColumn.style = elementColour;
            document.getElementById(columnContainer.id).appendChild(onTimeDateColumn); 

            const statusColumn = document.createElement("div");
            statusColumn.id = "statusColumn" + i;
            statusColumn.className = "column-item";
            statusColumn.style = elementColour;
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

                // const expandText = document.createTextNode("Expand");
                // expandText.className = "jobButtonText";
                // document.getElementById(expandButton.id).appendChild(expandText); 

                const elem = document.createElement("img");
                elem.setAttribute("height", "15");
                elem.setAttribute("width", "15");
                elem.src = 'img/arrow-down-sign-to-navigate.png';
                document.getElementById(expandButton.id).appendChild(elem);
                //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
                //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>


            const openButton = document.createElement("div");
            openButton.id = "openButton" + i;
            openButton.className = "openButton";
            openButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(openButton); 

                // const openText = document.createTextNode("Open");
                // openText.className = "jobButtonText";
                // document.getElementById(openButton.id).appendChild(openText); 
                const elem2 = document.createElement("img");
                elem2.setAttribute("height", "15");
                elem2.setAttribute("width", "15");
                elem2.src = 'img/share.png';
                document.getElementById(openButton.id).appendChild(elem2);
                //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>


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