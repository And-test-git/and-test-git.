const elementoAno = document.getElementById("ano");
if (elementoAno) elementoAno.textContent = new Date().getFullYear();

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.textContent = aberto ? "×" : "☰";
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    botaoMenu.textContent = "☰";
  }));
}
