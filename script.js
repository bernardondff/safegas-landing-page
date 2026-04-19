/* ============================================================
   SAFEGAS MONITOR — script.js
   ============================================================ */

// ---- NAV SCROLL ----
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ---- SCROLL REVEAL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ---- ANIMATED SENSOR VALUES ----
function animateSensor(el, min, max, decimals = 1) {
  let current = parseFloat(el.textContent);
  const target = +(Math.random() * (max - min) + min).toFixed(decimals);
  const step = (target - current) / 20;
  let tick = 0;

  const interval = setInterval(() => {
    current += step;
    tick++;
    el.textContent = current.toFixed(decimals);
    if (tick >= 20) {
      el.textContent = target.toFixed(decimals);
      clearInterval(interval);
    }
  }, 30);
}

const ppmEl  = document.getElementById('sensor-ppm');
const tempEl = document.getElementById('sensor-temp');
const batEl  = document.getElementById('sensor-bat');

if (ppmEl) {
  setInterval(() => animateSensor(ppmEl, 0, 45, 1), 3500);
  setInterval(() => animateSensor(tempEl, 22, 31, 1), 4500);
  setInterval(() => animateSensor(batEl, 78, 98, 0), 7000);
}

// ---- WAVEFORM SVG ANIMATION ----
function generateWavePath(width, height, offset) {
  const points = [];
  const segments = 40;
  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width;
    const noise = Math.sin((i * 0.4) + offset) * 8
                + Math.sin((i * 0.9) + offset * 1.3) * 4
                + Math.sin((i * 1.8) + offset * 0.7) * 2;
    const y = height / 2 + noise;
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return points.join(' ');
}

const wavePath = document.getElementById('wave-path');
if (wavePath) {
  let offset = 0;
  const svgEl = wavePath.closest('svg');
  const W = svgEl?.viewBox?.baseVal?.width || 400;
  const H = 48;
  setInterval(() => {
    offset += 0.08;
    wavePath.setAttribute('d', generateWavePath(W, H, offset));
  }, 40);
}

// ---- COUNTER ANIMATION ----
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    const formatted = Number.isInteger(target)
      ? Math.round(value).toLocaleString('pt-BR')
      : value.toFixed(1).replace('.', ',');
    el.textContent = prefix + formatted + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ---- FORMSPREE AJAX SUBMIT ----
const form = document.getElementById('pilot-form');
const successEl = document.getElementById('form-success');
const submitBtn = document.getElementById('submit-btn');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        successEl.style.display = 'block';
      } else {
        const json = await res.json();
        const msg = json?.errors?.map(e => e.message).join(', ')
          || 'Erro ao enviar. Tente novamente.';
        alert(msg);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Quero ser parceiro piloto →';
      }
    } catch {
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Quero ser parceiro piloto →';
    }
  });
}

// ---- MOBILE NAV TOGGLE ----
const mobileBtn = document.querySelector('.nav-mobile-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(6,6,15,0.97)';
    navLinks.style.padding = '1.5rem 2rem';
    navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    navLinks.style.gap = '1.25rem';
    if (open) navLinks.style.display = 'none';
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navLinks.style.display = 'none'; });
  });
}
