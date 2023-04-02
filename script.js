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