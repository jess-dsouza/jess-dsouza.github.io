const landing_page = document.querySelector(".landing_page");
const main_page = document.querySelector(".main_page");
const body = document.querySelector("body");

const nightmode_toggle = document.querySelector("#switch");

// landing page time out when the page loads.
window.onload = () => {
    window.setTimeout(() => {
        landing_page.style.display = "none";
        body.setAttribute("dark", "");
        body.removeAttribute("landing");
        main_page.style.display = "initial";
        nightmode_toggle.checked = true;
    }, 4000);
};

// toggle switch settings to switch from light mode to dark mode
nightmode_toggle.addEventListener("change", (event) => {
    if (nightmode_toggle.checked === true) {
        body.setAttribute("dark", "");
        body.removeAttribute("light");
        body.removeAttribute("landing");
    } else {
        body.setAttribute("light", "");
        body.removeAttribute("dark");
        body.removeAttribute("landing");
    }
});
