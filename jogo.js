var largura = 0
var altura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

function posicaoRandomica(){
    //Remover o moquito anterior (caso exista )
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //console.log('O lemento selecionado foi: v' + vidas)
        if (vidas > 3){
            alert('Interromper o jogo')
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }    
    }

    //criando posições randômicas
    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    console.log(posicaox, posicaoy)

    // Criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
 
    document.body.appendChild(mosquito)
    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch (classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
     var classe = Math.floor(Math.random() * 2)
    console.log(classe)

    switch (classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }    
}