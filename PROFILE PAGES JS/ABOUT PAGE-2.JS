const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

// page load pe first tab open
document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs.length > 0) {
    aboutTabs[0].click();
  }
});

// tab switching logic
aboutTabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    // remove active from all tabs
    aboutTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // hide all sections
    aboutContent.forEach((c) => c.classList.remove("active"));

    // show selected section
    const target = document.getElementById(tab.dataset.section);
    if (target) {
      target.classList.add("active");
    }
  });
});