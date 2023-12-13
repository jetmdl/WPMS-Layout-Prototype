function removeElementsOuterContent(){
    const el = document.getElementById('outer-content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeElementsInnerContent(){
    const el = document.getElementById('inner-content-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function removeElementsHeaderContent(){
    const el = document.getElementById('contextual-menu-container');
    while(el.firstChild) el.removeChild(el.firstChild);
}

function insertJobElements(){
    let colourChooser = 0;
    let elementColour = "#E8E9EC;";
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
            }
            else{
                elementColour = "background-color: #E8E9EC;";
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

                const expandIcon = document.createElement("img");
                expandIcon.setAttribute("height", "15");
                expandIcon.setAttribute("width", "15");
                expandIcon.src = 'img/arrow-down-sign-to-navigate.png';
                document.getElementById(expandButton.id).appendChild(expandIcon);
                //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
                //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

            const openButton = document.createElement("div");
            openButton.id = "openButton" + i;
            openButton.className = "openButton";
            openButton.style = "background-color: #999999;";
            document.getElementById(jobButtonContainer.id).appendChild(openButton); 

                const openIcon = document.createElement("img");
                openIcon.setAttribute("height", "15");
                openIcon.setAttribute("width", "15");
                openIcon.src = 'img/share.png';
                document.getElementById(openButton.id).appendChild(openIcon);
                //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>


        const hiddenElementsContainer = document.createElement("div");
        hiddenElementsContainer.id = "hiddenElementsContainer" + i;
        hiddenElementsContainer.className = "hiddenElementsContainer";
        hiddenElementsContainer.style = "background-color: pink;";
        document.getElementById(i).appendChild(hiddenElementsContainer);  

    }
}

function addTestExpandListeners(){
    let clickedIdLight = document.getElementsByClassName("expandButton");
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
    anId = anId.replace("expandButton", "");

    let expandDiv1 = document.getElementById(anId);
    let expandDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    expandDiv1.style = "height: 120px";
    expandDiv2.style = "height: 85px";

    const el = document.getElementById("jobButtonContainer"+anId);
    while(el.firstChild) el.removeChild(el.firstChild);

    const collapseButton = document.createElement("div");
    collapseButton.id = "collapseButton" + anId;
    collapseButton.className = "collapseButton";
    collapseButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(collapseButton); 

        const expandIcon = document.createElement("img");
        expandIcon.setAttribute("height", "15");
        expandIcon.setAttribute("width", "15");
        expandIcon.src = 'img/up-arrow.png';
        document.getElementById("collapseButton" + anId).appendChild(expandIcon);
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

    const openButton = document.createElement("div");
    openButton.id = "openButton" + anId;
    openButton.className = "openButton";
    openButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(openButton); 

        const openIcon = document.createElement("img");
        openIcon.setAttribute("height", "15");
        openIcon.setAttribute("width", "15");
        openIcon.src = 'img/share.png';
        document.getElementById("openButton" + anId).appendChild(openIcon);
        //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>
    
    const contractId = document.getElementById("collapseButton" + anId);
    contractId.addEventListener('click', contractGetClickedId);
}

function contractJobSummary(anId){
    console.log(anId);
    anId = anId.replace("collapseButton", "");
    console.log(anId);

    let contractDiv1 = document.getElementById(anId);
    let contractDiv2 = document.getElementById("hiddenElementsContainer" + anId);

    contractDiv1.style = "height: 30px";
    contractDiv2.style = "height: 0px";

    const el = document.getElementById("jobButtonContainer"+anId);
    while(el.firstChild) el.removeChild(el.firstChild);

    const expandButton = document.createElement("div");
    expandButton.id = "expandButton" + anId;
    expandButton.className = "expandButton";
    expandButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(expandButton); 

        const expandIcon = document.createElement("img");
        expandIcon.setAttribute("height", "15");
        expandIcon.setAttribute("width", "15");
        expandIcon.src = 'img/arrow-down-sign-to-navigate.png';
        document.getElementById("expandButton" + anId).appendChild(expandIcon);
        //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>
        //<a href="https://www.flaticon.com/free-icons/up-arrow" title="up arrow icons">Up arrow icons created by Roundicons - Flaticon</a>

    const openButton = document.createElement("div");
    openButton.id = "openButton" + anId;
    openButton.className = "openButton";
    openButton.style = "background-color: #999999;";
    document.getElementById("jobButtonContainer"+anId).appendChild(openButton); 

        const openIcon = document.createElement("img");
        openIcon.setAttribute("height", "15");
        openIcon.setAttribute("width", "15");
        openIcon.src = 'img/share.png';
        document.getElementById("openButton" + anId).appendChild(openIcon);
        //<a href="https://www.flaticon.com/free-icons/export" title="export icons">Export icons created by Amazona Adorada - Flaticon</a>

    addTestExpandListeners();
}

function addSearchModalListner() {
    const searchModalId = document.getElementById("search-button");
    searchModalId.addEventListener('click', searchModal);
}

function searchModal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    modal.style.display = "block";

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='search-container';
    new_div.className = newClass;
    new_div.id = 'searchContainer';
    document.getElementById('modal-content').appendChild(new_div);

    //Create a container for the form section header
    let search_header_div = document.createElement('div');
    let search_header_class ='search-header-container';
    search_header_div.className = search_header_class;
    search_header_div.id = 'search-header-container';
    document.getElementById('searchContainer').appendChild(search_header_div);   

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('search-header-container').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Enter Work Order Number: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let wo_feild_div = document.createElement('div');
        let wo_feild_class ='feild_div';
        wo_feild_div.className = wo_feild_class;
        wo_feild_div.id = 'wo_feild_div';
        document.getElementById('searchContainer').appendChild(wo_feild_div); 

            // Create value field for selected option
            let valueInput = document.createElement('input');
            valueInput.setAttribute('type', 'text');
            valueInput.setAttribute('name', 'input');
            valueInput.setAttribute('placeholder', 'Work Order Number');
            valueInput.id = 'searchInput';

            document.getElementById('wo_feild_div').appendChild(valueInput);

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let actionButton = document.createElement('button');
            actionButton.appendChild(document.createTextNode('Submit'));
            actionButton.addEventListener('click', function() {validateSearch(document.getElementById('searchInput').value)});
            document.getElementById('wo_feild_div').appendChild(actionButton);

            let dieno_header_div = document.createElement('div');
            let dieno_header_class ='search-header-container';
            dieno_header_div.className = dieno_header_class;
            dieno_header_div.id = 'dieno-header-container';
            document.getElementById('searchContainer').appendChild(dieno_header_div);   

    //Create title for the form
    let new_dieSearch_header = document.createElement('h3');
    let dieSearchHeaderClass = 'formHeader';
    new_dieSearch_header.className = dieSearchHeaderClass;
    document.getElementById('dieno-header-container').appendChild(new_dieSearch_header);

    //Populate and append the form title. 
    dieSearchHeaderString = 'Enter Die Number: '; 
    new_dieSearch_header.appendChild(document.createTextNode(dieSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let die_feild_div = document.createElement('div');
        let die_feild_class ='feild_div';
        die_feild_div.className = die_feild_class;
        die_feild_div.id = 'die_feild_div';
        document.getElementById('searchContainer').appendChild(die_feild_div); 

            // Create value field for selected option
            let dieSearchValueInput = document.createElement('input');
            dieSearchValueInput.setAttribute('type', 'text');
            dieSearchValueInput.setAttribute('name', 'input');
            dieSearchValueInput.setAttribute('placeholder', 'Die Number');
            dieSearchValueInput.id = 'dieNoSearchInput';

            document.getElementById('die_feild_div').appendChild(dieSearchValueInput);

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let dieSearchActionButton = document.createElement('button');
            dieSearchActionButton.appendChild(document.createTextNode('Submit'));
            dieSearchActionButton.addEventListener('click', function() {insertSearchedDieElements(document.getElementById('dieNoSearchInput').value)});
            document.getElementById('die_feild_div').appendChild(dieSearchActionButton);

    let list_header_div = document.createElement('div');
    let list_header_class ='search-header-container';
    list_header_div.className = list_header_class;
    list_header_div.id = 'list-header-container';
    document.getElementById('searchContainer').appendChild(list_header_div); 

    //Create title for the form
    let new_list_dieSearch_header = document.createElement('h3');
    let listSearchHeaderClass = 'formHeader';
    new_list_dieSearch_header.className = listSearchHeaderClass;
    document.getElementById('list-header-container').appendChild(new_list_dieSearch_header);

    //Populate and append the form title. 
    listSearchHeaderString = 'Select Department and component to see process to-do list: '; 
    new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
    // Create line break
    //let br = document.createElement('br');
    document.getElementById('searchContainer').appendChild(br.cloneNode());

        //Create a container for the form elements
        let list_feild_div = document.createElement('div');
        let list_feild_class ='feild_div';
        list_feild_div.className = list_feild_class;
        list_feild_div.id = 'list_feild_div';
        document.getElementById('searchContainer').appendChild(list_feild_div); 

            var departmentList = ['Turning', 'Soft Machine', 'Hard Machine', 'Ramspark', 'Wirespark', 'Finishing']

            var selectList = document.createElement("select");
            selectList.id = "deptSelect";
            document.getElementById('list_feild_div').appendChild(selectList);

            for (var i = 0; i < departmentList.length; i++) {
                var option = document.createElement("option");
                option.value = departmentList[i];
                option.text = departmentList[i];
                selectList.appendChild(option);
            }

            //Populate and append the form title. 
            //listSearchHeaderString = 'Select Component: '; 
            //new_list_dieSearch_header.appendChild(document.createTextNode(listSearchHeaderString));
            // Create line break
            //let br = document.createElement('br');
            document.getElementById('list_feild_div').appendChild(br.cloneNode());

            var componentList = ['Lip', 'Mandrel', 'Dieplate', 'Backer', 'Bolster']

            var selectList = document.createElement("select");
            selectList.id = "componentSelect";
            document.getElementById('list_feild_div').appendChild(selectList);

            for (var i = 0; i < componentList.length; i++) {
                var option = document.createElement("option");
                option.value = componentList[i];
                option.text = componentList[i];
                selectList.appendChild(option);
            }

            // Create a button and an event listner that passes the values contained in the form to function that updates the correct dictionary. 
            document.getElementById('searchContainer').appendChild(br.cloneNode());
            let listSearchActionButton = document.createElement('button');
            listSearchActionButton.appendChild(document.createTextNode('Submit'));
            listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
            document.getElementById('list_feild_div').appendChild(listSearchActionButton);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
    const el = document.getElementById('searchContainer');
    while(el.firstChild) el.removeChild(el.firstChild);
        modal.style.display = "none";
    }
    } 
}

function addSortModalListner() {
    const sortModalId = document.getElementById("column-sort-button");
    sortModalId.addEventListener('click', sortModal);
}

function sortModal() {
    // Get the modal
    var modal = document.getElementById("sort-modal");

    // open the modal
    modal.style.display = "block";

    // Create container for form
    let new_div = document.createElement('div');
    let newClass ='sort-container';
    new_div.className = newClass;
    new_div.id = 'sortContainer';
    document.getElementById('sort-modal-content').appendChild(new_div);

    //Create a container for the form section header
    let sort_header_div = document.createElement('div');
    let sort_header_class ='sort-header-container';
    sort_header_div.className = sort_header_class;
    sort_header_div.id = 'sort-header-container';
    document.getElementById('sortContainer').appendChild(sort_header_div);   

    //Create title for the form
    let new_header = document.createElement('h3');
    let headerClass = 'formHeader';
    new_header.className = headerClass;
    document.getElementById('sort-header-container').appendChild(new_header);

    //Populate and append the form title. 
    headerString = 'Sort jobs: '; 
    new_header.appendChild(document.createTextNode(headerString));
    // Create line break
    let br = document.createElement('br');
    document.getElementById('sortContainer').appendChild(br.cloneNode());

    //Create a container for the form elements
    let list_feild_div = document.createElement('div');
    let list_feild_class ='feild_div';
    list_feild_div.className = list_feild_class;
    list_feild_div.id = 'list_feild_div';
    document.getElementById('sortContainer').appendChild(list_feild_div); 

    var valueList = ['Work Order', 'Die Number', 'Customer', 'Order Number', 'Start Date', 'End Date', 'On Time']

    var selectList = document.createElement("select");
    selectList.id = "componentSelect";
    document.getElementById('list_feild_div').appendChild(selectList);

    for (var i = 0; i < valueList.length; i++) {
        var option = document.createElement("option");
        option.value = valueList[i];
        option.text = valueList[i];
        selectList.appendChild(option);
    }

    document.getElementById('sortContainer').appendChild(br.cloneNode());
    let listSearchActionButton = document.createElement('button');
    listSearchActionButton.appendChild(document.createTextNode('Submit'));
    listSearchActionButton.addEventListener('click', function() {insertDeptToDoElements(document.getElementById('deptSelect').value, document.getElementById('componentSelect').value)});
    document.getElementById('list_feild_div').appendChild(listSearchActionButton);

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        const el = document.getElementById('sortContainer');
        while(el.firstChild) el.removeChild(el.firstChild);
        modal.style.display = "none";
    }
    } 
}

insertJobElements();
addTestExpandListeners();
addSearchModalListner()
addSortModalListner();