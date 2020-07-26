var orderList = document.getElementById('plansDisplay');
var theDiv = document.getElementById('stylings');
function insertPlan(){
    var plan = document.getElementById('addPlan');
    if(plan.value !== "") {
        var planData = document.createElement('li');
        var planPara = document.createElement('p');
        var planText = document.createTextNode(plan.value);
        var editBtn = document.createElement('button');
        var editTxt = document.createTextNode("Edit");
        var deleteBtn = document.createElement('button');
        var deleteTxt = document.createTextNode("Delete");
        planPara.appendChild(planText);
        planPara.setAttribute("class","row");
        editBtn.appendChild(editTxt);
        deleteBtn.appendChild(deleteTxt);
        editBtn.setAttribute("class","btn");
        editBtn.setAttribute("onclick","editFunc(this)");
        deleteBtn.setAttribute("class","btn");
        deleteBtn.setAttribute("onclick","deleteFunc(this)");
        planData.appendChild(planPara);
        planData.appendChild(editBtn);
        planData.appendChild(deleteBtn);
        orderList.appendChild(planData);    
        plan.value = "";
        if(orderList.childNodes.length > 7) {
            theDiv.style.overflowY = "scroll";
            theDiv.style.overflowX = "hidden";
        }
    }
    else {
        alert("Empty Work Plan");
    }
}
function deleteAll(){
    var orderList = document.getElementById('plansDisplay');
    orderList.innerHTML = "";
    theDiv.style.overflowY = "hidden";
    theDiv.style.overflowX = "hidden";    

}
function deleteFunc(li){
    li.parentNode.remove();
    if(orderList.childNodes.length <= 7){
        theDiv.style.overflowY = "hidden";
        theDiv.style.overflowX = "hidden";    
    }
}
function editFunc(li){
    var oldTxt = li.parentNode.firstChild.firstChild.nodeValue;
    var input = prompt("Enter Plan", oldTxt);
    li.parentNode.firstChild.firstChild.nodeValue = input;
}