// let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
    let inp = document.querySelector("input");

    if (inp.value == '') {
        alert("Field cannot be empty");
    }
    else {
        let deltbn = document.createElement("button");
        deltbn.innerText = "Delete Task";
        let li = document.createElement("li");
        li.innerText = inp.value;
        ul.appendChild(li);
        li.appendChild(deltbn);
        inp.value = '';

         deltbn.addEventListener("click" ,() => {
   
          ul.removeChild(li);    
           
    } )
    }
   
});