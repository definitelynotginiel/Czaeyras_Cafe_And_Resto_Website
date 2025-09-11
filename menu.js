const desktopButtons = document.querySelectorAll("#desktopCategories .category-btn");
  const overlay = document.getElementById("categoryOverlay");
  const openBtn = document.getElementById("openCategories");
  const closeBtn = document.getElementById("closeCategories");
  const buttons = document.querySelectorAll(".category-btn");
  const categories = document.querySelectorAll(".menu-category");
  const mobileSelect = document.getElementById("mobileCategorySelect");
  const menuTitle = document.getElementById("menuTitle");

  // Open overlay
  openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
  });

  // Close overlay with X button
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  // Close overlay when clicking a category
  document.querySelectorAll("#categoryOverlay .category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.classList.add("hidden");
      showCategory(btn.dataset.category); // <-- reuse your existing function
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
      b.classList.add('bg-white', 'text-orange-600');
      b.classList.remove('bg-orange-600', 'text-white');
    });

    // Highlight clicked desktop button
    btn.classList.add('bg-orange-600', 'text-white');
    btn.classList.remove('bg-white', 'text-orange-600');

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
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Optional: Hide mobile menu when a link is clicked
      document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });