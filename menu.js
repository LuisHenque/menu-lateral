var menuItens = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItens.forEach((itens)=>
        itens.classList.remove('active')
    )
    this.classList.add('active')
}

menuItens.forEach((itens)=>
    itens.addEventListener('click', selectLink)
)


//Expação do menu

var btnExp = document.querySelector('#btn-exp')
var menuSite = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSite.classList.toggle('expand')
})