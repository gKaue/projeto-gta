/*
OBJETIVO 1 - quando o usuario clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuario clicar, adicionar a classe "ativo" na listagem de plataformas dentro do botão pra que o conteúdo apareça
OBJETIVO 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    Passo 1 - verificar se o botão já está aberto, se ele tiverm esconder o conteúdo novamente

//////////////////////////////////////////////////////////////////////////*/
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas"); 

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});