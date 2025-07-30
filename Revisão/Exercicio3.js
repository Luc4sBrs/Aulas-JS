const input = document.getElementById('novo-item-input');
const botao = document.getElementById('adicionar-btn');
const lista = document.getElementById('minha-lista');

botao.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto !== '') {
    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
    input.value = '';
  }
});
