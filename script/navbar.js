alert("HELLO");
console.log("Test!navbar is loaded!");

function normalizePath(path) {
  if (path === "/") return "/index.html";
  return path;
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const currentPath = normalizePath(window.location.pathname);
    const targetPath = normalizePath(new URL(link.href).pathname);

    if (currentPath === targetPath) {
      e.preventDefault();
      window.location.reload();
    }
  });
});
