const toggleEl = document.querySelector(".theme-toggle");
const htmlEl = document.querySelector("html");

toggleEl.addEventListener("click", () => {
    console.log("click");
    if (htmlEl.getAttribute("data-theme")) {
        htmlEl.removeAttribute("data-theme");
    } else {
        htmlEl.setAttribute("data-theme", "dark");
    }
});
