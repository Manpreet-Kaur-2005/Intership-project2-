
let button=document.getElementById("addbtn")

addbtn.addEventListener("click",addTask)

function addTask(){
    const newTask=document.createElement("li")
    const tasklist=document.getElementById("tasklist")
  
    newTask.style.border="1px solid white"
    newTask.style.justifyContent="space-between"
    newTask.style.padding="8px"
    newTask.style.marginBottom="7px"
    newTask.style.display="flex"

    tasklist.appendChild(newTask)
    newTask.textContent=document.getElementById("inputTask").value
    document.getElementById("inputTask").value=""
    deleteTask(newTask)
}
   
function deleteTask(newTask){
const deletebtn=document.createElement("button")
deletebtn.textContent="Delete"
deletebtn.style.backgroundColor="orange"
deletebtn.style.color="black"
deletebtn.style.width="84px"
deletebtn.style.height="30px"


newTask.appendChild(deletebtn)
deletebtn.onclick=function(){
    newTask.remove()
    
}
}
