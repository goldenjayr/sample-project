// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').slice(1);
    document.querySelector(`section#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
  });
});