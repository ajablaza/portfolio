import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { About } from "../components/about.js";  
import { Skills } from "../components/skills.js";
import { Projects } from "../components/projects.js";
import { Contact } from "../components/contact.js";
import { Footer } from "../components/footer.js";

const app = document.getElementById("app");
const roles = [
  "Cybersecurity Professional",
  "SaaS Support Specialist",
  "Ethical Hacker"
];

app.innerHTML = `
  ${Navbar()}
`;

document.addEventListener("click", (e) => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  if (e.target === toggle) {
    nav.classList.toggle("active");
  }

  if (!nav.contains(e.target) && e.target !== toggle) {
    nav.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav-links");
  nav.classList.remove("active");
});

app.innerHTML += Hero();
app.innerHTML += About();
app.innerHTML += Skills();
app.innerHTML += Projects();
app.innerHTML += Contact();
app.innerHTML += Footer();
lucide.createIcons();

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

const longestRoleLength = Math.max(...roles.map(r => r.length));
const textEl = document.getElementById("typing-text");
textEl.style.minWidth = longestRoleLength + "ch";

function typeEffect() {
  currentRole = roles[i];

  if (!isDeleting) {
    textEl.textContent = currentRole.slice(0, ++j);
    if (j === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    textEl.textContent = currentRole.slice(0, --j);
    if (j === 0) {    
      isDeleting = false;
      textEl.innerHTML = "&nbsp;";
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach((el) => observer.observe(el));
}

typeEffect();
revealOnScroll();