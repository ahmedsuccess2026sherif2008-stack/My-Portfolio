// ========================================
// Projects Data
// ========================================
const projectsData = [
  {
    title: 'منصة التجارة الإلكترونية',
    description: 'منصة تجارة إلكترونية متكاملة تتميز بواجهة مستخدم سهلة الاستخدام ونظام سلة مشتريات متطور. تشمل المنصة ميزات متعددة مثل تصفية المنتجات، البحث المتقدم، وبوابة دفع آمنة. تم بناؤها باستخدام أحدث تقنيات الويب لضمان أداء عالي وتجربة مستخدم مثالية.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    challenges: 'التحدي الأكبر كان إدارة حالة التطبيق المعقدة ومزامنة البيانات بين المكونات المختلفة. تم حل هذه المشكلة باستخدام Redux مع middleware مخصص وتطبيق optimistic updates لتحسين تجربة المستخدم.',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'لوحة تحكم تحليلية',
    description: 'لوحة تحكم تفاعلية لعرض البيانات والإحصائيات بطرق مرئية مبتكرة. تتيح للمستخدمين تتبع الأداء، تحليل الاتجاهات، واتخاذ القرارات المستنيرة بناءً على البيانات الفعلية. تدعم اللوحة تصدير التقارير والتخصيص الكامل.',
    tech: ['Vue.js', 'Chart.js', 'Firebase', 'Vuex', 'Axios'],
    challenges: 'التحدي كان معالجة كميات كبيرة من البيانات في الوقت الفعلي دون التأثير على الأداء. تم حل هذه المشكلة من خلال تطبيق lazy loading للبيانات واستخدام Web Workers للمعالجة في الخلفية.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'تطبيق إدارة المهام',
    description: 'تطبيق متقدم لإدارة وتنظيم المهام اليومية مع ميزات التعاون الجماعي والتنبيهات الذكية. يدعم التطبيق إنشاء قوائم مهام متعددة، تحديد الأولويات، وتتبع التقدم. يعمل بشكل غير متصل باستخدام Progressive Web App.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage', 'Service Workers', 'PWA'],
    challenges: 'التحدي الرئيسي كان جعل التطبيق يعمل بشكل غير متصل ومزامنة البيانات عند الاتصال بالإنترنت. تم حل هذا باستخدام Service Workers و IndexedDB مع تنفيذ استراتيجية sync عند استعادة الاتصال.',
    images: [
      'https://images.unsplash.com/photo-1522542550221-31fd8575f6b4?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'موقع شركة تقنية',
    description: 'موقع احترافي وعصري لشركة تقنية متخصصة في حلول الويب. يتميز الموقع بتصميم متجاوب بالكامل، تأثيرات حركية سلسة، وأداء محسّن لتحسين تجربة المستخدم ومحركات البحث.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    challenges: 'التحدي كان تحقيق أداء ممتاز مع تأثيرات حركية معقدة. تم حل هذه المشكلة من خلال استخدام Next.js لتحسين الأداء و GSAP للرسوم المتحركة مع تطبيق code splitting و lazy loading.',
    images: [
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'تطبيق تواصل اجتماعي',
    description: 'منصة تواصل اجتماعي متكاملة تتيح للمستخدمين التفاعل، مشاركة المحتوى، والتواصل في الوقت الفعلي. تشمل الميزات المحادثات الفورية، المشاركات، التعليقات، والإشعارات.',
    tech: ['Vue.js', 'Vuex', 'Socket.io', 'Express', 'MongoDB', 'JWT'],
    challenges: 'التحدي الأكبر كان تنفيذ التواصل في الوقت الفعلي مع عدد كبير من المستخدمين. تم حل هذه المشكلة باستخدام Socket.io مع scaling مناسب وتطبيق reconnection strategies قوية.',
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'نظام حجز المواعيد',
    description: 'نظام متكامل لحجز المواعيد مع تقويم تفاعلي وإشعارات تلقائية. يدعم النظام إدارة المواعيد، تتبع الحالة، وإرسال تذكيرات للمستخدمين عبر البريد الإلكتروني والرسائل النصية.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'MySQL', 'REST API'],
    conflicts: 'التحدي كان تجنب تضارب المواعيد وإدارة التوفر في الوقت الفعلي. تم حل هذه المشكلة من خلال تطبيق نظام حجز ذكي مع قفل المواعيد مؤقتاً أثناء عملية الحجز.',
    images: [
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop'
    ],
    liveLink: '#',
    githubLink: '#'
  }
];

// ========================================
// Global Variables
// ========================================
const navbarMenu = document.getElementById('navbarMenu');

// ========================================
// Loading Screen
// ========================================
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
  }, 1000);
});

// ========================================
// Dark Mode Toggle
// ========================================
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.toggle('light-mode', savedTheme === 'light');
  updateDarkModeButton();
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  updateDarkModeButton();
});

function updateDarkModeButton() {
  const isLightMode = body.classList.contains('light-mode');
  const icon = darkModeToggle.querySelector('i');
  const text = darkModeToggle.querySelector('span');
  
  if (isLightMode) {
    icon.className = 'fas fa-sun';
    text.textContent = 'Light';
  } else {
    icon.className = 'fas fa-moon';
    text.textContent = 'Dark';
  }
}

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

mobileMenuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  if (navbarMenu.classList.contains('active')) {
    icon.className = 'fas fa-times';
  } else {
    icon.className = 'fas fa-bars';
  }
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
  });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ========================================
// Progress Bar
// ========================================
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = progress + '%';
});

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Scroll Animations
// ========================================
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ========================================
// Project Filtering
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
});

// ========================================
// Project Modal
// ========================================
const modal = document.getElementById('projectModal');

function openModal(projectIndex) {
  const project = projectsData[projectIndex];
  
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalChallenges').textContent = project.challenges || project.conflicts;
  
  // Update images
  const modalImages = document.getElementById('modalImages');
  modalImages.innerHTML = project.images.map(img => 
    `<img src="${img}" class="modal-image" alt="صورة المشروع">`
  ).join('');
  
  // Update tech tags
  const modalTech = document.getElementById('modalTech');
  modalTech.innerHTML = project.tech.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');
  
  // Update links
  document.getElementById('modalLiveLink').href = project.liveLink;
  document.getElementById('modalGithubLink').href = project.githubLink;
  document.getElementById('modalWhatsAppLink').href = `https://wa.me/201146721888?text=${encodeURIComponent(`مرحباً، أريد الاستفسار عن المشروع: ${project.title}`)}`;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const projectType = document.getElementById('projectType').value;
  const message = document.getElementById('message').value;

  // Create WhatsApp message
  const whatsappMessage = `مرحباً، أنا ${name}\nالبريد الإلكتروني: ${email}\nنوع المشروع: ${projectType}\nالرسالة: ${message}`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // WhatsApp URL
  const phoneNumber = '201146721888'; // Without + for WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, '_blank');
});

// ========================================
// Typing Effect for Hero Section (Optional Enhancement)
// ========================================
const typingText = document.querySelector('.hero-title');
if (typingText) {
  const originalText = typingText.textContent;
  typingText.textContent = '';
  
  let charIndex = 0;
  function typeWriter() {
    if (charIndex < originalText.length) {
      typingText.textContent += originalText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    }
  }
  
  // Start typing after page load
  setTimeout(typeWriter, 1500);
}

// ========================================
// Parallax Effect for Hero Image
// ========================================
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    heroImage.style.transform = `translateY(${rate}px)`;
  });
}

// ========================================
// Counter Animation for Stats (if added)
// ========================================
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const duration = 2000;
  const stepTime = duration / 100;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, stepTime);
}

// ========================================
// Intersection Observer for Better Performance
// ========================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ========================================
// Dynamic Year in Footer
// ========================================
const yearElements = document.querySelectorAll('.footer-copyright');
yearElements.forEach(el => {
  el.innerHTML = el.innerHTML.replace('2024', new Date().getFullYear());
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c👋 مرحباً بك!', 'font-size: 24px; font-weight: bold; color: #F8F8FF;');
console.log('%cأنا أحمد شريف، مطور واجهات أمامية', 'font-size: 16px; color: #CCCCCC;');
console.log('%cإذا كنت مهتماً بالكود، سأكون سعيداً بالتواصل معك!', 'font-size: 14px; color: #999999;');
console.log('%c📧 البريد: ahmedsuccess2026sherif2008@gmail.com', 'font-size: 14px; color: #666666;');

// ========================================
// Initialize All
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize any plugins or libraries here
  console.log('Portfolio initialized successfully!');
});
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.navbar-menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// === WhatsApp Integration ===

/**
 * افتح WhatsApp مع رسالة مخصصة
 * @param {string} category - فئة المنتج (men, women, offers)
 * @param {number} productId - رقم المنتج (1-7)
 */
function openWhatsApp(category, productId) {
    // رقم WhatsApp
    const phoneNumber = '201035116747';
    
    // النص الافتراضي للرسالة - يمكن تعديله لاحقاً
    // TODO: يمكنك تعديل النص حسب احتياجاتك
    // مثال: const message = `مرحباً، أرغب في الاستفسار عن المنتج رقم ${productId} من قسم ${category}`;
    const message = ``; // النص فارغ ليمكن تعديله لاحقاً
    
    // إنشاء رابط WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح WhatsApp في نافذة جديدة
    window.open(whatsappURL, '_blank');
}

// === Smooth Scroll for Navigation ===

// إضافة تأثير تمرير سلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});