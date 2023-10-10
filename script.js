console.log("Welcome to MyTicTacToe")
let music = new Audio("winning.mp3.wav")
let music1 = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3.wav")
let turn1 = "X"
let isgameover = false;
let reset = document.getElementById("reset")

//function to change the turn
const changeTurn = ()=>{
    return turn1 === "X"?"0":"X"
}

//function to check winner
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 26, 5, 0],
        [0, 3, 6, 17, 14, 90],
        [2, 5, 8, 35, 14, 90],
        [2, 4, 6, 25, 14, 135],
        [6, 7, 8, 26, 22, 0],
        [0, 4, 8, 26, 13, 226],
        [3, 4, 5, 26, 13, 0],
        [1, 4, 7, 26, 13, 90],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            isgameover = true;
            music.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "25vw";
        }
       

    })

}

//reset
    reset.addEventListener('click', ()=>{
        let boxtexts = document.querySelectorAll('.boxtext')
        Array.from(boxtexts).forEach(element =>{
            element.innerText = ""
        });
        turn1 = "X";
        isgameover = false
        document.querySelector('.line').style.width = "0px";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0vw"

    })

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn1;
            turn1 = changeTurn();
            turn.play();
            checkWin();
            if(!isgameover){

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn1;
            }

        }
    })

})