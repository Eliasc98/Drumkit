document.addEventListener("keypress", function (e){
    sounds(e.key);
    animation(e.key);
});


for (var i = 0; i < 8; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        sounds(buttonInnerHtml);
        animation(buttonInnerHtml)        
    })
}

function sounds(key){
    switch (key) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();            
            break;

        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "f": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: console.log(buttonInnerHtml);
            break;
    };
}


function animation(anime) {
    var active = document.querySelector("."+ anime);

    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed")
    }, 100);
}