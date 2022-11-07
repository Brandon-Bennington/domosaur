
let spanChange = document.querySelector('.mess-with-me');
let paraChange = document.querySelector('p.mess-with-me');
let image2 = document.querySelector('#hide-me');
let image1 = document.querySelector('#triceratops');
let feathery = document.querySelector('#feathers');
let toggle = document.querySelector("#toggle");
let dinosaurRow = document.querySelector("#row");
let biggify = document.querySelector("#biggify");

//1
spanChange.style.fontSize = "40px";
//2
paraChange.style.background = "green";
//3
image2.style.display = "none";
//4
image1.style.width = "324px";

//EVENT LISTENER CHALLENGE 
//1
spanChange.addEventListener("click", function(){
    spanChange.style.color = "orange";
});
//2
image1.addEventListener("click",function(){
    image1.style.border = "3px solid red";
});
//3
feathery.addEventListener("click", function(){

    feathery.style.opacity = ".5";
});
//4
toggle.addEventListener("click", function(){

    if(dinosaurRow.style.background === "purple"){
        dinosaurRow.style.background = "white"
    }   else{
        dinosaurRow.style.background = "purple"
    }
})
//5
biggify.addEventListener("mouseover", function(){
    biggify.style.width = "200px"
})

biggify.addEventListener("mouseout", function(){
    biggify.style.width = "162px"
})











