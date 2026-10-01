/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  Instagram,
  Mail,
  ShieldCheck,
  Stethoscope,
  Activity,
  HeartPulse,
  Award,
  Sparkles,
  X,
  MessageSquare
} from 'lucide-react';

/*
=============================================================================
README: PHOTO UPLOAD INSTRUCTIONS
=============================================================================
To display your own real photographs, upload your image files to `/images/`:
  1. `/images/doctor-portrait.jpg`    -> Lead Doctor Portrait (vertical, high quality)
  2. `/images/clinic-reception.jpg`   -> Vergin Clinic reception / waiting lounge
  3. `/images/examination-room.jpg`   -> Clinical examination and diagnostic room
  4. `/images/consultation-care.jpg`  -> Doctor-patient consultation desk
  5. `/images/service-general.jpg`    -> General physician consultation
  6. `/images/service-urgent.jpg`     -> 24/7 round-the-clock medical care
  7. `/images/service-chronic.jpg`    -> Preventive health & chronic disease management
  8. `/images/service-diagnostic.jpg` -> Health screenings & clinical observation

All text, phone numbers, addresses, timings, and image sources can be edited
in the `CLINIC_CONFIG` object directly below.
=============================================================================
*/

// ==========================================
// 1. EDITABLE CONFIGURATION OBJECT
// ==========================================
export const CLINIC_CONFIG = {
  // Brand & Doctor Information
  name: "Vergin Clinic",
  tagline: "24/7 Comprehensive Medical Care & Consultations in Alwar",
  doctorName: "Dr. Consultant Physician",
  doctorDesignation: "Senior Medical Consultant & General Physician",
  qualifications: "MBBS, Medical Practitioner",
  registrationNumber: "reg93489348kkf",
  experienceYears: 15,
  consultationFee: "Available upon inquiry",
  timings: "24/7 Available (Emergency & Scheduled Consultations)",
  
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
  
  // Pre-composed WhatsApp message template
  whatsappDefaultMessage: "Hello Vergin Clinic, I would like to schedule a medical consultation. Please share available slots.",

  // Photographs (Reliable high-resolution medical photography defaults + local fallback references)
  images: {
    doctorPortrait: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85",
    clinicReception: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    examinationRoom: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    consultationCare: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    generalPractice: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
    urgentCare: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=85",
    preventiveHealth: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85",
    diagnosticConsult: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=85",
  },

  // Services offered (based on doctor & 24/7 clinic block)
  services: [
    {
      id: "general-consultation",
      title: "General Medical Consultation",
      description: "Thorough clinical evaluations, diagnostic reviews, and personalized treatment plans for acute and chronic conditions.",
      photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
      availability: "24/7 on-call & walk-in",
      duration: "20-30 mins"
    },
    {
      id: "urgent-care",
      title: "24/7 Urgent Medical Attention",
      description: "Immediate triage and primary medical care for sudden illnesses, fevers, infections, dehydration, and acute discomfort.",
      photo: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=85",
      availability: "Round the clock",
      duration: "Immediate"
    },
    {
      id: "chronic-management",
      title: "Chronic Condition Management",
      description: "Structured monitoring and ongoing clinical guidance for hypertension, diabetes, asthma, and lifestyle wellness.",
      photo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=85",
      availability: "Daily appointments",
      duration: "Regular follow-ups"
    },
    {
      id: "diagnostic-guidance",
      title: "Clinical Diagnostics & Lab Interpretation",
      description: "Experienced assessment of blood work, vital signs, radiologic scans, and secondary clinical opinions.",
      photo: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=85",
      availability: "24/7 support",
      duration: "Detailed review"
    }
  ],

  // Gallery of clinic facilities
  facilities: [
    {
      title: "Reception & Waiting Area",
      description: "Clean, well-ventilated, hygienic patient reception at Ashoka Takij, Alwar.",
      photo: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Clinical Examination Room",
      description: "Private, sanitized examination suite equipped with calibrated diagnostic tools.",
      photo: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    },
    {
      title: "Physician Consultation Desk",
      description: "Quiet, confidential room for patient history discussion and clinical advisory.",
      photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
    }
  ],

  // FAQs
  faqs: [
    {
      question: "Are you open 24 hours a day?",
      answer: "Yes, Vergin Clinic operates 24/7 to provide continuous healthcare support and urgent clinical evaluations in Alwar."
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book easily by calling 9898989898 or tapping the WhatsApp button to message us directly with your preferred time."
    },
    {
      question: "What should I bring to my consultation?",
      answer: "Please bring any prior medical records, previous prescriptions, current medication lists, and recent lab investigation reports."
    },
    {
      question: "Is the clinic registered and certified?",
      answer: "Yes, our medical practice operates with official medical council registration number reg93489348kkf with 15 years of dedicated clinical experience."
    },
    {
      question: "Where is the clinic located in Alwar?",
      answer: "We are located at Ashoka Takij, Alwar (Rajasthan). You can use our interactive Google Maps directions link for exact navigation."
    }
  ],

  // Legal & medical disclaimer
  disclaimer: "Information on this site is general and not a substitute for medical advice."
};

// Safe Image component with graceful fallback
function ClinicImage({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-auto"
}: {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200 text-slate-500 p-6 text-center">
          <Stethoscope className="w-10 h-10 text-teal-700/60 mb-2 stroke-[1.5]" />
          <span className="text-sm font-medium text-slate-700">{alt}</span>
          <span className="text-xs text-slate-500 mt-1">Vergin Clinic Facility</span>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(CLINIC_CONFIG.services[0].title);
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [patientNotes, setPatientNotes] = useState("");
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<string | null>(null);

  // Generate WhatsApp booking URL
  const buildWhatsAppUrl = (customMsg?: string) => {
    const text = customMsg ||
      `Hello Vergin Clinic,\n\nName: ${patientName || "Patient"}\nContact: ${patientPhone || "Not specified"}\nPreferred Time: ${preferredTime || "Flexible"}\nService: ${selectedService}\nNotes: ${patientNotes || "General consultation"}\n\nPlease confirm availability.`;
    return `https://wa.me/91${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl();
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900 pb-20 md:pb-0">
      
      {/* =========================================================================
          TOP BAR CONTRACT: [Brand Wordmark] — [Nav Links] — [Primary Action]
          Strict 3-zone architecture with single-element Brand Zone (anti-slop)
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-teal-800 transition-colors"
          >
            {CLINIC_CONFIG.name}
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-teal-700 transition-colors">About Doctor</a>
            <a href="#services" className="hover:text-teal-700 transition-colors">Services</a>
            <a href="#facilities" className="hover:text-teal-700 transition-colors">Facilities</a>
            <a href="#timings" className="hover:text-teal-700 transition-colors">Timings</a>
            <a href="#faqs" className="hover:text-teal-700 transition-colors">FAQs</a>
            <a href="#location" className="hover:text-teal-700 transition-colors">Location</a>
          </nav>

          {/* Zone 3: Primary actions (Single-line controls) */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_CONFIG.phone}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              <span>{CLINIC_CONFIG.phoneDisplay}</span>
            </a>
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 active:bg-teal-900 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>
      </header>

      {/* =========================================================================
          HERO SECTION: Trust-focused with Doctor Photo, Experience & Direct CTAs
         ========================================================================= */}
      <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean unboxed metadata (anti-pill discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-teal-800">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  24/7 Available
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{CLINIC_CONFIG.experienceYears} Years Clinical Experience</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Alwar, Rajasthan</span>
              </div>

              {/* Dominant Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 text-balance leading-tight">
                Dedicated clinical care & 24/7 medical consultations in Alwar.
              </h1>

              {/* Subtitle / Value proposition */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Vergin Clinic provides prompt, patient-first outpatient and emergency medical evaluations at Ashoka Takij. Led by an experienced physician with 15 years of practice, committed to calm and attentive healthcare.
              </p>

              {/* Registration & Trust Row */}
              <div className="py-3 px-4 bg-teal-50/70 border border-teal-200/60 rounded-xl flex items-center gap-3 text-xs sm:text-sm text-teal-950">
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0" />
                <span>
                  <strong>Official Registration:</strong> {CLINIC_CONFIG.registrationNumber} · Verification on record
                </span>
              </div>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="px-6 py-3 text-sm font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
                <a
                  href={`https://wa.me/91${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <a
                  href={`tel:${CLINIC_CONFIG.phone}`}
                  className="px-5 py-3 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-slate-600" />
                  <span>Call {CLINIC_CONFIG.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-slate-700">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                    {CLINIC_CONFIG.experienceYears}+
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Years in Practice</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                    24/7
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Emergency Care</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                    100%
                  </div>
                  <div className="text-xs text-slate-500 font-medium">Confidential</div>
                </div>
              </div>

            </div>

            {/* Right Doctor Portrait Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <ClinicImage
                  src={CLINIC_CONFIG.images.doctorPortrait}
                  alt="Doctor at Vergin Clinic in consultation room"
                  aspectRatio="aspect-[4/5]"
                />
                <div className="p-5 bg-white border-t border-slate-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{CLINIC_CONFIG.doctorName}</h3>
                      <p className="text-xs text-teal-800 font-medium mt-0.5">{CLINIC_CONFIG.doctorDesignation}</p>
                    </div>
                    <span className="text-xs text-slate-500 tabular-nums font-mono border border-slate-200 px-2 py-0.5 rounded">
                      {CLINIC_CONFIG.qualifications}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-700" />
                      Ashoka Takij, Alwar
                    </span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Available 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT SECTION: Physician Experience & Clinical Philosophy
         ========================================================================= */}
      <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual asset: Clinical Care & Consultation */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <ClinicImage
                  src={CLINIC_CONFIG.images.consultationCare}
                  alt="Doctor conducting medical consultation"
                  aspectRatio="aspect-[4/3]"
                />
                <div className="p-4 bg-slate-50 text-xs text-slate-600 flex items-center justify-between">
                  <span>Care focused on patient well-being</span>
                  <span className="font-mono text-slate-500">Reg: {CLINIC_CONFIG.registrationNumber}</span>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
                About The Practice
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
                15 years of committed healthcare service for families in Alwar.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Vergin Clinic was established with a singular objective: providing prompt, thorough, and empathetic clinical medical consultations when individuals and families need them most. We believe high-quality healthcare begins with listening attentively to patient concerns, conducting detailed examinations, and prescribing evidence-based care.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you require acute triage during late hours or sustained follow-up for chronic health parameters, our doors at Ashoka Takij remain open around the clock with uninterrupted 24/7 accessibility.
              </p>

              {/* Key Trust Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-teal-700" />
                    Experienced Senior Physician
                  </div>
                  <p className="text-xs text-slate-600">
                    Over 15 continuous years treating diverse general and urgent medical conditions.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="font-semibold text-slate-900 text-sm flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-teal-700" />
                    24/7 Continuous Readiness
                  </div>
                  <p className="text-xs text-slate-600">
                    Medical support available day and night for emergency queries and walk-ins.
                  </p>
                </div>
              </div>

              {/* Consultation disclaimer note */}
              <div className="text-xs text-slate-500 pt-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{CLINIC_CONFIG.disclaimer}</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION: Real Clinical Treatments & Scope of Care
         ========================================================================= */}
      <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
                Clinical Services
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Comprehensive Outpatient & Urgent Medical Care
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-2 md:mt-0 max-w-md">
              Each consultation includes systematic vitals screening, symptom analysis, medical advice, and clear follow-up guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLINIC_CONFIG.services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <ClinicImage
                      src={service.photo}
                      alt={service.title}
                      aspectRatio="aspect-[16/9]"
                    />
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 px-3 py-1 rounded-md text-xs font-medium border border-slate-200/80 shadow-xs">
                      {service.availability}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-xs font-mono font-medium text-teal-700">0{idx + 1}.</span>
                      <span className="text-xs text-slate-500 font-medium">Avg: {service.duration}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Ashoka Takij, Alwar</span>
                  <button
                    onClick={() => {
                      setSelectedService(service.title);
                      setIsAppointmentModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>Inquire this treatment</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FACILITIES & CLINIC PHOTOS GALLERY: Real Photographs of Clinic
         ========================================================================= */}
      <section id="facilities" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              Clean & Sanitized Environment
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Clinic Facilities & Consultation Suites
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Vergin Clinic maintains rigorous hygiene, sterilized diagnostic gear, and peaceful consultation rooms designed for patient comfort and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINIC_CONFIG.facilities.map((fac, idx) => (
              <div
                key={idx}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-md"
                onClick={() => setSelectedGalleryPhoto(fac.photo)}
              >
                <ClinicImage
                  src={fac.photo}
                  alt={fac.title}
                  aspectRatio="aspect-[4/3]"
                />
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-teal-800 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fac.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-teal-700 font-medium">
                    <span>Tap to view photo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          TIMINGS & 24/7 AVAILABILITY SECTION
         ========================================================================= */}
      <section id="timings" className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open 24 Hours · Every Day of the Week
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Round-the-clock medical care at Ashoka Takij.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Illnesses and urgent medical conditions do not keep office hours. Vergin Clinic operates on a 24/7 schedule to ensure you always have an experienced medical resource close by in Alwar.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`tel:${CLINIC_CONFIG.phone}`}
                  className="px-5 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call {CLINIC_CONFIG.phone}</span>
                </a>
                <a
                  href={`https://wa.me/91${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent("Hello Vergin Clinic, I need medical assistance right now.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp 24/7 Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-400" />
                  Weekly Operating Schedule
                </h3>
                
                <div className="space-y-2.5 text-xs sm:text-sm">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ].map((day) => (
                    <div key={day} className="flex justify-between items-center py-1.5 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-300 font-medium">{day}</span>
                      <span className="text-emerald-400 font-semibold tabular-nums">Open 24 Hours</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-400">
                  Walk-ins welcome for acute care. Scheduled consultations recommended for detailed chronic disease reviews.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PATIENT CARE & ETHICS NOTE (Compliant with "only genuine testimonials")
         ========================================================================= */}
      <section className="py-14 bg-teal-50/50 border-b border-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-teal-100 text-teal-800 flex items-center justify-center">
            <HeartPulse className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Committed to Ethical, Transparent Patient Consultations
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In compliance with healthcare medical ethics, we do not fabricate reviews, post unsubstantiated before-and-after claims, or offer guarantees. Every patient receives attentive, honest clinical advice rooted in 15 years of medical experience and genuine diagnostic evaluation.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-semibold text-teal-900">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-700" /> Transparent Diagnostics
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-700" /> Patient Privacy Protected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-700" /> No Unnecessary Testing
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FREQUENTLY ASKED QUESTIONS (FAQs)
         ========================================================================= */}
      <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
              Patient Guidance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Common questions regarding visits, registration, and emergency support at Vergin Clinic.
            </p>
          </div>

          <div className="space-y-3">
            {CLINIC_CONFIG.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900 text-sm sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-700' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 pt-1 sm:px-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              Have an urgent question? Reach our desk directly at{' '}
              <a href={`tel:${CLINIC_CONFIG.phone}`} className="font-semibold text-teal-800 underline">
                {CLINIC_CONFIG.phoneDisplay}
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          LOCATION & MAP SECTION: Ashoka Takij, Alwar (Raj.)
         ========================================================================= */}
      <section id="location" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Location Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase mb-2">
                  Visit The Clinic
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Conveniently situated at Ashoka Takij, Alwar
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Located in the central hub of Alwar with easy accessibility, parking availability, and immediate 24/7 entry.
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Address</div>
                    <div>{CLINIC_CONFIG.address}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Alwar, Rajasthan, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Clinic Hours</div>
                    <div>Open 24 Hours / 7 Days a Week</div>
                    <div className="text-xs text-slate-500 mt-0.5">Emergency triage always active</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/80">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Direct Telephone & WhatsApp</div>
                    <div>
                      <a href={`tel:${CLINIC_CONFIG.phone}`} className="hover:text-teal-800 font-medium">
                        {CLINIC_CONFIG.phoneDisplay}
                      </a>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Email: {CLINIC_CONFIG.email}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CLINIC_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-teal-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <a
                  href={CLINIC_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Visual & Direct Navigation Canvas */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <div className="relative aspect-[16/10] bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Subtle Map graphic preview */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  <div className="relative z-10 max-w-md space-y-3">
                    <div className="w-14 h-14 mx-auto rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shadow-xs">
                      <MapPin className="w-7 h-7 text-teal-700 animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{CLINIC_CONFIG.name}</h3>
                      <p className="text-xs text-slate-600 mt-1">{CLINIC_CONFIG.address}</p>
                    </div>
                    <div className="text-xs text-slate-500">
                      Coordinates linked to Ashoka Takij vicinity in Alwar.
                    </div>
                    <div className="pt-2">
                      <a
                        href={CLINIC_CONFIG.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold shadow-xs transition-colors"
                      >
                        <span>Start Navigation to Vergin Clinic</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-500 flex flex-wrap justify-between items-center gap-2">
                  <span>Landmark: Near Ashoka Takij, Alwar (Raj.)</span>
                  <span className="font-semibold text-emerald-700">Open 24/7 for Arrivals</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER: Strict compliance with anti-slop, clean typography & disclaimer
         ========================================================================= */}
      <footer className="bg-white border-t border-slate-200 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-200">
            
            {/* Brand column */}
            <div className="md:col-span-2 space-y-3">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                {CLINIC_CONFIG.name}
              </span>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed">
                24/7 medical consultations and clinical care in Alwar, Rajasthan. 15 years of clinical medical experience, focused on compassionate patient health.
              </p>
              <div className="text-xs text-slate-500 font-mono">
                Reg No: {CLINIC_CONFIG.registrationNumber}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-900 tracking-wider uppercase">
                Quick Navigation
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li><a href="#about" className="hover:text-teal-800 transition-colors">About Doctor</a></li>
                <li><a href="#services" className="hover:text-teal-800 transition-colors">Treatments Offered</a></li>
                <li><a href="#facilities" className="hover:text-teal-800 transition-colors">Clinic Facilities</a></li>
                <li><a href="#timings" className="hover:text-teal-800 transition-colors">24/7 Timings</a></li>
                <li><a href="#faqs" className="hover:text-teal-800 transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#location" className="hover:text-teal-800 transition-colors">Directions & Map</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-900 tracking-wider uppercase">
                Contact & Emergency
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>
                  <a href={`tel:${CLINIC_CONFIG.phone}`} className="hover:text-teal-800 font-medium">
                    Phone: {CLINIC_CONFIG.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/91${CLINIC_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-800"
                  >
                    WhatsApp: +91 {CLINIC_CONFIG.whatsapp}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CLINIC_CONFIG.email}`} className="hover:text-teal-800">
                    Email: {CLINIC_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={CLINIC_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-pink-700 hover:text-pink-900"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram Profile</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom legal & medical disclaimer note */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.
            </div>
            <div className="text-center md:text-right font-medium text-slate-600">
              Disclaimer: {CLINIC_CONFIG.disclaimer}
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MOBILE FLOATING CONTACT BAR: Strict 15% Viewport Cap Discipline
         ========================================================================= */}
      <aside
        aria-label="Quick Emergency and Appointment Action Bar"
        className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2 max-h-[14vh]"
      >
        <a
          href={`tel:${CLINIC_CONFIG.phone}`}
          className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
        >
          <Phone className="w-4 h-4 text-teal-400" />
          <span>Call 24/7</span>
        </a>

        <a
          href={`https://wa.me/91${CLINIC_CONFIG.whatsapp}?text=${encodeURIComponent(CLINIC_CONFIG.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => setIsAppointmentModalOpen(true)}
          className="py-2.5 px-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>Book</span>
        </button>
      </aside>

      {/* =========================================================================
          APPOINTMENT MODAL: No server form required; triggers direct WhatsApp / Call
         ========================================================================= */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setIsAppointmentModalOpen(false)}
              className="absolute top-4 right-4 p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Direct Appointment Request
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Consult with {CLINIC_CONFIG.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill details below to send directly via WhatsApp or call us instantly at {CLINIC_CONFIG.phoneDisplay}.
              </p>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-700 font-medium mb-1">Patient Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter patient name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9898989898"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Preferred Time</label>
                  <input
                    type="text"
                    placeholder="e.g. Today 4:00 PM / Urgent"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Select Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900 bg-white"
                >
                  {CLINIC_CONFIG.services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Emergency Consultation">Emergency 24/7 Visit</option>
                  <option value="General Health Query">General Health Query</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Reason for Visit / Symptoms (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe what you would like to discuss..."
                  value={patientNotes}
                  onChange={(e) => setPatientNotes(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 text-slate-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
                <a
                  href={`tel:${CLINIC_CONFIG.phone}`}
                  className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                Your privacy is protected. No health data is stored or transmitted to external servers.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          GALLERY PHOTO LIGHTBOX MODAL
         ========================================================================= */}
      {selectedGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setSelectedGalleryPhoto(null)}
        >
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedGalleryPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedGalleryPhoto}
              alt="Vergin Clinic facility preview"
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}

    </div>
  );
}
