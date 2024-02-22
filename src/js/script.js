let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

// Close Menu
function closeMenu() {
  document.body.style.overflow = "initial";
  menuSection.classList.remove("on");
  show = false;
}

// Close menu click link
document.querySelectorAll(".menu-section nav ul a").forEach(anchor => {
  anchor.addEventListener("click", () => {
      closeMenu();
  });
});

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

const btnShow = document.getElementById('btn-show');
const projeto5 = document.getElementById('projeto5');
const projeto6 = document.getElementById('projeto6');

btnShow.addEventListener('click', function() {
    if (projeto5.classList.contains('show') && projeto6.classList.contains('show')) {
        projeto5.classList.remove('show');
        projeto6.classList.remove('show');
        btnShow.textContent = 'Menos Projetos';
    } else {
        projeto5.classList.add('show');
        projeto6.classList.add('show');
        btnShow.textContent = 'Mais Projetos';
    }
});





