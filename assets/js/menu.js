let menu = document.getElementById('menu')
let menuFixo = document.getElementById('menu-fixo')

window.addEventListener('scroll', () => {
    // ADD E REMOVE BOTÃO PRA IR PRO TOP DA PAGE
    // ADD E REMOVE MENU FIXO
    if(window.scrollY > window.screen.height+60){
        document.getElementById('btn-up').classList.remove('d-none')
        menuFixo.classList.remove('d-none')
        menuFixo.classList.add('mostra-menuFixo')
    }else{
        document.getElementById('btn-up').classList.add('d-none')
        menuFixo.classList.add('d-none')
        menuFixo.classList.remove('mostra-menuFixo')
    }
})
// AINDA TENHO QUE FAZER AO SCROLLAR TROCAR O SELECIONADO "select-menu"