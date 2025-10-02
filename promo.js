document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop(); 
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add(
          "text-pink-500",      // highlight color
          "border-b-2",         // underline effect
          "border-pink-500",    // pink underline
        );
      }
    });
  });
// Back to top button
    const backToTopBtn = document.getElementById("backToTop");
    
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.remove("opacity-0", "invisible");
        backToTopBtn.classList.add("opacity-100", "visible");
      } else {
        backToTopBtn.classList.remove("opacity-100", "visible");
        backToTopBtn.classList.add("opacity-0", "invisible");
      }
    };
    
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuIcon = mobileMenuBtn.querySelector("i");

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icon between bars and times
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenuIcon.classList.remove("fa-times");
        mobileMenuIcon.classList.add("fa-bars");
      } else {
        mobileMenuIcon.classList.remove("fa-bars");
        mobileMenuIcon.classList.add("fa-times");
      }
    });


    // Optional: Hide mobile menu when a link is clicked
    document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenuIcon.classList.remove("fa-times");
    mobileMenuIcon.classList.add("fa-bars");
  });
});

var swiper = new Swiper(".myPromoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // show 2 promos side by side on tablets+
      }
    }
  });
  // Get modal elements
  const modal = document.getElementById("promoModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const closeModal = document.getElementById("closeModal");

  // Get all promo images
  const promoImages = document.querySelectorAll(".promo-image");

  promoImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden"); // show modal
      modalImage.src = img.src;
      // Disable body scroll
      document.body.classList.add("overflow-hidden");
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    // Enable body scroll again
    document.body.classList.remove("overflow-hidden");
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
    // Enable body scroll again
    document.body.classList.remove("overflow-hidden");
  });
  // Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  }
});
