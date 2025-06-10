document.addEventListener("DOMContentLoaded", function () {
  Promise.all([
    includeHTML("header", "components/header.html"),
    includeHTML("footer", "components/footer.html"),
  ]).then(() => {
    console.log("DOMContentLoaded fired");

    const burgerMenu = document.getElementById("burgerMenu");
    const mobileNav = document.getElementById("mobileNav");

    // Toggle mobile menu when burger menu is clicked
    burgerMenu.addEventListener("click", function () {
      console.log("Burger menu clicked");
      burgerMenu.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-list a");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        console.log("Mobile nav link clicked");
        burgerMenu.classList.remove("active");
        mobileNav.classList.remove("active");
      });
    });

    // // Close mobile menu when clicking outside
    // document.addEventListener("click", function (e) {
    //   console.log("Document clicked");
    //   if (!burgerMenu.contains(e.target) && !mobileNav.contains(e.target)) {
    //     burgerMenu.classList.remove("active");
    //     mobileNav.classList.remove("active");
    //   }
    // });
  });
});
