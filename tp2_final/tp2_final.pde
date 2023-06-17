//Fátima Ruscitti Gallo 94035/6
// tp2 de op art
//comisíon 3
//link al video comentado de youtube : https://youtu.be/nCnmU64tsvo

// cantidad de cuadrados
int numCuadrados = 10;  
 // Tamaño del cuadrado más grande
int tamInicial = 175;
// Valor de decremento de tamaño en cada iteración
int tamPaso = 18; 
// Color de los cuadrados
int colorCuadrado = 255; 
PImage imagen; 
void setup() {
  size(800, 400);
  background(255);
  imagen = loadImage("opt2.jpg");
}

void draw() {
  background(255);
  //muestra la imagen de op art a la derecha
  image(imagen,400,0,400,400);
  
  // Dibuja las cuatro repeticiones en diferentes regiones de la pantalla
  dibujaPiramide(-280, -90);
  dibujaPiramide(-110, 90);
  dibujaPiramide(-280, 90);
  dibujaPiramide(-110, -90);
}
