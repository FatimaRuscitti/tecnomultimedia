//Fátima Ruscitti Gallo 
//94035/6
//comision 3
//Tp0 retrato
PImage img;

void setup () {
  size ( 800, 400 ); // definimos el tamaño

  img = loadImage("imagen.png");
}
void draw () {
  background(#F5DADA) ; // establecemos el fondo
  image(img, 400, 0);
  stroke(#CBA87B);
  fill(#CBA87B);
  rect(185, 300, 110, 200); // cuello


  stroke(#CBA87B);
  fill(#CBA87B);
  rect(150, 130, 180, 170); //  cara
  stroke(#CEAD85);
  fill(#CEAD85);
  triangle(240, 320, 150, 175, 330, 175);
  fill(#BFA485); //barba
  rect(203, 267, 75, 64); // mandibula/pomulos

  stroke(#CBA87B);

  fill(#C9A87C);
  triangle(144, 299, 150, 176, 204, 329);
  triangle(334, 299, 330, 176, 280, 329);

  stroke(#0F0C07);
  fill(#0F0C07);
  rect(103, 350, 270, 150); // remera

  stroke(#CEAD85);

  fill(#CEAD85);
  ellipse(140, 210, 23, 57); //  orejas
  ellipse(340, 210, 23, 57);

  fill(#ADAAA7);
  ellipse(140, 237, 8, 9); // arito

  stroke(#432E15);
  fill(#432E15);  //pelo y detalles 

  triangle(250, 120, 270, 120, 280, 140);
  triangle(245, 130, 350, 113, 270, 75);
  rect(150, 74, 180, 55);
  triangle(150, 130, 170, 130, 130, 70);
  triangle(150, 130, 170, 130, 150, 55);
  triangle(185, 130, 150, 130, 195, 60);
  triangle(250, 120, 270, 120, 280, 140);
  triangle(150, 130, 170, 130, 130, 70);
  triangle(185, 130, 150, 130, 195, 60);
  triangle(330, 130, 310, 130, 330, 67);


  stroke(#6C5346);
  fill(#DED7D7);
  ellipse(193, 192, 40, 19); // primera parte de los ojos
  ellipse(278, 192, 40, 19);

  stroke(#463429);

  fill(#463429);
  rect(167, 167, 52, 12); // agregamos cejas
  rect(253, 167, 53, 12);

  stroke(#030101);

  line(245, 244, 240, 210); //nariz
  line(230, 253, 245, 244);

  stroke(#CEAD85);

  fill(#CBA87B);
  ellipse(239, 289, 42, 18);
  stroke(#AA7F7F);
  fill(#BF8B79);
  ellipse(239, 287, 40, 7);
  rect(221, 286, 35, 7);     // boca
  stroke(#B48585);
  line(221, 287, 256, 287);

  stroke(#462525);

  fill(#462525);
  ellipse(193, 193, 27, 17); //detalles de los ojos
  ellipse(278, 193, 27, 17);

  stroke(#050505);

  fill(#050505);
  ellipse(193, 192, 15, 10);
  ellipse(278, 192, 15, 10);
  fill(#FFFFFF);
  ellipse(195, 189, 5, 5);
  ellipse(280, 189, 5, 5);


  stroke(#B78557); //detalles para  su mirada
  line(164, 194, 176, 183);
  line(294, 183, 308, 194);
  stroke(#A77F55);
  line(196, 160, 224, 163);
  line(250, 163, 275, 160);
  stroke(#BC9E70);
  line(175, 255, 190, 310);
  line(305, 255, 290, 310);
}
