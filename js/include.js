document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "components/header.html");
  includeHTML("footer", "components/footer.html");
});

function includeHTML(elementId, file) {
  return fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      return Promise.resolve();
    })
    .catch((error) => console.error("Include error:", error));
}
