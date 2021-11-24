//Código JavaScript
//Alumno: Saul Humberto Alamilla Calixto
//No control 18390023

function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;
    this.tirarDados = function() {
        this.jugador1.caraDado1 = (Math.floor(Math.random()*6)+1); //usar random(1,6)
        this.jugador1.caraDado2 = (Math.floor(Math.random()*6)+1); //usar random(1,6)
        this.jugador2.caraDado1 = (Math.floor(Math.random()*6)+1); //usar random(1,6)
        this.jugador2.caraDado2 = (Math.floor(Math.random()*6)+1); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}

let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let juego1 = new JuegoDados(1, pedro, antonio);
let ganador;
Jugador.prototype.juegosGanados=0;

do {
    juego1.tirarDados();
    ganador = juego1.determinaGanador();
    console.log("El ganador del juego ", juego1.numeroJuego, "es: " + ganador);

    if (ganador == "Pedro Sánchez") {
        juego1.jugador1.juegosGanados++;
    }else if (ganador == "Antonio Ramírez"){
        juego1.jugador2.juegosGanados++;
    }
    juego1.numeroJuego++;
}while (juego1.jugador1.juegosGanados < 3 && juego1.jugador2.juegosGanados < 3);

console.log("Juegos en total ", juego1.numeroJuego-1);
if (juego1.jugador1.juegosGanados == 3){
    console.log("Pedro Sánchez ganó el torneo");
}else{
    console.log("Antonio Ramírez ganó el torneo");
}
//Determinar el primer ganador de 3 juegos y cuantos juegos hubo
