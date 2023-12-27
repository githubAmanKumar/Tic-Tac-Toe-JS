var squares = document.querySelectorAll(".square");
var flag = 0;
var reset = document.querySelector("#reset");
const newGame = document.querySelector("#newGame");
const winnervar = document.querySelector("#winner");
const click = new Audio("click.mp3");
const win = new Audio("win.mp3");
const draw = new Audio("draw.mp3");
const checkwin = () => {

    if (squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    } else if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML && squares[0].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[0].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    else if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[2].innerHTML != "") {
        winnervar.style.left = "25%"; win.play();
    }
    

}





squares.forEach(square => {

    square.addEventListener("click", function () {
        click.play();
        if (flag == 0) {
            square.innerHTML = "X";
            flag = 1;
        } else {
            square.innerHTML = "O";
            flag = 0;
        }
        square.disabled = true;
        if (squares != "") {
            checkwin();
        }
    })
});

reset.addEventListener("click", () => {

    squares.forEach(square => {
        square.innerHTML = "";
        square.disabled = false;
    });
})


newGame.addEventListener("click", () => {
    squares.forEach(square => {
        square.innerHTML = "";
        square.disabled = false;
    })
    winnervar.style.left = "100%";
})