// Mi video explicativo https://youtu.be/aUlN4k1YjnI?si=hF7Lfmxhf3nwrLUI
// mi nombre es Fátima Ruscitti Gallo 
//legajo 94035/6 
//juego acarde tipo pacman 
// hay un error en el nombre de la variable  cuadradoVerde  proque es un cirulo pero lo cambie porque solo colisionaba cuando tocabas el lado izquierdo 
//(en un inicio era un cuadrado verde pero me traia errores a la hora de verificar la colision entonces tranciciono a  un circulo asi me funcino el codigo para sumar los 5 puntos y ganar)
// deberia llamarse ciruculo verde pero ya estaba cansada y es sabado aparte me gusta que se llame cuadrado cuando es un circulo le da su toque  ;)
let jugadorX, jugadorY; // Posición del jugador
let cuadradoVerdeX, cuadradoVerdeY; // Posición del cuadrado verde
let enemigoX = []; // Coordenadas X de los enemigos
let enemigoY = []; // Coordenadas Y de los enemigos
let numEnemigos = 15; // Número de enemigos
let tamanoJugador = 20; // Tamaño del jugador
let tamanoEnemigo = 15; // Tamaño de los enemigos
let tamanoCuadradoVerde = 35; // Tamaño del cuadrado verde
let puntuacion = 0; // Puntuación
let finDeJuego = false;
let estado = 0; // 0 para pantalla de inicio, 1 para juego

function setup() {
  createCanvas(400, 400);
  noStroke();
  textSize(18);
  textAlign(CENTER);
  reiniciarJuego();
}

function draw() {
  if (estado === 0) {
    // Pantalla de inicio
    background(0);
    fill(255);
    text("Presiona cualquier tecla para empezar", width / 2, height / 2);
    fill(255);
    text("DEBES LLEGAR AL CIRULO VERDE \n SIN MORIR EN EL INTENTO", width / 2, height / 4);
  } else if (estado === 1) {
    // Juego
    background(0);

    // Mueve al jugador con las teclas arrow
    if (keyIsDown(LEFT_ARROW)) {
      jugadorX -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      jugadorX += 3;
    }
    if (keyIsDown(UP_ARROW)) {
      jugadorY -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      jugadorY += 3;
    }

    // Dibuja al jugador
    fill(255, 255, 0);
    ellipse(jugadorX, jugadorY, tamanoJugador);

    // Dibuja el cuadrado verde
    fill(0, 255, 0);
    ellipse(cuadradoVerdeX, cuadradoVerdeY, tamanoCuadradoVerde);
    
    // Mueve a los enemigos
    for (let i = 0; i < numEnemigos; i++) {
      enemigoX[i] += random(-3, 3);
      enemigoY[i] += random(-3, 3);
    }

    // Dibuja a los enemigos y verifica colisiones
    for (let i = 0; i < numEnemigos; i++) {
      fill(255, 0, 0);
      ellipse(enemigoX[i], enemigoY[i], tamanoEnemigo);
      let d = dist(jugadorX, jugadorY, enemigoX[i], enemigoY[i]);
      if (d < tamanoJugador / 2 + tamanoEnemigo / 2) {
        finDeJuego = true;
      }
    }

    // Verifica colisión con el cuadrado verde
    let d2 = dist(jugadorX, jugadorY, cuadradoVerdeX, cuadradoVerdeY);
    if (d2 < tamanoJugador / 2 + tamanoCuadradoVerde / 2) {
      puntuacion++;
      cuadradoVerdeX = random(width);
      cuadradoVerdeY = random(height);
    }

    // Muestra la puntuación
    fill(255);
    text(`Puntuación: ${puntuacion}`, width / 2, 30);

    // Verifica si has ganado
    if (puntuacion >= 5) {
      finDeJuego == true;
      fill(0, 255, 0);
      text("¡Ganaste! Presiona R para reiniciar", width / 2, height / 2);
    }

    // Verifica si has perdido
    if (finDeJuego) {
      estado = 2;
    }
  } else if (estado == 2) {
    // Pantalla de Game Over
    background(0);
    fill(255);
    text("¡Game Over! Presiona R para reiniciar", width / 2, height / 2);
  }
}

function keyPressed() {
  if (estado === 0) {
    // Comenzar el juego al presionar cualquier tecla
    estado = 1;
  } else if (estado === 1) {
    // Pausar o reanudar el juego al presionar 'P'
    if (key === 'p' || key === 'P') {
      if (finDeJuego) {
        reiniciarJuego();
        estado = 0; // Reiniciar el juego si estaba en estado de Game Over
      } else {
        finDeJuego = !finDeJuego; // Pausar o reanudar el juego
      }
    }
  } else if (estado === 2) {
    // Reiniciar el juego al presionar 'R' después del Game Over
    if (key === 'r' || key === 'R') {
      reiniciarJuego();
      estado = 0;
    }
  }
}

function reiniciarJuego() {
  jugadorX = width / 2;
  jugadorY = height / 2;
  puntuacion = 0;
  finDeJuego = false;
  for (let i = 0; i < numEnemigos; i++) {
    enemigoX[i] = random(width);
    enemigoY[i] = random(height);
  }
  cuadradoVerdeX = random(width);
  cuadradoVerdeY = random(height);
}
