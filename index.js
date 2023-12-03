for (let i=0; i<=10; i++){
    const div = document.createElement("div");
    div.id = i;
    div.className = "list-object-container ";
    div.style = "background-color: white;";
    document.getElementById("inner-content-container").appendChild(div);  
    console.log(i);
}