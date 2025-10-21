let btn = document.querySelector("button");
let input = document.querySelector("input")
let unList = document.querySelector(".pendList");
let compList = document.querySelector(".compList");

let add = function(){
    if (input.value === "") return;

    let list = document.createElement("li");
    list.innerText = input.value;

    unList.appendChild(list);
    input.value = "";

    list.addEventListener("click", function () {
    compList.appendChild(list);
});
};


btn.addEventListener("click",add);
