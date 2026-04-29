const toggle = document.getElementById("menu-toggle");

toggle.addEventListener("change", () => {
  toggle.checked = true;
  document.body.classList.remove("no-scroll");
});

const words = [
  "CREATOR",
  "INNOVATOR",
  "ENGINEER",
  "CODER",
  "DEVELOPER",
  "ENTHUSIAST",
];

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!._?&-,<{%.|~`:_>,.[@-~(_—;=+*}^/=?)#]";
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 80);
      const end = start + Math.floor(Math.random() * 80);

      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
  }

  update() {
    let output = "";
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        // output += `<span class="dud">${char}</span>`;
        const colors = ["#4B5655", "#4E4444", "#5B5B4F", "#635353", "#465049"];
        output += `<span style="color:${colors[Math.floor(Math.random()*colors.length)]}" class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete !== this.queue.length) {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const el = document.getElementById("scramble-text");
const fx = new TextScramble(el);

let wordIndex = 0;

function nextWord() {
  fx.setText(words[wordIndex]);
  wordIndex = (wordIndex + 1) % words.length;
  setTimeout(nextWord, 4000);
}
nextWord();

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
    toggle.checked = false;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  });
});