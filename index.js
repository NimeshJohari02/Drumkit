var arr = document.querySelectorAll(".drum");
for (var i = 0; i < arr.length; i++)
{
  arr[i].addEventListener("click", function(){
    makesound(this.innerText);
    buttonanimation(this.innerText);
  }
)
}



document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonanimation(event.key);
})



function makesound(key)
{
  var mysound;
  switch (key)
  {
    case 'w':
      mysound = new Audio("sounds/tom-1.mp3");
      break;

    case 'a':
      mysound = new Audio("sounds/tom-2.mp3");
      break;

    case 's':
      mysound = new Audio("sounds/tom-3.mp3");
      break;

    case 'd':
      mysound = new Audio("sounds/tom-4.mp3");
      break;

    case 'j':
      mysound = new Audio("sounds/snare.mp3");
      break;

    case 'k':
      mysound = new Audio("sounds/crash.mp3");
      break;

    case 'l':
      mysound = new Audio("sounds/kick-bass.mp3");
      break;
      default:
      break;
  }
  mysound.play();
}

function buttonanimation(key)
{
  var active_button =document.querySelector("."+key);
  active_button.classList.add("pressed");
  setTimeout(function(){
    active_button.classList.remove("pressed");
  },100)
}
