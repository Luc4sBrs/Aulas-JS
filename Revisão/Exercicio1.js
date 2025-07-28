const nome = document.getElementById("input-nome");
const mensagem = document.getElementById("mensagem-erro");
const botao = document.getElementById("validar-button");

botao.addEventListener("click", function(){

    if (nome.value.trim() === ''){
    mensagem.textContent = "poderia por obséquio, escrever sua mensagem novamente"
    mensagem.style.display = "block";
    }
    else{
        mensagem.style.display = "none";

    }
});

    