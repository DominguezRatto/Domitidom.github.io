//las variables se declaran antes del setup
//setup() se ejecuta una sola vez, es la config inicial
//las funciones tambien se declaran
function muchasElipses(cuantas) {
  for (var i = 0; i < cuantas; i++) {
    noStroke()
    fill(random(255), random(255), random(255))
    ellipse(random(width), random(height), 100, 100);
  }


}

var diametro;
diametro = 100
  //DECLARACIONES GLOBALES:Funcionan en todo el codigo
  //Declaraciones Locales:Funcionan en la funcion que se declara
function setup() {
  //Lienzo
  frameRate(10)
  createCanvas(windowWidth, windowHeight);
  //Color del lienzo se adhiere con background(r,g,b), background(255) 1 numero = escala de grises
  background(0, 200, 150);
  var x = 10;
  var y = 10;
  //cambio de valor
  y = 100

}


function draw() {
  //pintar fondo 
  //LLAMAR FUNCION
  background(0, 200, 150);
  if (mouseX) {
    muchasElipses(3);
  }

}

//DECLARAR funcion nueva
//muchas elipses locas y weas

function elipse() {
  //dibujar elipse
  //ellipse(posX,PosY,Width,Height)
  //StrokeWeight() ancho del stroke
  //stroke(color)
  //fill()
  strokeWeight(5)
  stroke(0, 0, 255, 255 / 2)
  ellipse(mouseX, mouseY, diametro, diametro)

  //ellipse(mouseX, mouseY, width/8, height/8) se adapta al canvas
  //los strokes y fills se ponen despues de la figura en las funciones
  diametro = 100;
}