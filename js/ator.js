//código do ator
let xLarguraTelaAtor = 85;
let yAlturaTelaAtor = 366;

let meusPontos = 0 ;

let colisao= false

function mostraAtor(){
  image(imagemDoAtor, xLarguraTelaAtor, yAlturaTelaAtor, 30, 30);
   
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAlturaTelaAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    
    if(podeSeMover()){
        yAlturaTelaAtor += 3;
       }
  }  
}

function podeSeMover()
{
  return yAlturaTelaAtor < 366
  
}


function verificaColisao(){
  
 for (let i = 0; i < imagemCarros.length; i ++){colisao = collideRectCircle( xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xLarguraTelaAtor, yAlturaTelaAtor,15)
   if(colisao){
   voltaAtorPosicaoInicial();
     somColisao.play();
     if(pontosMaiorQueZero()){        
         meusPontos -=1;
        }
     
   }
 }
  
}

function voltaAtorPosicaoInicial(){  
  yAlturaTelaAtor = 366
}


function incluiPontos ()
{
  textSize (20);
  textAlign(CENTER);
  fill(color(255,0,0))
  
text(meusPontos,width / 5,25 )//mostra texto na tela
  
}

function marcaPonto()
{
  if(yAlturaTelaAtor < 15){
    meusPontos +=1;
       somPonto.play()
 
  voltaAtorPosicaoInicial()}
}

function pontosMaiorQueZero(){
  
  return meusPontos > 0 
}








