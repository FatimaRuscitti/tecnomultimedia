//dibuja cuadrados 
void dibujaPiramide(int xPos, int yPos) {
  int tamActual = tamInicial;
  
  for (int i = 0; i < numCuadrados; i++) {
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill(colorCuadrado);
    }
    
    rect(xPos + (width/2 - tamActual/2), yPos + (height/2 - tamActual/2), tamActual, tamActual);
    
    tamActual -= tamPaso;
  }
}
