// Codigo da estrada

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somTrilha;
let somColisao;
let somPonto

function preload() {
  imagemDaEstrada = loadImage("imagens/imagemCarro/estrada.png")
  imagemDoAtor = loadImage("imagens/imagemCarro/ator-1.png")
  imagemCarro = loadImage("imagens/imagemCarro/carro-1.png"),
    imagemCarro2 = loadImage("imagens/imagemCarro/carro-2.png"),
    imagemCarro3 = loadImage("imagens/imagemCarro/carro-3.png")

  imagemCarros = [
    imagemCarro, imagemCarro2, imagemCarro3,
    imagemCarro, imagemCarro2, imagemCarro3,
    imagemCarro, imagemCarro2, imagemCarro3,
    imagemCarro, imagemCarro2, imagemCarro3,
  ];
  somTrilha = loadSound("sons/trilha.mp3")
  somColisao = loadSound("sons/colidiu.mp3")
  somPonto = loadSound("sons/pontos.wav")


}