class Aventura {
  constructor() {
    this.pantallas = new Array(13);
    this.fondo =new Array (13);
    this.minumero = 0;
    this.textoPantallas = new Array(12);
    this.buttonX1 = 0;
    this.buttonY1 = 40;
    this.buttonX2= 0;
    this.buttonY2 = 0;
    this.buttonWidth = 100;
    this.buttonHeight = 40;
    this.decisionTomada1 = false;
    this.decisionTomada2 = false;
    this.decisionTomada3 = false;
    this.nuevaSecuencia = false;
    //this.setup();
    this.miniJuego= new MiniJuego ();
    this.NUMERO_JUEGO = 12;
   // this.setup();
  }

  setup() {
    createCanvas(600, 600);
    for (let i = 0; i < this.pantallas.length; i++) {
      this.pantallas[i] = 0;
    }
    for (let i = 0; i < this.fondo.length; i++) {
      this.fondo[i] = loadImage("./data/fondo_" + i + ".png", this.cargarImagenError);
    }
    this.textoPantallas[0] = "Elije tu propia aventura";
    this.textoPantallas[1] = "Florentino se enamora perdidamente de Fermina.";
    this.textoPantallas[2] = "Ella decide presentarlo a sus padres.";
    this.textoPantallas[3] = "Ellos no quieren aprobar su relación.";
    this.textoPantallas[4] = "Envían a Fermina al extranjeropara que se olvide de Florentino.";
    this.textoPantallas[5] = "Florentino continua con su vida y tiene historias con otras mujeres.";
    this.textoPantallas[6] = "Ella se casa por dinero con otro hombre muy mayor llamado Juvenal Urbino.";
    this.textoPantallas[7] = "Luego él muere y ella se reencuentra con su amor y viven felices para siempre";
    this.textoPantallas[8] = "Continúan sus vidas por separado y se olvidan de su amor.";
    this.textoPantallas[9] = "Enferman de cólera y mueren en la misma habitación de hospital";
    this.textoPantallas[10] = "Ella lo olvida y se casa, Florentino pasará su vida extrañándola.";
    this.textoPantallas[11] = "Confunde el amor con los efectos del cólera muriendo solo y enamorado.";
    this.textoPantallas[12] = "¡Jíjiji!";
  }

  draw() {
    background(0);
    if ( this.minumero===this.NUMERO_JUEGO ) {
      this.miniJuego.actualizar();
    } else {
      this.imagenesytexto();
    }
  }

  mousePressed() {

    if (this.minumero == 7) {
      if ((!this.decisionTomada1 && !this.decisionTomada2) || this.nuevaSecuencia) {
        if (mouseX >= this.buttonX1 && mouseX <= this.buttonX1 + this.buttonWidth && mouseY >= this.buttonY1 && mouseY <= this.buttonY1 + this.buttonHeight) {
          this.reiniciar();
        } else if (mouseX >= this.buttonX2 && mouseX <= this.buttonX2 + this.buttonWidth && mouseY >= this.buttonY2 && mouseY <= this.buttonY2 + this.buttonHeight) {
          this.decisionTomada1 = true;
          this.nuevaSecuencia = true;
          this.minumero = 11;
        }
      }
    } else if ((this.minumero == 11 || this.minumero == 9) && this.nuevaSecuencia) {
      if (mouseX >= this.buttonX2 && mouseX <= this.buttonX2 + this.buttonWidth && mouseY >= this.buttonY2 && mouseY <= this.buttonY2 + this.buttonHeight) {
        this.reiniciar();
      }
    } else {
      if (mouseX >= this.buttonX1 && mouseX <= this.buttonX1 + this.buttonWidth && mouseY >= this.buttonY1 && mouseY <= this.buttonY1 + this.buttonHeight) {
        this.avanzar();
      } else if (this.minumero == 6 && !this.decisionTomada3) {
        if (mouseX >= this.buttonX2 && mouseX <= this.buttonX2 + this.buttonWidth && mouseY >= this.buttonY2 && mouseY <= this.buttonY2 + this.buttonHeight) {
          this.decisionTomada3 = true;
          this.nuevaSecuencia = true;
          this.minumero = 8;
        }
      } else if (this.minumero == 5 && !this.decisionTomada1) {
        if (mouseX >= this.buttonX2 && mouseX <= this.buttonX2 + this.buttonWidth && mouseY >= this.buttonY2 && mouseY <= this.buttonY2 + this.buttonHeight) {
          this.miniJuego.reiniciarJuego ();
          this.decisionTomada2 = true;
          this.nuevaSecuencia = true;
          this.minumero = 12;
        }
      } else if ((this.minumero == 11 || this.minumero == 9) && this.nuevaSecuencia) {
        if (mouseX >= this.buttonX2 && mouseX <= this.buttonX2 + this.buttonWidth && mouseY >= this.buttonY2 && mouseY <= this.buttonY2 + this.buttonHeight) {
     
        
        }
      }
    }
  }



  reiniciar() {
    this.minumero = 0;
    this.decisionTomada1 = false;
    this.decisionTomada2 = false;
    this.decisionTomada3 = false;
    this.nuevaSecuencia = false;
  }

  avanzar() {
    this.minumero++;
    if (this.minumero >= this.fondo.length) {
      this.minumero = this.fondo.length - 1;
    }
  }

  imagenesytexto() {

    if (this.minumero >= 0 && this.minumero < 13) {
      image(this.fondo[this.minumero], 0, 0, 600, 600);

      fill(255);
      textSize(17);
      
      text(this.textoPantallas[this.minumero], 295, 530 );

      if ((this.minumero == 6 || this.minumero == 5) && !this.decisionTomada1) {
        this.button("Avanzar", this.buttonX1, this.buttonY1, this.buttonWidth, this.buttonHeight);
        this.button("Otra decisión", this.buttonX2, this.buttonY2, this.buttonWidth, this.buttonHeight);
      } else if (this.minumero == 7 && (!this.decisionTomada3 || !this.decisionTomada2) && !this.nuevaSecuencia) {
        this.button("Reiniciar", this.buttonX1, this.buttonY1, this.buttonWidth, this.buttonHeight);
      } else if ((this.minumero == 9 || this.minumero == 10) && this.nuevaSecuencia) {
        this.button("Reiniciar", this.buttonX2, this.buttonY2, this.buttonWidth, this.buttonHeight);
      } else {
        this.button("Avanzar", this.buttonX1, this.buttonY1, this.buttonWidth, this.buttonHeight);
      }
    }
  }





  button(etiqueta, x, y, ancho, alto) {
    if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
      fill(255, 255, 0);
    } else {
      fill(255);
    }

    rect(x, y, ancho, alto);

    fill(0);
    textAlign(CENTER, CENTER);
    text(etiqueta, x + ancho / 2, y + alto / 2);
  }

  keyPressed() {
    if (this.minumero == this.NUMERO_JUEGO ) {
      this.miniJuego.keyPressed();
    }
  }
}
