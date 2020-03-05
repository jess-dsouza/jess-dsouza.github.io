const landing_page = document.querySelector(".landing_page");
const main_page = document.querySelector(".main_page");
const body = document.querySelector("body");

const nightmode_toggle = document.querySelector("#switch");

window.onload = () => {
	nightmode_toggle.checked = true;
};

nightmode_toggle.addEventListener("change", (event) => {
	if (nightmode_toggle.checked === true) {
		body.setAttribute("dark", "");
		body.removeAttribute("light");
	} else {
		body.setAttribute("light", "");
		body.removeAttribute("dark");
	}
});

// window.setTimeout(() => {
// 	landing_page.style.display = "none";
// 	main_page.style.display = "initial";
// }, 4000);
