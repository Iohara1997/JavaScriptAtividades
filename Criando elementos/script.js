var fsList = document.querySelectorAll(".multiple-field")
for(var i = 0; i < fsList.length; i++){
  campo(fsList[i]);
}

function campo(fs){
  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";
  fs.appendChild(addButton);
  
  var firstInput = fs.querySelector("input");

  addButton.addEventListener("click", function(){
    var addDiv = document.createElement("div");

    var addCampo = document.createElement("input");
    addCampo.name = firstInput.name;
    addCampo.type = firstInput.type;

    var addExcluir = document.createElement("button");
    addExcluir.textContent = "Excluir";
    addExcluir.type = "button";
    addExcluir.addEventListener("click", function(){
      addDiv.remove();
    })

    addDiv.appendChild(addCampo);
    addDiv.appendChild(addExcluir);

    fs.insertBefore(addDiv, addButton);

  })
}
