// Mobile navigation drawer toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    menu.classList.add("hidden");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

function updateActiveMenu(targetItem) {
  const menuItems = document.getElementsByTagName("nav")[0];
  Array.from(menuItems.children).forEach((element) => {
    console.log(element);
    console.log(element.classList);
    element.classList.remove("text-brand-600");
  });
  targetItem.classList.add("text-brand-600");
}

// Modal Control
function openBookingModal(serviceName) {
  const modal = document.getElementById("booking-modal");
  const modalCard = document.getElementById("booking-modal-card");
  const serviceSelect = document.getElementById("modal-service-select");

  if (serviceName && serviceSelect) {
    // Find best match in select options
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (
        serviceSelect.options[i].value
          .toLowerCase()
          .includes(serviceName.toLowerCase()) ||
        serviceName
          .toLowerCase()
          .includes(serviceSelect.options[i].value.toLowerCase())
      ) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    modalCard.classList.remove("scale-95");
    modalCard.classList.add("scale-100");
  }, 10);
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  const modalCard = document.getElementById("booking-modal-card");
  modal.classList.add("opacity-0");
  modalCard.classList.remove("scale-100");
  modalCard.classList.add("scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.getElementById("modal-feedback").classList.add("hidden");
  }, 200);
}

// Handle form submit with message preview without page reload
function handleBookingSubmit(event) {
  event.preventDefault();
  const feedback = document.getElementById("modal-feedback");
  const serviceSelect = document.getElementById("modal-service-select");
  const selectedService = serviceSelect
    ? serviceSelect.value
    : "General Enquiry";

  feedback.classList.remove("hidden");

  const whatsappText = encodeURIComponent(
    `Hello Nearhelpers, I would like to book "${selectedService}" in Adoor.`,
  );

  setTimeout(() => {
    window.open(`https://wa.me/919876543210?text=${whatsappText}`, "_blank");
    closeBookingModal();
  }, 1200);
}

// Close modal on background click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("booking-modal");
  if (e.target === modal) {
    closeBookingModal();
  }
});
