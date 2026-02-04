// pastas
document.querySelectorAll(".folder").forEach((folder) => {
  folder.addEventListener("click", () => {
    const id = folder.dataset.target;
    const content = document.getElementById(id);

    const open = !content.classList.contains("hidden");
    content.classList.toggle("hidden");

    folder.textContent = open ? `📁 ${id}/` : `📂 ${id}/`;
  });
});

// arquivos executáveis
document.querySelectorAll(".file").forEach((file) => {
  file.addEventListener("click", () => {
    window.open(file.dataset.link, "_blank");
  });
});

// atalhos
const searchBox = document.getElementById("search-box");
const input = searchBox.querySelector("input");

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "h") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (e.key.toLowerCase() === "k") {
    e.preventDefault();
    searchBox.classList.toggle("hidden");
    input.focus();
  }
});
