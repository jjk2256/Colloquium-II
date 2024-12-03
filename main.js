document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Hover functionality for the second page
  const boxes = document.querySelectorAll('#second-page .box');
  const hoverPreview = document.querySelector('.hover-preview');
  const hoverImage = document.getElementById('hover-image');

  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      const imageUrl = box.getAttribute('data-hover-image');
      hoverImage.src = imageUrl;
      hoverPreview.style.display = 'flex';
    });

    box.addEventListener('mouseleave', () => {
      hoverPreview.style.display = 'none';
      hoverImage.src = '';
    });
  });
});
