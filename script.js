// Fade-in animation (already existing)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.5,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ✅ Collapsible Projects with Smooth Slide
function toggleProject(element) {
  const pointsList = element.nextElementSibling;
  const icon = element.querySelector('.toggle-icon');

  pointsList.classList.toggle('show');
  icon.textContent = pointsList.classList.contains('show') ? '▲' : '▼';
}

// Console welcome message
window.onload = function () {
  console.log("Welcome to Animesh's Interactive Portfolio!");
};
