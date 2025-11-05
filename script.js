// Change navbar color when scrolling
window.addEventListener("scroll", function() {
  let header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Add scroll effect style
document.querySelector("header").classList.add("transition");

// Add class in CSS via JS
let style = document.createElement('style');
style.innerHTML = `
  header.scrolled {
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  header.scrolled .nav-links a {
    color: #333;
  }
  header.scrolled .nav-links a:hover {
    color: #d16ba5;
  }
`;
document.head.appendChild(style);
