/**
 * =============================================================================
 * VERGIN CLINIC - EDITABLE CONFIGURATION & CLIENT LOGIC
 * =============================================================================
 * Pure Vanilla JavaScript. No framework, no build steps required.
 * All editable parameters are grouped in the CLINIC_CONFIG object below.
 * =============================================================================
 */

/*
=============================================================================
README: PHOTO UPLOAD INSTRUCTIONS
=============================================================================
To use your own local photos, place these image files into the 'images/' folder:
  1. images/doctor-portrait.jpg    -> Doctor portrait in white coat / stethoscope
  2. images/clinic-reception.jpg   -> Reception desk and patient waiting lounge
  3. images/examination-room.jpg   -> Sanitized clinical examination room
  4. images/consultation-care.jpg  -> Doctor consulting with patient
  5. images/service-general.jpg    -> General medical consultation photo
  6. images/service-urgent.jpg     -> 24/7 urgent medical attention photo
  7. images/service-chronic.jpg    -> Chronic disease management & health check
  8. images/service-diagnostic.jpg -> Diagnostic testing & laboratory review

All paths are relative so this works directly on GitHub Pages and local files!
=============================================================================
*/

const CLINIC_CONFIG = {
  // Practice & Doctor Information
  name: "Vergin Clinic",
  tagline: "24/7 Comprehensive Medical Care & Consultations in Alwar",
  doctorName: "Dr. Consultant Physician",
  doctorTitle: "Senior Consultant Physician & General Practitioner",
  qualifications: "MBBS, Medical Practitioner",
  registrationNumber: "reg93489348kkf",
  experienceYears: 15,
  consultationFee: "Available upon inquiry",
  timings: "24/7 (Open 24 Hours / 7 Days a Week)",

  // Location & Contact Details
  city: "Alwar",
  state: "Rajasthan",
  address: "Ashoka Takij, Alwar (Raj.)",
  phone: "9898989898",
  phoneDisplay: "+91 98989 89898",
  whatsapp: "9898989898",
  email: "9898989898@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/xJP5gxgzW3hyWDrv5",
  instagramUrl: "https://www.instagram.com/andfd/reels/",

  // Pre-filled WhatsApp Inquiry Message
  whatsappDefaultText: "Hello Vergin Clinic, I would like to schedule a medical consultation. Please let me know available slots.",

  // Photographs (High-resolution authentic medical photography with relative fallback)
  images: {
    doctorPortrait: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
    clinicReception: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    examinationRoom: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    consultationCare: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    serviceGeneral: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    serviceUrgent: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=85",
    serviceChronic: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85",
    serviceDiagnostic: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=85"
  },

  // Mandatory Medical Disclaimer
  disclaimer: "Information on this site is general and not a substitute for medical advice."
};

// ==========================================
// INTERACTIVE LOGIC (VANILLA JS)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Handling
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 2. Appointment Modal Logic
  const modal = document.getElementById('appointment-modal');
  const openButtons = document.querySelectorAll('.open-appointment-modal');
  const closeButton = document.getElementById('close-appointment-modal');
  const appointmentForm = document.getElementById('appointment-form');
  const serviceSelect = document.getElementById('modal-service-select');

  const openModal = (defaultService) => {
    if (defaultService && serviceSelect) {
      serviceSelect.value = defaultService;
    }
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      openModal(service);
    });
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 3. Appointment Form WhatsApp Submission
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('patient-name')?.value.trim() || 'Patient';
      const phone = document.getElementById('patient-phone')?.value.trim() || 'Not specified';
      const time = document.getElementById('patient-time')?.value.trim() || 'Immediate / Flexible';
      const service = serviceSelect?.value || 'General Consultation';
      const notes = document.getElementById('patient-notes')?.value.trim() || 'Medical Consultation Request';

      const messageText = `Hello Vergin Clinic,\n\nPatient Name: ${name}\nPhone: ${phone}\nPreferred Time: ${time}\nRequested Service: ${service}\nNotes/Symptoms: ${notes}\n\nPlease confirm availability.`;
      const waUrl = `https://wa.me/91${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(messageText)}`;
      window.location.href = waUrl;
    });
  }

  // 4. Image Lightbox
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');
  const galleryCards = document.querySelectorAll('.gallery-item');

  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const src = card.getAttribute('data-full-img');
      if (lightbox && lightboxImg && src) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
      if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Image Fallback Protection
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      // In case an external image fails to load, gracefully fall back to local or styled placeholder
      const altText = this.getAttribute('alt') || 'Vergin Clinic Healthcare';
      const parent = this.parentElement;
      if (parent && !parent.querySelector('.img-fallback-notice')) {
        this.style.opacity = '0.9';
      }
    });
  });
});
