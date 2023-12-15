class MiniJuego {
  constructor () {
    this.jugador = null;
    this.circuloVerde = null;
    this.enemigos = [];
    this.puntuacion = 0;
    this.estado = 0; // 0 para pantalla de inicio, 1 para juego
  }
  setup() {
    createCanvas(600, 600);
    noStroke();
    textSize(18);
    textAlign(CENTER);
    this.reiniciarJuego();
  }

  actualizar() {
    if (this.estado === 0) {
      // Pantalla de inicio
      background(0);
      fill(255);
      text("Presiona Enter para empezar", width / 2, height / 2);
      textAlign(CENTER,TOP);
      text("Encuentrate con Fermina evitando \n que te maten los enemigos ", width / 2, height / 4);
    } else if (this.estado === 1) {
      // Juego
      background(0);

      this.jugador.mostrar();
      this.jugador.mover();

      this.circuloVerde.mostrar();

      for (let i = 0; i < this.enemigos.length; i++) {
        this.enemigos[i].mostrar();
        this.enemigos[i].mover();
        if (this.jugador.colision(this.enemigos[i])) {
          this.estado = 2; 
        }
      }

      if (this.jugador.colision(this.circuloVerde)) {
        this.puntuacion++;
        this.circuloVerde.reset();
      }
  fill(255);
      text(`Puntuación: ${this.puntuacion}`, width / 2, 30);

      if (this.puntuacion >= 5) {
        this.estado = 2; // Cambiar a pantalla de Ganaste
      }
    
    } else if (this.estado === 2) {
      // Pantalla de Game Over o Ganaste
      background(0);
      fill(255);
      if (this.puntuacion >= 5) {
        text("¡Ganaste! Presiona R para reiniciar", width / 2, height / 2);
      } else {
        text("¡Game Over! Presiona R para reiniciar", width / 2, height / 2);
      }
    }
  }

 keyPressed() {
  if (this.estado === 0 && keyCode === 13) {
    // Comenzar el juego si estamos en la pantalla de inicio y se presiona Enter
    this.estado = 1;
  } else if (this.estado === 2 && (key === 'r' || key === 'R')) {
    // Reiniciar el juego si estamos en la pantalla de Game Over y se presiona 'r' o 'R'
    // Agrega una verificación adicional para evitar reiniciar el juego si ya estamos en la pantalla de inicio
    if (this.estado !== 0) {
      this.reiniciarJuego();
      this.estado = 0; // Regresar a pantalla de inicio
    }
  }
}


  reiniciarJuego() {
    this.jugador = new Jugador(width / 2, height / 2);
    this.circuloVerde = new CirculoVerde();
    this.puntuacion = 0;
    this.enemigos = [];
    for (let i = 0; i < 15; i++) {
      this.enemigos.push(new Enemigo(random(width), random(height)));
    }
  }
}
class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 20;
    this.imagen = loadImage('data/personaje1.png');
  }

  mostrar() {
    fill(255, 255, 0);
    image(this.imagen, this.x -this.tamano/2, this.y-this.tamano/2, this.tamano);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 2;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 2;
    }
  }

  colision(objeto) {
    let d = dist(this.x, this.y, objeto.x, objeto.y);
    return d < this.tamano / 2 + objeto.tamano / 2;
  }
}

class CirculoVerde {
  constructor() {
    this.reset();
    this.tamano = 35;
    this.imagen = loadImage('data/personaje2.png'); 
  }

  mostrar() {
    fill(0, 255, 0);
    image(this.imagen, this.x - this.tamano/2, this.y - this.tamano/2, this.tamano, this.tamano);
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
  }
}

class Enemigo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 35;
    this.velocidadX = random(-3, 3);
    this.velocidadY = random(-3, 3);
    this.imagen  = loadImage('data/personaje3.png'); // Cargar la imagen
  }

  mostrar() {
    fill(255, 0, 0);
    image(this.imagen, this.x - this.tamano/2, this.y - this.tamano/2, this.tamano, this.tamano);
  }

  mover() {
    this.x += this.velocidadX;
    this.y += this.velocidadY;
    if (this.x < 0 || this.x > width) {
      this.velocidadX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.velocidadY *= -1;
    }
  }
}
