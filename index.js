"use strict";

addEventListener("DOMContentLoaded",()=>{

    function domElements(){
        let drums = document.querySelectorAll(".drum");

        return{
            drums,
        }
    }

    let element = domElements();



    /* there i create eventlistener if user click correct class */
    element.drums.forEach(drum =>{
        drum.addEventListener("click",(event)=>{
            let target = event.target;
            if(target && target.classList.contains("w")){
                let audio = new Audio("./sounds/crash.mp3");
                audio.play();
            }else if(target && target.classList.contains("a")){
                let audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            }else if(target && target.classList.contains("s")){
                let audio = new Audio("./sounds/snare.mp3");
                audio.play();
            }else if(target && target.classList.contains("d")){
                let audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            }else if (target && target.classList.contains("j")){
                let audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            }else if (target && target.classList.contains("k")){
                let audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            }else if(target && target.classList.contains("l")){
                let audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            }
        })
    })

    


    /* make eventlistener for keyboard and check if it valid */
    element.drums.forEach(drum =>{
        drum.addEventListener("keyup",(event)=>{
           switch(event.key){
            case "w":
                let audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break
            case "a":
                 let audio1 = new Audio("./sounds/kick-bass.mp3");
                 audio1.play();
                 break
            case "s":
                let audio2 = new Audio("./sounds/snare.mp3");
                audio2.play();
                break
            case "d":
                let audio3 = new Audio("./sounds/tom-1.mp3");
                audio3.play();
                break
            case "j":
                let audio4 = new Audio("./sounds/tom-2.mp3");
                audio4.play();
                break
            case "k":
                let audio5 = new Audio("./sounds/tom-3.mp3");
                audio5.play();
                break
            case "l":
                let audio6 = new Audio("./sounds/tom-4.mp3");
                audio6.play();
                break  
           }
           
        })

        /* create focus for elements for keyboard */
        if (element.drums.length > 0) {
            element.drums[0].focus(); 
        }
        
    })


    


})