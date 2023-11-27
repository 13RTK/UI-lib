const container = document.querySelector(".container");
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("sl-change", () => {
    if (switchElement.checked) {
        container.classList.add("sl-theme-dark");
    } else {
        container.classList.remove("sl-theme-dark");
    }
});
