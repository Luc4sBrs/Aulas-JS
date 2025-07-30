const n1 = document.getElementById('numero1');
const n2 = document.getElementById('numero2');
const op = document.getElementById('operacao-select');
const botao = document.getElementById('calcular-btn');
const resultado = document.getElementById('resultado-calculadora');

botao.addEventListener('click', () => {
  const valor1 = parseFloat(n1.value);
  const valor2 = parseFloat(n2.value);
  const operacao = op.value;
  let res;

  if (isNaN(valor1) || isNaN(valor2)) {
    resultado.textContent = "Digite dois números válidos.";
    return;
  }

  if (operacao === '/' && valor2 === 0) {
    resultado.textContent = "Não é possível dividir por zero!";
    return;
  }

  switch (operacao) {
    case '+':
      res = valor1 + valor2;
      break;
    case '-':
      res = valor1 - valor2;
      break;
    case '*':
      res = valor1 * valor2;
      break;
    case '/':
      res = valor1 / valor2;
      break;
  }

  resultado.textContent = `Resultado: ${res}`;
});
