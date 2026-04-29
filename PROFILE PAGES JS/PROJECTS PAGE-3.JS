const projects = document.querySelectorAll(".project");

let current = 0;

function showProject(index) {
  projects.forEach(p => p.classList.remove("active"));
  projects[index].classList.add("active");

  // current project ke buttons select karo
  const prevBtn = projects[index].querySelector(".previous");
  const nextBtn = projects[index].querySelector(".next");

  // pehle dono buttons enable karo
  prevBtn.classList.remove("disabled-btn");
  nextBtn.classList.remove("disabled-btn");

  // agar first project hai
  if (index === 0) {
    prevBtn.classList.add("disabled-btn");
  }

  // agar last project hai
  if (index === projects.length - 1) {
    nextBtn.classList.add("disabled-btn");
  }
}

// initial load
showProject(current);

// click handling (event delegation)
document.addEventListener("click", (e) => {

  // NEXT button
  if (e.target.closest(".next")) {
    e.preventDefault();

    if (current < projects.length - 1) {
      current++;
      showProject(current);
    }
  }

  // PREVIOUS button
  if (e.target.closest(".previous")) {
    e.preventDefault();

    if (current > 0) {
      current--;
      showProject(current);
    }
  }

});