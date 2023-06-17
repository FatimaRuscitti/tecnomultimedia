
void keyPressed() {
  // Reinicia el programa cuando se presiona la tecla "R"
  if (key == 'R' || key == 'r') {
    resetVariables();
  }
}

void mouseMoved() {
  // Modifica el tamaño de los cuadrados basado en la posición vertical del mouse
  tamInicial = int(map(mouseY, 0, height, 175, 400));
  redraw();
}
