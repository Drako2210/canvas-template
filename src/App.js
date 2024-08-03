import {drawPicture, onClick} from "./canvas";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function draw() {
    // Aufgabe 1
    ctx.fillRect(50, 100, 400, 300)

    // Aufgabe 2
    ctx.fillStyle = "blue"
    ctx.fillRect(25, 75, 100, 145)

    // Aufgabe 3
    ctx.fillStyle = "red"
    ctx.strokeStyle = "green"
    ctx.lineWidth = 10
    ctx.arc(300,100,50,0, Math.PI * 2, true)
    ctx.fill()
    ctx.stroke()

    //Aufgabe 4
    ctx.strokeStyle = "yellow"
    ctx.lineWidth = 10
    ctx.strokeRect(400,400,200,200)

    //Aufgabe 5
    ctx.fillStyle = "black"
    ctx.font = "48px serif"
    ctx.fillText("Quadrat", 425, 510)

    //Aufgabe 6
    drawPicture(ctx, "black_bishop.svg", 300, 300, 100, 100)

    // Aufgabe 7
    ctx.fillStyle = "black"
    ctx.fillRect(700,100,440,440)

    for(let i = 0; i < 8; i++ ){
        for(let j = 0 ; j < 8; j++){
             

            if(i % 2 == 0){
                if(j % 2 !== 0){
                ctx.fillStyle = "green"
                }
                else{ ctx.fillStyle = "white"}
            }
            else{
                if(j % 2 == 0){
                    ctx.fillStyle = "green"
                    }
                    else{ ctx.fillStyle = "white"}
            }

            ctx.fillRect(720 + j * 50, 120 + 50 * i,50,50)
            
        }

    }

    // Numbers

    ctx.font = "12px serif"
    ctx.fillStyle = "white"
    ctx.fillText("8", 1113, 132)
    ctx.fillStyle = "green"
    ctx.fillText("7", 1113, 182)
    ctx.fillStyle = "white"
    ctx.fillText("6", 1113, 232)
    ctx.fillStyle = "green"
    ctx.fillText("5", 1113, 282)
    ctx.fillStyle = "white"
    ctx.fillText("4", 1113, 332)
    ctx.fillStyle = "green"
    ctx.fillText("3", 1113, 382)
    ctx.fillStyle = "white"
    ctx.fillText("2", 1113, 432)
    ctx.fillStyle = "green"
    ctx.fillText("1", 1113, 482)


    // Letter

    ctx.font = "12px serif"
    ctx.fillStyle = "white"
    ctx.fillText("a", 722, 518)
    ctx.fillStyle = "green"
    ctx.fillText("b", 772, 518)
    ctx.fillStyle = "white"
    ctx.fillText("c", 822, 518)
    ctx.fillStyle = "green"
    ctx.fillText("d", 872, 518)   
    ctx.fillStyle = "white"
    ctx.fillText("e", 922, 518)
    ctx.fillStyle = "green"
    ctx.fillText("f", 972, 518) 
    ctx.fillStyle = "white"
    ctx.fillText("g", 1022, 518)
    ctx.fillStyle = "green"
    ctx.fillText("h", 1072, 518)
    

    // Black Setup
    
    drawPicture(ctx,"bR.svg", 720, 120, 50,50)
    drawPicture(ctx,"bN.svg", 770, 120, 50,50)
    drawPicture(ctx,"bB.svg", 820, 120, 50,50)
    drawPicture(ctx,"bQ.svg", 870, 120, 50,50)
    drawPicture(ctx,"bK.svg", 920, 120, 50,50)
    drawPicture(ctx,"bB.svg", 970, 120, 50,50)
    drawPicture(ctx,"bN.svg", 1020, 120, 50,50)
    drawPicture(ctx,"bR.svg", 1070, 120, 50,50)

    for(let i = 0; i < 8; i++){
        drawPicture(ctx, "bP.svg", 720 + 50 * i, 170, 50,50)
    }

    // White Setup
    
    drawPicture(ctx,"wR.svg", 720, 470, 50,50)
    drawPicture(ctx,"wN.svg", 770, 470, 50,50)
    drawPicture(ctx,"wB.svg", 820, 470, 50,50)
    drawPicture(ctx,"wQ.svg", 870, 470, 50,50)
    drawPicture(ctx,"wK.svg", 920, 470, 50,50)
    drawPicture(ctx,"wB.svg", 970, 470, 50,50)
    drawPicture(ctx,"wN.svg", 1020, 470, 50,50)
    drawPicture(ctx,"wR.svg", 1070, 470, 50,50)

    for(let i = 0; i < 8; i++){
        drawPicture(ctx, "wP.svg", 720 + 50 * i, 420, 50,50)
    }


    for(let i = 0; i < 8; i++ ){
        for(let j = 0 ; j < 8; j++){
            const row = ["1","2","3","4","5","6","7","8"]
            const column = ["a","b","c","d","e","f","g","h"]

            //onClick(720 + j * 50, 120 + 50 * i, 50, 50, function() {alert(column[i], row[j])})
        }

    }

    onClick (400, 400, 200, 200, function() { alert("Quadrat")} )
    ctx.fillStyle = "red"

    ctx.fillRect(720,120,50,50)
    onClick (720, 120, 50, 50, function() { alert("test2")} )

    ctx.strokeRect(120,720,50,50)
    onClick (120, 720, 50, 50, function() { alert("test")} )

    ctx.fillRect(220,720,50,50)
    onClick (220, 720, 50, 50, function() { alert("test3")} )
    
    
    
    
}

document.addEventListener("DOMContentLoaded", function () {
    draw();
})


