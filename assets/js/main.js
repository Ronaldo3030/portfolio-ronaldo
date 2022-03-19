let modalEnvio = document.getElementById('modal-envio')

document.getElementById('btn-menu-hamburguer').addEventListener('click', () => {
  document.getElementById('menu-hamburguer').classList.remove('esconde-menu')
  document.getElementById('menu-hamburguer').classList.add('mostra-menu')
})
document.getElementById('btn-menu-hamburguer2').addEventListener('click', () => {
  document.querySelector('.menu-hamburguer-fixo').classList.remove('esconde-menu')
  document.querySelector('.menu-hamburguer-fixo').classList.add('mostra-menu')
})

document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('menu-hamburguer').classList.remove('mostra-menu')
  document.getElementById('menu-hamburguer').classList.add('esconde-menu')
})
document.querySelector('.close-fixo').addEventListener('click', () => {
  document.querySelector('.menu-hamburguer-fixo').classList.remove('mostra-menu')
  document.querySelector('.menu-hamburguer-fixo').classList.add('esconde-menu')
})

// ABRIR MODAL

// FECHAR MODAL
document.getElementById('close').addEventListener('click', () => {
  modalEnvio.classList.add('d-none')
})
modalEnvio.addEventListener('click', (e) => {
  if(e.target.id == 'modal-envio'){
    modalEnvio.classList.add('d-none')
  }
})

function close(id) {
  id.classList.add('esconde-menu')
  id.classList.remove('mostra-menu')
}


function upPage() {
  window.location.href = "#home"
}

let inputNome = document.getElementById('input-nome')
let inputEmail = document.getElementById('input-email')
let inputMensagem = document.getElementById('input-mensagem')

function enviaEmail() {
  Email.send({
    // https://mailtrap.io/
    Host: "smtp.mailtrap.io",
    Username: "d0dd99580182ac",
    Password: "a0094e0f51cd1c",
    To: inputEmail.value,
    From: "sbplayyy@gmail.com",
    Subject: "Contato para Ronaldo Maciel",
    Body: inputMensagem.value + '<br><br> De: ' + inputNome.value,
  }).then(() => {
    if(inputNome.value !== '' && inputMensagem.value !== '' && inputEmail.value !== ''){
      modalEnvio.classList.remove('d-none')
      document.getElementById('msg-erro').classList.add('d-none')
      inputNome.value = ''
      inputEmail.value = ''
      inputMensagem.value = ''
    }else{
      document.getElementById('msg-erro').classList.remove('d-none')
    }
  })
}

// AOS
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});