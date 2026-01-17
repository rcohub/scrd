// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("isOpen");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
});

// Close mobile menu when clicking a link
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("isOpen");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  });
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

// Optional: set a "Next Event" line from your first event card
const firstEventTitle = document.querySelector("#events .card h3")?.textContent?.trim();
if (firstEventTitle) {
  document.getElementById("nextEvent").textContent = firstEventTitle;
}
