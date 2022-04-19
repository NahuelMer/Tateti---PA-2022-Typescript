"use strict";
let drawAux = false;
let endAux = false;
let turnCounter = 0;
// let movesX: number = 0;
// let movesO: number = 0;
let turnName = "";
function start(user1, user2, playButton) {
    let input1 = getPlayer(user1);
    let input2 = getPlayer(user2);
    if (input1 == "" || input2 == "" || input1 == null || input2 == null) {
        setMsg("Debe ingresar un nombre para ambos jugadores");
        return;
    }
    else {
        document.getElementById("user1").disabled = true;
        document.getElementById("user2").disabled = true;
        playButton.disabled = true;
        drawAux = false;
        endAux = false;
        turnName = "X";
        setMsg(input1 + " comienza el juego");
    }
    ;
}
;
function getPlayer(name) {
    return document.getElementById(name).value;
}
function restart(user1, user2) {
    document.getElementById(user1).value = "";
    document.getElementById(user2).value = "";
    location.reload();
}
function setMsg(msg) {
    document.getElementById("msg").innerText = msg;
}
;
function nextMove(cell) {
    console.log(endAux);
    if (endAux == false) {
        if (cell.innerText == "" || cell.innerText == null) {
            turnCounter++;
            cell.innerText = turnName;
            nextTurn();
        }
        else {
            setMsg("Esta celda ya esta ocupada");
        }
    }
    else {
        return;
    }
    ;
}
;
function nextTurn() {
    verify();
    if (endAux == false) {
        if (turnName == "X") {
            turnName = "O";
            // movesO++;
            setMsg("Es el turno de " + getPlayer("user1"));
        }
        else {
            turnName = "X";
            // movesX++;
            setMsg("Es el turno de " + getPlayer("user2"));
        }
        ;
    }
    else {
        return;
    }
}
;
function verify() {
    if (document.getElementById("0").innerText == turnName && document.getElementById("4").innerText == turnName && document.getElementById("8").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("2").innerText == turnName && document.getElementById("4").innerText == turnName && document.getElementById("6").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("0").innerText == turnName && document.getElementById("1").innerText == turnName && document.getElementById("2").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("3").innerText == turnName && document.getElementById("4").innerText == turnName && document.getElementById("5").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("6").innerText == turnName && document.getElementById("7").innerText == turnName && document.getElementById("8").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("0").innerText == turnName && document.getElementById("3").innerText == turnName && document.getElementById("6").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("1").innerText == turnName && document.getElementById("4").innerText == turnName && document.getElementById("7").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (document.getElementById("2").innerText == turnName && document.getElementById("5").innerText == turnName && document.getElementById("8").innerText == turnName) {
        endGame();
        return;
    }
    ;
    if (turnCounter == 9) {
        gameDraw();
        return;
    }
}
;
function gameDraw() {
    setMsg("Partida terminada");
    alert("Empate! Nadie gana");
    drawAux = true;
    endAux = true;
    // resumen();
}
function endGame() {
    setMsg("Partida terminada");
    if (turnName == "X") {
        alert("El GANADOR ES: " + getPlayer("user1"));
    }
    else {
        alert("El GANADOR ES: " + getPlayer("user2"));
    }
    endAux = true;
    // resumen();
}
// function resumen() {
//     let input1 = document.getElementById("user1").value;
//     let input2 = document.getElementById("user2").value;
//     let j1 = {
//         "Nombre": input1,
//         "Movimientos": movesX,
//         "Estado": ""
//     }
//     let j2 = {
//         "Nombre": input2,
//         "Movimientos": movesO,
//         "Estado": ""
//     }
//     if (drawAux == true) {
//         j1.Estado = "Empatado"
//         j2.Estado = "Empatado"
//     } else {
//         if (turnName == "X") {
//             j1.Estado = "Ganador"
//             j2.Estado = "Perdedor"
//         } else {
//             j1.Estado = "Perdedor"
//             j2.Estado = "Ganador"
//         }
//     }
//     //Resumen
//     let jsonNJ1 = JSON.stringify(j1.Nombre, undefined, 2);
//     let jsonMJ1 = JSON.stringify(j1.Movimientos, undefined, 2);
//     let jsonSJ1 = JSON.stringify(j1.Estado, undefined, 2);
//     let jsonNJ2 = JSON.stringify(j2.Nombre, undefined, 2);
//     let jsonMJ2 = JSON.stringify(j2.Movimientos, undefined, 2);
//     let jsonSJ2 = JSON.stringify(j2.Estado, undefined, 2);
//     alert(`Resultados: ` + jsonNJ1 + ` Movimientos: ` + jsonMJ1 + ` Estado: ` + jsonSJ1 + `
//                         ` + jsonNJ2 + ` Movimientos: ` + jsonMJ2 + ` Estado: ` + jsonSJ2);
// }
