// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08 });
reveals.forEach(el => obs.observe(el));

// Bilingual contact form
const copy = {
  en: { name:'Your name', email:'Email', msg:'What do you need?', namePh:'John Smith', emailPh:'hello@yourbusiness.com', msgPh:'I need a website for my restaurant...', btn:'Send Message' },
  es: { name:'Tu nombre', email:'Correo electrónico', msg:'¿Qué necesitás?', namePh:'Juan García', emailPh:'hola@tunegocio.com', msgPh:'Necesito una página web para mi restaurante...', btn:'Enviar mensaje' }
};
function setLang(lang, btn) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const t = copy[lang];
  document.getElementById('lbl-name').textContent = t.name;
  document.getElementById('lbl-email').textContent = t.email;
  document.getElementById('lbl-msg').textContent = t.msg;
  document.getElementById('f-name').placeholder = t.namePh;
  document.getElementById('f-email').placeholder = t.emailPh;
  document.getElementById('f-msg').placeholder = t.msgPh;
  document.getElementById('btn-send').textContent = t.btn;
}