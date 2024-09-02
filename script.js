var inputs =document.getElementById("inp");
var text=document.getElementById("text");
function add(){
    if(inputs.value ==""){
       alert("please enter task");
    }else{
        var newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<button id="btn1" > Delete</button> `;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("#btn1").addEventListener("click",remove);
        
        function remove() {
            newEle.remove();
            
        }
        
       
    }
}