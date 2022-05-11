/*let todotext=`<div class="todo-list">
       <div class="todo-header">${title.value}
        </div>
       <div class="todo-text">${todo_text.value}</div>
       </div>`;*/
       let dialogbox=document.getElementById("dialog");
       let title=document.getElementById("title");
       let addbutton=document.getElementById("addButn");
       let todo_container=document.getElementById("todo_container");
       let close=document.getElementById("close");
       let todo_text=document.getElementById("todo_text");
       let error=document.querySelector(".error");
       let text_Area=document.querySelector(".todo-text");
       console.log("text area=",text_Area);
       
       addbutton.addEventListener("click",function(){
           dialogbox.style.display="flex";
       })
       close.addEventListener("click",function(){
           dialogbox.style.display="none";
       })
       function addTodo(){
           if(title.value!==""&&todo_text.value!=="")
           {
           let todotext=
               `<div class="todo-list">
              <div class="todo-header">${title.value}
               <button class="close">X</button>
               <button class="minimize">-</button>
               </div>
              <text>
              <textarea class="todo-text">${todo_text.value}</textarea>
              </text>
              </div>`;
           todo_container.innerHTML+=todotext;
           dialogbox.style.display="none";
           todo_text.value="";
           title.value="";
           error.style.display="none";
           minimize();
           deletetodo();
           }
           else
           {
           error.style.display="flex";
           }
       }
       function deletetodo()
       {
       let todoArr=document.querySelectorAll(".todo-list");
       let ticketcrossbtnArr=document.querySelectorAll(".close");
       for(let i=0;i<ticketcrossbtnArr.length;i++)
       {
           ticketcrossbtnArr[i].addEventListener("click",(e)=>{
               let todobox=e.target.closest(".todo-list");
                todobox.remove();
               console.log(todobox);
           })
       }
       }
       function minimize()
       {
           let miniBtnArr=document.querySelectorAll(".minimize");
           for(let i=0;i<miniBtnArr.length;i++)
           {
               miniBtnArr[i].addEventListener("click",(e)=>{
               let box=e.target.closest(".todo-list");
               console.log(box);
               let todotext=box.querySelector(".todo-text");
               console.log("final textarea=",todotext);
               //let id=document.getElementsByClassName(".todo-text");
              // console.log("id is",id);
               if(todotext.style.display!=="none")
               {
                   todotext.style.display="none";
               }
               else{
                   todotext.style.display="flex";
               }
               })
           }
       }
       
       
       