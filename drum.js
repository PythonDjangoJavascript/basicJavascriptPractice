var allDrumButton = document.querySelectorAll(".drum");

// for (let i = 0; i < allDrumButton.length; i++) {
//     allDrumButton[i].addEventListener('click', ()=>
//     {
//         console.log(this.innerHTML); //find out why this one is undefined
//     });
// }

//Setting onClick sound listener
for (let i = 0; i < allDrumButton.length; i++) {
    allDrumButton[i].onclick = function ()
    {
        makeSound(this.innerHTML);
    }
}

//setting on keypress listener
document.addEventListener("keypress", function (event)
{
    makeSound(event.key);
});


//function for making sound
function makeSound(key)
{
    drumButtonAnimator(key);

    switch (key) {
        case "w":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(key);
    }
}

//function for button animation
function drumButtonAnimator(key)
{
    focusedButton = document.querySelector("." + key);
    focusedButton.classList.add("pressed");

    setTimeout(() =>
    {
        focusedButton.classList.remove("pressed");
    }, 100);
}


// function drumButtonFunction(button)
// {
//     const backGroundImg = document.querySelector('button').style.backgroundImage;
//     backGroundImg = url("images/tom1.png");
// }

//Practiced this function to understand how callback function works
// function anotherAddEventListener(typeOfEvetn, callback)
// {
//     //Detect Event code
//     var eventThatHappened = {
//         evnetType: "keypress",
//         key: "Enter",
//         durationOfKeyPress: 2
//     }

//     if (typeOfEvetn === eventThatHappened.evnetType) {
//         callback(eventThatHappened);
//     }
// }

// anotherAddEventListener("keypress", function (event)
// {
//     console.log(event);
// });
