const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
  threshold: 0.5
}

function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options)

items.forEach(item => {
  observer.observe(item);
})

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';

  modeStatus.innerText = 'Switch to ' + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);