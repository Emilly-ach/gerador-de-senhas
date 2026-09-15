const numerosenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numerosenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const simbolos = '!@%*#?#'
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //taamnhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
}
  
function aumentaTamanho() {
    
        if(tamanhoSenha < 20) {
        //tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
        }
    numerosenha.textContent = tamanhoSenha;
    geraSenha();
}

     for(i = 0; i < checkbox.length; i++){

        checkbox[i].onclick = geraSenha;

     }

      geraSenha();
      function geraSenha(){
        let alfabeto = '';
        if(checkbox[0].cheked){
            alfabeto = alfabeto + letrasMaiusculas;
        }
        if(checkbox[1].cheked){
            alfabeto = alfabeto + letrasMinusculas;
        }
      }

  if (checkbox[2].cheked){
    alfabeto = alfabeto + numeros;
  }

  if(checkbox[3].cheked){
         alfabeto = alfabeto + simbolos;
  }
 
         let senha = '';
         for (let i=0;i,tamanhoSenha;i++){
            let numeroAleatorio = Math.random()*alfabeto.length;
            numeroAleatorio = Math.floor(numeroAleatorio);
            senha = senha + alfabeto[numeroaleatorio];
         }
           
         campoSenha.value = senha;
         classificaSenha(alfabeto.length);
         
