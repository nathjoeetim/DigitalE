/**
 * Digital Equity Africa - Interaction Script
 * Core website behavior and accessibility controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccessibilityControls();
  initNavigation();
  initHeroSlideshow();
  initMvvTabs();
  initServiceFilters();
  initBookingModal();
  initContactForm();
});

/* ==========================================================================
   1. ACCESSIBILITY CONTROLS
   ========================================================================== */
function initAccessibilityControls() {
  // Theme Switching
  const themeDots = document.querySelectorAll('[data-theme-choice]');
  const savedTheme = localStorage.getItem('de-theme') || 'light';
  
  setTheme(savedTheme);

  themeDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const selectedTheme = e.target.getAttribute('data-theme-choice');
      setTheme(selectedTheme);
    });
    
    // Support keyboard activation
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const selectedTheme = e.target.getAttribute('data-theme-choice');
        setTheme(selectedTheme);
      }
    });
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('de-theme', theme);
    
    // Update active state in UI
    themeDots.forEach(dot => {
      const isCurrent = dot.getAttribute('data-theme-choice') === theme;
      dot.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
      if (isCurrent) {
        dot.style.transform = 'scale(1.2)';
        dot.style.borderWidth = '3px';
      } else {
        dot.style.transform = 'none';
        dot.style.borderWidth = '2px';
      }
    });
  }

  // Font Resizing
  let currentFontScale = parseFloat(localStorage.getItem('de-font-scale')) || 1.0;
  updateFontScale(currentFontScale);

  const btnIncrease = document.getElementById('font-increase');
  const btnDecrease = document.getElementById('font-decrease');
  const btnReset = document.getElementById('font-reset');

  if (btnIncrease && btnDecrease && btnReset) {
    btnIncrease.addEventListener('click', () => {
      if (currentFontScale < 1.5) {
        currentFontScale += 0.1;
        updateFontScale(currentFontScale);
      }
    });

    btnDecrease.addEventListener('click', () => {
      if (currentFontScale > 0.8) {
        currentFontScale -= 0.1;
        updateFontScale(currentFontScale);
      }
    });

    btnReset.addEventListener('click', () => {
      currentFontScale = 1.0;
      updateFontScale(currentFontScale);
    });
  }

  function updateFontScale(scale) {
    document.documentElement.style.setProperty('--font-scale', scale);
    localStorage.setItem('de-font-scale', scale);
  }

  // Simplified Layout Toggle
  const layoutToggle = document.getElementById('layout-toggle');
  const savedLayoutMode = localStorage.getItem('de-simplified-layout') === 'true';

  if (layoutToggle) {
    setLayoutMode(savedLayoutMode);
    
    layoutToggle.addEventListener('click', () => {
      const isCurrentlySimplified = document.body.classList.contains('simplified-mode');
      setLayoutMode(!isCurrentlySimplified);
    });
  }

  function setLayoutMode(isSimplified) {
    if (isSimplified) {
      document.body.classList.add('simplified-mode');
      layoutToggle.setAttribute('aria-pressed', 'true');
      layoutToggle.textContent = 'Switch to Modern View';
    } else {
      document.body.classList.remove('simplified-mode');
      layoutToggle.setAttribute('aria-pressed', 'false');
      layoutToggle.textContent = 'Switch to Simplified View';
    }
    localStorage.setItem('de-simplified-layout', isSimplified);
  }
}

/* ==========================================================================
   2. HEADER NAVIGATION & MOBILE HAMBURGER
   ========================================================================== */
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenuList = document.getElementById('nav-menu-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenuList) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      hamburgerBtn.classList.toggle('active');
      navMenuList.classList.toggle('mobile-active');
    });

    // Close menu when navigation link is clicked on mobile
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.classList.remove('active');
        navMenuList.classList.remove('mobile-active');
      });
    });
  }

  // Active Link Tracking based on Scroll Position
  const sections = document.querySelectorAll('main > section');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120; // offset header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. HERO SLIDESHOW
   ========================================================================== */
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dotIndicator = document.getElementById('slide-dots-indicator');
  const btnPrev = document.getElementById('slide-prev');
  const btnNext = document.getElementById('slide-next');
  
  if (slides.length === 0) return;

  let currentSlideIndex = 0;
  let slideInterval = null;
  const slideDuration = 6000; // 6 seconds

  // Create dot indicators
  if (dotIndicator) {
    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('slide-dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(index);
        resetAutoplay();
      });
      dotIndicator.appendChild(dot);
    });
  }

  function updateIndicators() {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function goToSlide(index) {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (index + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
    updateIndicators();
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      nextSlide();
      resetAutoplay();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      prevSlide();
      resetAutoplay();
    });
  }

  // Autoplay functionality
  function startAutoplay() {
    slideInterval = setInterval(nextSlide, slideDuration);
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  startAutoplay();
}

/* ==========================================================================
   4. MISSION, VISION, VALUES (MVV) TABS
   ========================================================================== */
function initMvvTabs() {
  const tabBtns = document.querySelectorAll('.mvv-tab-btn');
  const contentPanes = document.querySelectorAll('.mvv-content-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPaneId = btn.getAttribute('aria-controls');

      // Deactivate all tabs and panes
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      contentPanes.forEach(p => p.classList.remove('active'));

      // Activate clicked tab and pane
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. SERVICE FILTERS
   ========================================================================== */
function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterVal === 'all' || cardCategory === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'none'; // reset animation trigger
          void card.offsetWidth; // trigger reflow
          card.style.animation = 'cardEntrance 0.4s forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. BOOKING MODAL
   ========================================================================== */
const bookingModal = document.getElementById('booking-modal');
const modalServiceSelect = document.getElementById('modal-service-select');
const bookingForm = document.getElementById('modal-booking-form');
const successBanner = document.getElementById('modal-success-banner');

function initBookingModal() {
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && bookingModal) {
    closeBtn.addEventListener('click', closeBookingModal);
    
    // Close on overlay click
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeBookingModal();
      }
    });

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeBookingModal();
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm(bookingForm)) {
        if (successBanner) {
          successBanner.style.display = 'block';
        }
        bookingForm.reset();
        setTimeout(() => {
          closeBookingModal();
          if (successBanner) successBanner.style.display = 'none';
        }, 2500);
      }
    });
  }
}

function openBooking(serviceName) {
  if (bookingModal && modalServiceSelect) {
    // Map service string to select option value
    for (let option of modalServiceSelect.options) {
      if (option.value === serviceName || serviceName.includes(option.value)) {
        modalServiceSelect.value = option.value;
        break;
      }
    }
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable scroll under modal
    bookingForm.querySelector('.form-input').focus(); // accessibility focus ring
  }
}

function closeBookingModal() {
  if (bookingModal) {
    bookingModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scroll
    clearValidationErrors(bookingForm);
  }
}

// Make openBooking globally accessible for inline onclick handlers
window.openBooking = openBooking;

/* ==========================================================================
   7. CONTACT FORM VALIDATION & SUBMISSION
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('direct-contact-form');
  const successBanner = document.getElementById('contact-success-banner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateForm(contactForm)) {
        if (successBanner) {
          successBanner.style.display = 'block';
          successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        contactForm.reset();
        setTimeout(() => {
          if (successBanner) successBanner.style.display = 'none';
        }, 6000);
      }
    });

    // Clean errors dynamically on input focus or edit
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          input.classList.remove('error');
          const errorMsg = contactForm.querySelector(`#error-${input.id.replace('contact-', '')}`);
          if (errorMsg) errorMsg.classList.remove('visible');
        }
      });
    });
  }
}

/* ==========================================================================
   COMMON UTILS: FORM VALIDATION
   ========================================================================== */
function validateForm(form) {
  let isValid = true;
  const isModal = form.id.includes('modal');
  const prefix = isModal ? 'modal-' : 'contact-';

  const nameInput = form.querySelector(`#${prefix}name`);
  const emailInput = form.querySelector(`#${prefix}email`);
  const phoneInput = form.querySelector(`#${prefix}phone`);
  const messageInput = form.querySelector(`#${prefix}message`);

  // Validate Name
  if (nameInput && nameInput.value.trim() === '') {
    showError(nameInput, form.querySelector(`#${prefix}error-name`) || form.querySelector('#error-name'));
    isValid = false;
  }

  // Validate Email
  if (emailInput) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, form.querySelector(`#${prefix}error-email`) || form.querySelector('#error-email'));
      isValid = false;
    }
  }

  // Validate Phone
  if (phoneInput && phoneInput.value.trim() === '') {
    showError(phoneInput, form.querySelector(`#${prefix}error-phone`) || form.querySelector('#error-phone'));
    isValid = false;
  }

  // Validate Message (Direct contact form only)
  if (messageInput && messageInput.value.trim() === '') {
    showError(messageInput, form.querySelector(`#${prefix}error-message`) || form.querySelector('#error-message'));
    isValid = false;
  }

  return isValid;
}

function showError(inputElement, errorElement) {
  inputElement.classList.add('error');
  if (errorElement) {
    errorElement.classList.add('visible');
  }
}

function clearValidationErrors(form) {
  if (!form) return;
  const inputs = form.querySelectorAll('.form-input');
  const errors = form.querySelectorAll('.form-error');
  
  inputs.forEach(input => input.classList.remove('error'));
  errors.forEach(err => err.classList.remove('visible'));
}
