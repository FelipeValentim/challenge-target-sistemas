function isFibonacci(value, sequence) {
  return sequence.includes(value);
}

function fibonacciSequence(limit) {
  let sequence = [0, 1];
  let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];

  while (nextValue <= limit) {
    sequence.push(nextValue);
    nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  }

  return sequence;
}

function verifyFibonacci() {
  const value = parseInt(document.getElementById("fibonacci").value);
  const resultDiv = document.getElementById("fibonacciResult");

  if (isNaN(value)) {
    resultDiv.textContent = "Por favor, insira um número válido!";
    return;
  }

  let sequence = fibonacciSequence(value);

  if (isFibonacci(value, sequence)) {
    resultDiv.innerHTML = `A sequência de Fibonacci até ${value} é: ${sequence.join(
      ", "
    )}<br><br>${value} pertence à sequência de Fibonacci!`;
  } else {
    resultDiv.innerHTML = `A sequência de Fibonacci até ${value} é: ${sequence.join(
      ", "
    )}<br><br>${value} NÃO pertence à sequência de Fibonacci.`;
  }
}
