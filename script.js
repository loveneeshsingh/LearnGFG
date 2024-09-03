let pnameinput = document.getElementById("pname")
let ownerinput= document.getElementById("name")
let sizeinput = document.getElementById("size")
let button = document.getElementById("addbutton")
let cont = document.querySelector(".cont")

button.addEventListener("click", function(){
    let value1 = pnameinput.value
    let value2 = ownerinput.value
    let value3 = sizeinput.value
    
    pnameinput.value = "";
    ownerinput.value = "";
    sizeinput.value  = "";

    if (value1 == 0 , value2 == 0 , value3 == 0) return ;

    let taskEle = document.createElement("div")
    taskEle.classList.add("task")
    taskEle.innerHTML = `<p>
                            Property Name : ${value1} <br />
                            Owner Name &ensp;: ${value2} <br />
                            Property Size &ensp;: ${value3} <br />
                        </p> </br>
              <div class="dele">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/></svg>
                    
              </div>`;
              taskEle.style.color = "white";

        let deleicon = taskEle.querySelector(".dele")
        deleicon.addEventListener("click", function (){
            cont.removeChild(taskEle)
        })


    cont.appendChild(taskEle);
})