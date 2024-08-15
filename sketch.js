let palavra;
let musica;
let imagem;

function setup() {
  createCanvas(600, 500);
  palavra = batata();
  musica.loop();
}

function preload(){
  imagem = loadImage("foto.jpg");
  musica = loadSound("música.mp3");
}


function draw() {
  chocolate();
  batata();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 300, 250);

}

function chocolate(){
  background("rgb(78,95,228)");
  image(imagem,0,0,600,500)
  fill("rgb(248,152,169)");
  textSize(65);
  textAlign(CENTER,CENTER);
}
function batata(){
  let palavras = ["lorena","batata", "chocolate", "azul", "rosa","isabelly"];
  return random(palavras);
}