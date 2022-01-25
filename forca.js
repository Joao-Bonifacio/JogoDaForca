//--partes do boneco-------
var head = document.querySelector('.cabeca')
var body = document.querySelector('.corpo')
var arml = document.querySelector('.braco1')
var armr = document.querySelector('.braco2')
var legl = document.querySelector('.perna1')
var legr = document.querySelector('.perna2')
var doll = [head,body,arml,armr,legl,legr]
//-----------------------
var tentativas = document.querySelectorAll('.tentativas') //6 tentativas
var hidden = document.querySelectorAll('.hid') //armazena todas as partes do boneco
var palavras = ['cachorro','gorila','hipopotamo','computador','televisao','celular']
for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = 'none'
}//escondendo as partes do boneco

//--preparando o cenario----
var random = Math.floor(Math.random() * palavras.length) //gerando valor aleatorio
var content = document.querySelector('.palavra')
var palavra_random = palavras[random] //armazena a palavra aleatoria gerada
var span = [] 
for (let i = 0; i < palavra_random.length; i++) {
    span.push(document.createElement('span'))
    span[i].classList.add('place')
    span[i].style.left = 5+i*50+'px'
    content.appendChild(span[i])
}
//------------------------

//manipulando as strings
var h1 = []
var index;
var cont = 0
var verify_lenght = 0
var val;
var verify = document.querySelector('button')
const game = ()=>{
    if (cont < 6 && palavra_random.length != verify_lenght) {
        val = document.querySelector('input').value    
        if (palavra_random.includes(val)) {
            index = palavra_random.search(val)
            console.log(palavra_random.search(val))
            if (h1[index] == null) {
                for (let i = 0; i < palavra_random.length; i++) {
                    if (palavra_random[i] == val) {
                        h1[i] = document.createElement('h1')
                        h1[i].style.marginTop = '-10px'
                        h1[i].style.marginLeft = '10px'
                        h1[i].innerHTML = val
                        console.log(h1[i])
                        span[i].appendChild(h1[i])
                        verify_lenght++
                        console.log(verify_lenght)
                    }
                }
            }
        }else{
            doll[cont].style.display = 'block'
            tentativas[cont].style.backgroundColor = '#c44343'
            cont++
        }
    }else if(verify_lenght >= palavra_random.length){
        alert('Você ganhou')
        location.reload()
    }else{
        alert('Você perdeu')
        location.reload()
    }
}
verify.addEventListener('click',game)