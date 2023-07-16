//https://youtu.be/Mqs5QBVR_ak
//fátima Ruscitti Gallo

int[] pantallas = new int[13];
PImage[] fondo = new PImage[13];
int minumero = 0;
String[] textoPantallas = new String[12];
int buttonX1;
int buttonY1;
int buttonX2;
int buttonY2;
int buttonWidth = 100;
int buttonHeight = 40;
boolean decisionTomada1 = false;
boolean decisionTomada2 = false;
boolean decisionTomada3 = false;
boolean nuevaSecuencia = false;

void setup() {
  size(600, 600);

  for (int i = 0; i < pantallas.length; i++) {
    pantallas[i] = 0;
  }

  for (int i = 0; i < fondo.length; i++) {
    fondo[i] = loadImage("fondo " + i + ".png");
  }

  textoPantallas[0] = "Elije tu pripia aventura";
  textoPantallas[1] = "Florentino se enamora perdidamente de Fermina.";
  textoPantallas[2] = "Ella decide presentarlo a sus padres.";
  textoPantallas[3] = "Ellos no quieren aprobar su relacion.";
  textoPantallas[4] = "Envian a fermina al extranjero para que se olvide de florentino.";
  textoPantallas[5] = "Florentino continua con su vida y tiene historias con otras mujeres.";
  textoPantallas[6] = "Ella se casa por dinero con un otro hombre muy mayor llamado Juvenal Urbino.";
  textoPantallas[7] = "Luego el muere y ella se reencuentra con su amor y viven felices para siempre";
  textoPantallas[8] = "Continuan sus vidas por separado y se olvidan de su amor.";
  textoPantallas[9] = "Enferman de colera y mueren en la misma habitacion de hospital";
  textoPantallas[10] = "Ella lo olvida y se casa, Florentino pasara su vida extrañandola.";
  textoPantallas[11] = "Confunde el amor con los efectos del colera muriendo solo y enamorado  .";

  buttonX1 = width - buttonWidth * 2;
  buttonY1 = height - buttonHeight;
  buttonX2 = 20;
  buttonY2 = 20;
}

void draw() {
  background(0);
  imagenesytexto();
}

void mousePressed() {
  if (minumero == 7) {
    if ((!decisionTomada1 && !decisionTomada2) || nuevaSecuencia) {
      if (mouseX >= buttonX1 && mouseX <= buttonX1 + buttonWidth && mouseY >= buttonY1 && mouseY <= buttonY1 + buttonHeight) {
        reiniciar();
      } else if (mouseX >= buttonX2 && mouseX <= buttonX2 + buttonWidth && mouseY >= buttonY2 && mouseY <= buttonY2 + buttonHeight) {
        decisionTomada1 = true;
        nuevaSecuencia = true;
        minumero = 11;
      }
    }
  } else if ((minumero == 11 || minumero == 9) && nuevaSecuencia) {
    if (mouseX >= buttonX2 && mouseX <= buttonX2 + buttonWidth && mouseY >= buttonY2 && mouseY <= buttonY2 + buttonHeight) {
      reiniciar();
    }
  } else {
    if (mouseX >= buttonX1 && mouseX <= buttonX1 + buttonWidth && mouseY >= buttonY1 && mouseY <= buttonY1 + buttonHeight) {
      avanzar();
    } else if (minumero == 6 && !decisionTomada3) {
      if (mouseX >= buttonX2 && mouseX <= buttonX2 + buttonWidth && mouseY >= buttonY2 && mouseY <= buttonY2 + buttonHeight) {
        decisionTomada3 = true;
        nuevaSecuencia = true;
        minumero = 8;
      }
    } else if (minumero == 5 && !decisionTomada1) {
      if (mouseX >= buttonX2 && mouseX <= buttonX2 + buttonWidth && mouseY >= buttonY2 && mouseY <= buttonY2 + buttonHeight) {
        decisionTomada1 = true;
        nuevaSecuencia = true;
        minumero = 8;
      }
    }
  }
}

void button(String label, int x, int y, int width, int height) {
  fill(255);
  rect(x, y, width, height);

  fill(0);
  textAlign(CENTER, CENTER);
  text(label, x + width / 2, y + height / 2);
}

void imagenesytexto() {
  if (minumero >= 0 && minumero < 12) {
    image(fondo[minumero], 0, 0, 600, 600);

    fill(255);
    textSize(17);
    text(textoPantallas[minumero], 290, 520);

    if ((minumero ==  6|| minumero == 5) && !decisionTomada1) {
      button("Avanzar", buttonX1, buttonY1, buttonWidth, buttonHeight);
      button("Otra decisión", buttonX2, buttonY2, buttonWidth, buttonHeight);
    } else if (minumero == 7&& (!decisionTomada3 || !decisionTomada2) && !nuevaSecuencia) {
      button("Reiniciar", buttonX1, buttonY1, buttonWidth, buttonHeight);
    } else if ((minumero == 9|| minumero == 11) && nuevaSecuencia) {
      button("Reiniciar", buttonX2, buttonY2, buttonWidth, buttonHeight);
    } else {
      button("Avanzar", buttonX1, buttonY1, buttonWidth, buttonHeight);
    }
  }
}

void reiniciar() {
  minumero = 0;
  decisionTomada1 = false;
  decisionTomada2 = false;
  decisionTomada3 = false;
  nuevaSecuencia = false;
}

void avanzar() {
  minumero++;
  if (minumero >= fondo.length) {
    minumero = fondo.length - 1;
  }
}
