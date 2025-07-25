function initCardAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(".animate-element");
  cards.forEach((card) => {
    observer.observe(card);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCardAnimations);
} else {
  initCardAnimations();
}
