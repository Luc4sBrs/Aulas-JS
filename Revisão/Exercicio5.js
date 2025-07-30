const botaoTema = document.getElementById('alternar-tema-btn');
const corpo = document.body;

botaoTema.addEventListener('click', () => {
  const modoEscuro = corpo.classList.toggle('dark-theme');
  botaoTema.textContent = modoEscuro ? 'Modo Claro' : 'Alternar Tema';
});
