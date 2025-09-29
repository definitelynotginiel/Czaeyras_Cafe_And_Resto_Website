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
      modalTitle.textContent = img.getAttribute("data-title");
      modalDesc.textContent = img.getAttribute("data-desc");
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });