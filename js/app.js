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
});
