/*function Snake(){
	this.x = x;
	this.y = y;
	}

var 
var x= document.getElementsByClassName("cor1").value;
var y = document.getElementsByClassName("cor2").value;
tablero[x][y] = "A";

//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]
//Ingreso el auto en la posicion 3,5


//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}*/

/*var teclado = {
    Up:38,
    Down:40,
    Left:37,
    Right:39,
}

document.addEventListener("keyup", dibujar teclado);
function dibujarTeclado(evento)
{
    console.log(evento.keyCode);
}

function KeyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0,-1);
    }else if (KeyCode === DOWN_ARROW) {
        s.dir(0,1);
    }else if (KeyCode === RIGHT_ARROW) {
        s.dir(1,0);
    }else is (KeyCode === LEFT_ARROW) {
        s.dir(-1,0);
    }
}*/

window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
    var tecla = objeto.which;
    var x= document.getElementsByClassName("cor1").value;
    var y = document.getElementsByClassName("cor2").value;
}        
