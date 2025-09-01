// ====== EmailJS ======
(function(){
  emailjs.init("8MFxO9VvE04r_3yDo"); // Public Key
})();

(function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_f7hkwne', 'template_ggah22j', form)
      .then(function () {
        status.textContent = 'Viesti lähetetty onnistuneesti!';
        form.reset();
      })
      .catch(function (err) {
        console.error('EmailJS error:', err);
        status.textContent = 'Virhe viestin lähetyksessä.';
      });
  });
})();

// ====== Modal-esikatselu ======
(function() {
  const modal = document.getElementById('demoModal');
  const frame = document.getElementById('demoFrame');
  const link  = document.getElementById('openNewTab');

  window.openDemo = function(url) {
    frame.src = url;
    link.href = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  };

  window.closeDemo = function() {
    frame.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  modal.addEventListener('click', function(e){ if (e.target === modal) window.closeDemo(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') window.closeDemo(); });
})();

// ====== Slider ======
function scrollSlider(direction) {
  const slider = document.querySelector('.slider-wrapper');
  const cards = slider.querySelectorAll('.card');
  const gap = parseInt(getComputedStyle(slider).gap) || 16;
  const cardWidth = cards[0].getBoundingClientRect().width + gap;
  slider.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

// ====== Autoscroll every 3 seconds ======
setInterval(() => {
  const slider = document.querySelector('.slider-wrapper');
  const cards = slider.querySelectorAll('.card');
  const gap = parseInt(getComputedStyle(slider).gap) || 16;
  const cardWidth = cards[0].getBoundingClientRect().width + gap;
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft + cardWidth > maxScroll) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}, 3000);
