// NAV TOGGLE (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle?.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
  if(navLinks.classList.contains('open')){
    navLinks.style.display = 'flex';
  } else {
    navLinks.style.display = '';
  }
});

// SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',(e)=>{
    const target = document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      const offset = 70; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top,behavior:'smooth'});
    }
  });
});

// SIMPLE FORM SUBMIT (simula envio)
const form = document.getElementById('form-contato');
const status = document.getElementById('form-status');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  status.textContent = 'Enviando...';
  const data = new FormData(form);
  // simula requisição
  setTimeout(()=>{
    status.textContent = 'Mensagem enviada com sucesso — verificaremos e retornaremos em breve!';
    form.reset();
  },1200);
});

// SMALL ON-SCROLL ANIMATION
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.12});

document.querySelectorAll('.card, .section h2, .hero-card').forEach(el=>{
  el.classList.add('fade-up');
  observer.observe(el);
});