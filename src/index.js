import "./main.scss";
const navContent = document.querySelector(".navigation__content");

document.querySelector(".toggler").addEventListener("click", function () {
      if (this.getAttribute("aria-expanded") === "false") {
            this.setAttribute("aria-expanded", "true");
            navContent.classList.add("nav-opening");
      } else {
            this.setAttribute("aria-expanded", "false");
            navContent.classList.add("nav-closing");
            setTimeout(() => {
                  navContent.classList.remove("nav-opening");
                  navContent.classList.remove("nav-closing");
            }, 260);
      }
});
