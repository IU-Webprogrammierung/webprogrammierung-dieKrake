document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});

function includeHTML(elementId, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Include error:", error));
}
