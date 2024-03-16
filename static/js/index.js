window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 0,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

})

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.zoomable-image');
  
    function handleMouseMove(e) {
      const rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top,
            xPercent = Math.round((x / this.width) * 100),
            yPercent = Math.round((y / this.height) * 100);
  
      this.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    }
  
    images.forEach(img => {
      img.addEventListener('click', function() {
        if (this.style.transform === 'scale(1.5)') {
          this.style.transform = 'scale(1)';
          this.style.cursor = 'zoom-in';
          this.removeEventListener('mousemove', handleMouseMove);
        } else {
          this.style.transform = 'scale(1.5)';
          this.style.cursor = 'zoom-out';
          this.addEventListener('mousemove', handleMouseMove);
        }
      });
    });
  });
  