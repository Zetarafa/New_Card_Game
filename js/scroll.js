

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.cards-containerscroll');
  
    window.scrollLeftFunction = function() {
      const carousel = document.querySelector('.cards-containerscroll');
      if (!carousel) {
          return;
      }
      carousel.scrollBy({
          left: 185,
          behavior: 'smooth'
      });
  };
  
    window.scrollRight = function() {
        carousel.scrollBy({
            left: -185,
            behavior: 'smooth'
        });
    };
  });
  