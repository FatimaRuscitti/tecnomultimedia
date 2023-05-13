
// preparo un espacio en memoria para mi fuente:
PFont miFuente;
//declaracion con asignacion:
String estado = "inicio";
//
int cuentaFotograma = 0;
PImage img;
PImage img1;
PImage img3;

void setup() {
  size(640, 480);
  frameRate(30); // 30fps
  img = loadImage("artedigital.png");
  img1 = loadImage("nfts byn.png");
  img3 = loadImage("muchos nft.png");
  miFuente = loadFont ("Arial-Black-38.vlw");
}

void draw() {
  background(0, 0, 0);

  if ( estado.equals("inicio") ) {

    //pantalla de inicio:

    image (img1, 0, 0);
    fill(#FCF5F5);
    ellipse(width/2, 290, 120, 120);
    fill(250, 0, 0);
    ellipse(width/2, 290, 100, 100);
    fill(#FCF5F5);
    textAlign(CENTER);
    textFont( miFuente);
    textSize(25);
    text("Play", 320, 300 );
  } else if ( estado.equals("pantalla 1")  ) {

    //pantalla 1:
    image(img, -40, 100);
    fill(#FCF5F5);
    textAlign(CENTER);
    textSize ( 47 );
    text("CryptoPunk", 460, cuentaFotograma );
    textSize (25);
    text("#7804", 470, cuentaFotograma+25);
    textSize(15);
    text("Fue de las primeras obras de arte NFT ", 460, cuentaFotograma+55  );
    textSize(15);
    text("lanzada en junio de 2017", 450, cuentaFotograma+75  );
    textSize(15);
    text("Autor: Matt Hall y John Watkinson", 470, cuentaFotograma+105 );
    textSize(15);
    text("Desarrollador: Larva Labs", 470, cuentaFotograma+125 );


    //incremento del contador:
    cuentaFotograma++;

    if ( cuentaFotograma>= 240 ) {

      estado = "pantalla 2";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 2") ) {

    //pantalla 2:

    image(img, -40, 100);
    fill(#FCF5F5, map(cuentaFotograma, 0, 250, 0, 455));
    textSize(28);
    text("CryptoPunk #7804", 450, 140 );
    textSize(13);
    text("Es una de la serie de obras NFT", 450, 170 );
    textSize(13);
    text("inspiradas en el movimiento ciberpunk,", 450, 190 );
    textSize(13);
    text("todos hechos con el mismo codigo.", 450, 210 );
    textSize(11);
    text("Autor: Matt Hall y John Watkinson", 370, height/2+140 );
    textSize(11);
    text("Desarrollador: Larva Labs", 345, height/2+160);

    //incremento del contador:
    cuentaFotograma++;

    if ( cuentaFotograma>= 290 ) {

      estado = "pantalla 3";

      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 3") ) {

    //pantalla 3:
    image( img3, 15, 35);
    fill(0);
    rect(90, 170, 460, 200);
    fill(#FCF5F5);
    textSize(30);
    text("CryptoPunk", width/2, height/2 );
    textSize(10);
    text("(son +10mil)", 375, 255 );
    textSize(15);
    fill(#FCF5F5, map(cuentaFotograma, 0, 150, 0, 255));
    text("Cada uno fue generado en forma algorítmica", 320, 280);
    textSize(15);
    text("con características y combinaciones diferentes.", 320, 300);
    textSize(15);
    text("Aunque hay muchos muy parecidos,", 320, 320 );
    textSize(15);
    text("su gracia es que no hay 2 iguales.", 320, 340 );

    //incremento del contador:
    cuentaFotograma++;
    if ( cuentaFotograma>= 400 ) {
      estado = "pantalla 4";
    }
  } else if (estado.equals("pantalla 4") ) {

    //pantalla 4

    image (img1, 0, 0);
    fill(#FFFFFF);
    ellipse(width/2, 290, 120, 120);
    fill(#1B00D6);
    ellipse(width/2, 290, 100, 100);
    fill(#FCF5F5);
    textAlign(CENTER);
    textSize(24);
    text("Replay", 320, 300 );

    //incremento del contador:
    cuentaFotograma++;
  }
}


void mousePressed() {
  if ( estado.equals("inicio") ) {
    if ( dist(mouseX, mouseY, width/2, 300) < 50 ) {
      estado = "pantalla 1";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 4") ) {
    if ( dist(mouseX, mouseY, width/2, 300) < 50 ) {
      estado = "inicio";
      cuentaFotograma = 0;
    }
  } else {
    if (estado.equals("pantalla 1")) {
      estado = "pantalla 2";
      cuentaFotograma = 0;
    } else if ( estado.equals("pantalla 2") ) {
      estado = "pantalla 3";
      cuentaFotograma = 0;
    } else if ( estado.equals("pantalla 3") ) {
      estado = "pantalla 4";
      cuentaFotograma = 0;
    } else if ( estado.equals("pantalla 4") ) {
      estado = "inicio";
      cuentaFotograma = 0;
    }
  }
}
