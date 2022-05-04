function onScroll() {
  if(scrollY){
    navigation.classList.add('scroll')
  } 
  else{
  navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
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


