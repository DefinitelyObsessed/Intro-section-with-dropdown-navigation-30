const menuBtn = document.querySelector(".icon-menu");
const option = document.querySelectorAll(".option");
const semiNavTwo = document.querySelector(".semi-nav-two");


menuBtn.addEventListener("click", () => {

      menuBtn.classList.toggle("icon-menu-close");
      semiNavTwo.classList.toggle("semi-nav-two-open");
});


option.forEach((e) => {

      e.addEventListener("click", () => {

            e.classList.toggle("option-open");
      });
});
