const coisas = document.getElementById("cartao-destaque")

coisas.addEventListener("mouseover", function(){
    coisas.classList.add('destacado')
coisas.addEventListener("mouseout", function(){
    coisas.classList.remove('destacado')
})


})