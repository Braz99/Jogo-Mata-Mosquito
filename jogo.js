var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var tempomosquito = 1500

var nivel = document.location.search
nivel = nivel.replace('?', '')


if (nivel === 'facil') {
	//1500
	tempomosquito = 1500
} 
else if (nivel === 'medio') {
 //1000 
 tempomosquito = 1000

}
else if (nivel === 'dificil') { //750 
	tempomosquito = 750
		 }

function dimensao() {

		altura = window.innerHeight
		largura = window.innerWidth


		console.log(largura, altura)

}

dimensao()

function posicaorandomica() {


	if (document.getElementById('mosquito') ) {
		document.getElementById('mosquito').remove()


		if (vidas > 3) {
			window.location.href = 'game_over.html'
		}

		else { document.getElementById('c' + vidas).src = "imagens/coracao_vazio.png"
			   vidas++}
	}

	var valorX = Math.floor(Math.random() * largura) - 90
	var valorY = Math.floor(Math.random() * altura) - 90


	valorX = valorX < 0 ? 0 : valorX
	valorY = valorY < 0 ? 0 : valorY



	//criação

	var mosquito = document.createElement('img')


	mosquito.src = 'imagens/mosquito.png'

	mosquito.className = tamanho() + ' ' + orientacao()

	mosquito.style.left = valorX + 'px'
	mosquito.style.top = valorY + 'px'

	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'


	//Clicar sobre o mosquito
	mosquito.onclick = function () {
		this.remove()
	}

	document.body.appendChild(mosquito)

	tamanho()

}


function tamanho() {
	var classe = Math.floor(Math.random() * 3)
	switch(classe) {
		case 0: 
			return 'mosquito1'
		case 1:
			return 'mosquito2'

		case 2:

			return 'mosquito3'
	}
}


function orientacao() {
	var classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0: 
			return 'ladoa'
		case 1:
			return 'ladob'
	}
}
