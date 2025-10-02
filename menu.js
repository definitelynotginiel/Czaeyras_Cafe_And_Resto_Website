const desktopButtons = document.querySelectorAll("#desktopCategories .category-btn");
  const overlay = document.getElementById("categoryOverlay");
  const openBtn = document.getElementById("openCategories");
  const closeBtn = document.getElementById("closeCategories");
  const buttons = document.querySelectorAll(".category-btn");
  const categories = document.querySelectorAll(".menu-category");
  const mobileSelect = document.getElementById("mobileCategorySelect");
  const menuTitle = document.getElementById("menuTitle");

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
  // Open overlay
  openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    // Disable body scroll
    document.body.classList.add("overflow-hidden");
  });

  // Close overlay with X button
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    // Enable body scroll again
    document.body.classList.remove("overflow-hidden");
  });

  // Close overlay when clicking a category
  document.querySelectorAll("#categoryOverlay .category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      showCategory(btn.dataset.category); // <-- reuse your existing function
      // Enable body scroll again
      document.body.classList.remove("overflow-hidden");
    });
  });

  function showCategory(category) {
    categories.forEach(cat => cat.classList.add("hidden")); // hide all
    document.getElementById(category).classList.remove("hidden"); // show selected

    // Update global title
  if (menuTitle) {
    const btn = document.querySelector(`.category-btn[data-category="${category}"]`);
    if (btn) {
      menuTitle.textContent = btn.textContent;
    }
  }
  }

  buttons.forEach(btn => {
      btn.addEventListener('click', () => {

        showCategory(btn.dataset.category);
      });
    });
    
  desktopButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset all desktop buttons
    desktopButtons.forEach(b => {
      b.classList.add('category-desktop');
      b.classList.remove('category-desktop-selected');
    });

    // Highlight clicked desktop button
    btn.classList.add('category-desktop-selected');
    btn.classList.remove('category-desktop');

    showCategory(btn.dataset.category);
  });
});

  // Mobile dropdown
  if (mobileSelect) {
    mobileSelect.addEventListener("change", (e) => {
      showCategory(e.target.value);
    });
  }

  // Show first category by default
  showCategory("snacks");

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      backToTopBtn.classList.remove("opacity-0", "invisible");
      backToTopBtn.classList.add("opacity-100", "visible");
    } else {
      backToTopBtn.classList.remove("opacity-100", "visible");
      backToTopBtn.classList.add("opacity-0", "invisible");
    }
  };

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
// Image Modal (Reusable for all categories)
const images = document.querySelectorAll(".menu-category img"); // select ALL menu images
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Open modal on image click
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex"); 
    modalImg.src = img.src; 
    modalImg.alt = img.alt;
    
  // Disable body scroll
    document.body.classList.add("overflow-hidden");
  });
});

// Close modal on X button
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  // Enable body scroll again
  document.body.classList.remove("overflow-hidden");
});

// Close modal on background click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
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

