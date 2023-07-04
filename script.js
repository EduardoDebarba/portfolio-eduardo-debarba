let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

let cont = document.querySelector('.more-projects')

let btnClick = function(){
  if(cont.style.display === 'flex'){
    cont.style.display = 'none'
  }else{
    cont.style.display = 'flex'
  }
}

window.sr = ScrollReveal({reset: true})

sr.reveal('.scroll', {duration: 2000})

window.addEventListener('scroll', function() {
  var arrow = document.getElementById('arrow');
  if (window.pageYOffset > 100) {
    arrow.classList.add('show');
  } else {
    arrow.classList.remove('show');
  }
});

document.getElementById('arrow').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
