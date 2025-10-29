// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the element
      });
      // Close mobile menu if open
      const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
      const hamburgerButton = document.getElementById("hamburger-button");
      if (mobileMenuOverlay.classList.contains("active")) {
        mobileMenuOverlay.classList.remove("active");
        hamburgerButton.classList.remove("open");
      }
    }
  });
});

// Hamburger menu functionality
const hamburgerButton = document.getElementById("hamburger-button");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const mobileMenuClose = document.getElementById("mobile-menu-close");

hamburgerButton.addEventListener("click", () => {
  mobileMenuOverlay.classList.toggle("active");
  hamburgerButton.classList.toggle("open");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenuOverlay.classList.remove("active");
  hamburgerButton.classList.remove("open");
});

// Close mobile menu when clicking outside (optional, but good UX)
mobileMenuOverlay.addEventListener("click", (e) => {
  if (e.target === mobileMenuOverlay) {
    mobileMenuOverlay.classList.remove("active");
    hamburgerButton.classList.remove("open");
  }
});

// Form submission handling (Client-side only)
const orderForm = document.querySelector("#kontak form"); // Select the form within the #kontak section
if (orderForm) {
  orderForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // --- PENTING: Bagian ini hanya simulasi. Untuk mengirim email, Anda butuh backend! ---
    alert(
      "Terima kasih atas pesanan Anda! Kami akan segera menghubungi Anda untuk konfirmasi. (Ini adalah simulasi, form tidak terkirim ke email tanpa backend)"
    );
    this.reset(); // Clear the form fields
    // ------------------------------------------------------------------------------------

    // Jika Anda menggunakan layanan seperti Formspree, Netlify Forms, atau EmailJS,
    // Anda akan mengkonfigurasi 'action' atribut form dan mungkin menambahkan JavaScript
    // sesuai dokumentasi layanan tersebut.
  });
}
