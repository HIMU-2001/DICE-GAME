var num1 = Math.floor(Math.random()*6)+1;

var source1 = "images/dice"+num1+".png";
document.querySelector(".img1").setAttribute("src", source1);

var num2 = Math.floor(Math.random()*6)+1;

var source2 = "images/dice"+num2+".png";
document.querySelector(".img2").setAttribute("src",source2);


if(num1>num2){
  document.querySelector("h1").innerHTML="🚩PLAYER 1 WINS";
}
else if(num2>num1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS🚩";
}
else if(num1===num2){
  document.querySelector("h1").innerHTML="🚩 DRAW 🚩";
}
