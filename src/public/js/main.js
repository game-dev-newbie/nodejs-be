const listNav = document.querySelectorAll("a");

listNav.forEach((nav) => {
  nav.addEventListener("click", function () {
    listNav.forEach((item) => {
      if (item !== nav) {
        item.classList.remove("active");
        nav.classList.add("active");
      }
    });
  });
});
