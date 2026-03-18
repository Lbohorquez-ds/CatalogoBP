document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");
  const visor = document.getElementById("visor");
  const pdfFrame = document.getElementById("pdfFrame");

  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("activo");
  });

  window.abrirPDF = function (ruta) {
    pdfFrame.src = ruta;
    visor.style.display = "flex";
    menu.classList.remove("activo");
  };

  window.cerrarPDF = function () {
    visor.style.display = "none";
    pdfFrame.src = "";
  };

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove("activo");
    }
  });
});