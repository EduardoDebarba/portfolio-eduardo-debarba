'use strict';

// FUNÇÃO DO ELEMENTO TOOGLE
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// VARIAVEIS DA SIDEBAR
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// fUNCIONALIDADE DO TOOGLE DA SIDEBAR PARAR DISPOSITIVOS MOVEIS
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// CUSTOMIZA AS VARIAVEIS SELECIONADAS
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// FILTRA AS VARIAVEIS
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "todos") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }

}
// ADICIONA EVENTO EM TODOS OS BOTÕES COM FILTROS DE MAIORES TELAS
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });

}

// VARIAVEIS DO FORMULÁRIO DE CONTATO
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
// SELECIONA TODOS OS LINKS DA NAVEGAÇÃO E AS SEÇÕES
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// ADICIONA EVENTO DE CLIQUE EM CADA BOTÃO DE NAVEGAÇÃO
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-page");

    // ALTERA AS SEÇÕES
    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    // ATUALIZA AS CLASSES ATIVAS NOS BOTÕES
    navigationLinks.forEach((navLink) => {
      if (navLink === this) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});

// ABRIR MODAL
document.querySelectorAll("[data-modal-target]").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const modal = document.querySelector(this.getAttribute("data-modal-target"));
    modal.classList.add("active");
  });
});

// FECHAR MODAL
document.querySelectorAll(".modal .close").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modal = this.closest(".modal");
    modal.classList.remove("active");
  });
});

// FECHA MODAL AO CLICAR FORA DELE
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("active");
  }
});