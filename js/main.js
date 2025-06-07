document.querySelectorAll('.navbar-nav .nav-link[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { window.location.hash = targetId; }, 700);
    }
  });
});


const checkbox = document.getElementById("chk");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("modo-light");
  document.querySelectorAll(".photo-em-breve").forEach(img => {
    img.src = document.body.classList.contains("modo-light") ? "img/em breve.png" : "img/em breve dark.png";
  });
});


const logo = document.getElementById("img-logo");
const logos = { light: "img/logo-light.png", dark: "img/logo.png" };
function mudarLogo() {
  logo.src = logo.src.includes(logos.light) ? logos.dark : logos.light;
}


const btnCursos = {
  frameworks: "frameworks",
  lenguages: "javascript",
  dados: "dados",
  extras: "extras"
};

const cursosData = {
  frameworks: [
    ["img/reactcurso.png", "React JS", "Jun 2024 a Jan 2025"],
    ["img/nodecurso.png", "Node JS", "Jan 2023 a Dez 2023", false],
    ["img/icons8-nextjs-250.png", "Next JS", "- Dez 2024 a (current) -", false]
  ],
  lenguages: [
    ["img/javascript light.png", "Javascript", "- Out 2023 a Jul 2024 -"],
    ["img/ts.png", "Typescript", "- Jun 2024 a Mar 2025 -", false],
    ["img/csharp.png", "C#", "- INTERESSE -", true]
  ],
  dados: [
    ["img/postgresqlcurso.png", "PostgreSQL", "- Mai 2025 a (current) -", false],
    ["img/prismacurso.png", "Prisma DB", "- Mai 2025 a (current) -", false],
    ["img/pngwing.com.png", "MongoDB", "- INTERESSE -", true]
  ],
  extras: [
    ["img/gitcurso.png", "Git", "Set 2022 a Out 2022"],
    ["img/githubcurso.png", "Github", "Set 2022 a Out 2022", false],
    ["img/figmacurso.png", "Figma", "Dez 2023 a Fev 2024", false]
  ]
};

Object.keys(btnCursos).forEach(key => {
  document.getElementById(btnCursos[key]).addEventListener("click", () => {
    document.querySelectorAll(".curso-selecionado img").forEach((img, i) => {
      if (cursosData[key][i]) {
        [img.src, img.nextElementSibling.innerText, img.nextElementSibling.nextElementSibling.innerText] = cursosData[key][i];
        img.style.filter = cursosData[key][i][3] ? "grayscale(1)" : "grayscale(0)";
      }
    });
  });
});


const removerSombra = () => Object.values(btnCursos).forEach(id => document.getElementById(id).classList.remove("sombra"));
Object.values(btnCursos).forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    removerSombra();
    document.getElementById(id).classList.add("sombra");
  });
});
window.addEventListener("load", () => document.getElementById("frameworks").classList.add("sombra"));


["info-projeto1", "info-projeto2", "info-projeto3", "info-projeto4", "info-projeto5"].forEach((id, i) => {
  const elementoDestino = document.getElementById(id);
  const elementoGatilho = document.getElementById(`polaroid${i + 1}`);
  elementoGatilho.addEventListener("mouseenter", () => elementoDestino.style.display = "flex");
  elementoGatilho.addEventListener("mouseleave", () => elementoDestino.style.display = "none");
});
// animation

var listaTargetResumo = [
  document.querySelector(".nome-destaque"),
  document.querySelector("#resumo p"),
  document.querySelectorAll("#resumo .text-about"),
  document.querySelector("#resumo .text-about"),
  document.querySelector("#resumo .div-botoes-resumo"),
  document.querySelector(".header"),
  document.querySelectorAll(".curso-selecionado"),
  document.querySelectorAll(".polaroid"),
  document.querySelector(".form"),
  document.querySelector(".aorela-nome"),
];

var animaScroolConfigs = [
  { distance: "100px", origin: "left", duration: 900 },
  { distance: "100px", origin: "left", duration: 800 },
  { distance: "100px", origin: "left", duration: 700 },
  { distance: "100px", origin: "left", duration: 600 },
  { distance: "100px", origin: "top", duration: 900 },
  { distance: "150px", origin: "left", duration: 1000 },
  { distance: "1000px", origin: "left", duration: 900 },
  { distance: "100px", origin: "top", duration: 900 }, // Usado para indices 6 e 7
];

var targetConfigMap = {
  0: 1,
  1: 0,
  2: 2,
  3: 3,
  6: 4,
  7: 4,
  8: 5,
};

for (let index in targetConfigMap) {
  let target = listaTargetResumo[index];
  let config = animaScroolConfigs[targetConfigMap[index]];
  ScrollReveal().reveal(target, config);
}
