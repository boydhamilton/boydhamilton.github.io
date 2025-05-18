

const toggleBtn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');


toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  icon.classList.replace('fa-moon', 'fa-sun'); 
  isDarkMode = document.body.classList.contains('dark') ? true : false
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  if (isDarkMode) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }

});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  }
});
