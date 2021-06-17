// when you hover over Good morning cards
//Body background color changing for different gradient (blue)


// document.querySelector("body").style.background = "red"

let body = document.querySelector("body")

let cardList = document.querySelectorAll(".album-cards")

console.log(cardList)

//?   1. get the element that it has to be hovered Over
//?           - trigger 
//?   2. add a function to the trigger
//?   3. get the element you have to do something
//?   4. apply the event                   

// let likedCard = document.getElementById("liked")

// likedCard.onmouseover = function() {
//     body.classList.toggle("bodytest")
// }


cardList.forEach(function( card ){
    
    card.onmouseover = function(){
       body.classList.add("bodytest")
    }
})

cardList.forEach(function( card ){
    
        card.onmouseleave = function(){
            body.classList.remove("bodytest")
        }
    }
)


//    body.style.transitionProperty = "body"
    // body.animate([
    //     // keyframes
    //     { 
    //         background: "linear-gradient(180deg, rgb(19, 147, 151) 0%, rgba(5,7,29,1) 23%, rgba(0,0,0,1) 100%)"
    //      },
            

    //     { background: "linear-gradient(180deg, rgba(10,15,70,1) 0%, rgba(5,7,29,1) 23%, rgba(0,0,0,1) 100%)" }
    //   ], {
    //     // timing options
    //     easing: "ease-in-out",
        
    //     duration: 2000,
    //     iterations: Infinity
    //   });