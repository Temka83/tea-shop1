document.addEventListener("DOMContentLoaded", () => {
  const popupLinks = document.querySelectorAll("[data-popup]");
  const popups = document.querySelectorAll(".popup");

  popupLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("data-popup");
      const targetPopup = document.getElementById(targetId);
      popups.forEach(p => p.classList.remove("active"));
      if (targetPopup) targetPopup.classList.add("active");
    });
  });

  popups.forEach(popup => {
    popup.addEventListener("click", e => {
      if (e.target.classList.contains("popup") || e.target.classList.contains("close")) {
        popup.classList.remove("active");
      }
    });
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") popups.forEach(p => p.classList.remove("active"));
  });

  const categoryLinks = document.querySelectorAll(".main-catalogue_categories a");
  const productCards = document.querySelectorAll(".main-catalogue_product-card");

  categoryLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      categoryLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const category = link.getAttribute("data-category");

      productCards.forEach(card => {
        if (card.getAttribute("data-category") === category) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  const firstCategory = categoryLinks[0].getAttribute("data-category");
  categoryLinks[0].classList.add("active");
  productCards.forEach(card => {
    card.classList.toggle("hide", card.getAttribute("data-category") !== firstCategory);
  });
});
