// tema
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const guardado = localStorage.getItem('tema');
if (guardado === 'dark') html.setAttribute('data-theme','dark');
toggle.addEventListener('click',()=>{
  const actual = html.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
  html.setAttribute('data-theme',actual);
  localStorage.setItem('tema',actual);
});
// año
document.getElementById('year').textContent = new Date().getFullYear();
// scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const obj = document.querySelector(a.getAttribute('href'));
    obj?.scrollIntoView({behavior:'smooth'});
  });
});
