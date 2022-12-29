//ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor +=3;
   }
  }
}

function podeSeMover(){
  return yAtor < 366;
}

function verificaColisao(){
  for(let i=0;i<imagemCarros.length;i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro, alturaCarro,xAtor,yAtor,15);
     
    if(colisao){
      somDaColisao.play();
      voltaAtorParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos-=1;
      }
    }
  }
}
function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255,250,0));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos,width/5,25);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos+=1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos>0
}