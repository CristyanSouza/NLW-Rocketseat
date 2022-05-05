window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToHomeButton()
}



function showNavOnScroll(){
  if(scrollY){
    navigation.classList.add('scroll')
  } 
  else{
  navigation.classList.remove('scroll')
  }
}


function showBackToHomeButton(){
  if(scrollY > 500){
    backToTopButton.classList.add('show')
  } 
  else{
    backToTopButton.classList.remove('show')
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function showHomeButton(){
  if(scrollY) {
    backToTopButton.classList.add('show')
  }
  else{
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '100px',
  duration: 700,
}).reveal('#home');

ScrollReveal({
  origin: 'top',
  distance: '300px',
  duration: 2000,
}).reveal('#home .stats, #services header, .card, #about, #about header');


