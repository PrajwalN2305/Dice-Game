var randomNumber1=Math.floor(Math.random() *6 ) +1; 
var randomImages="dice"+randomNumber1+".png";
var randomSouces="images/"+randomImages;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" ,randomSouces);

var randomNumber2=Math.floor(Math.random() *6 ) +1; 

var randomSouces2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomSouces2);


if (randomNumber1>randomNumber2){
    document.querySelector("h2").innerHTML = "Player 1 won!"
}
else if (randomNumber1==randomNumber2) {
    document.querySelector("h2").innerHTML = "Match  tied , Try again!"
} else {
    document.querySelector("h2").innerHTML = "Player 2 won!"
}