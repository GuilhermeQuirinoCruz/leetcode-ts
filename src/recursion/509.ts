function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// Exemplo 1
console.log(fib(2));

// Exemplo 2
console.log(fib(3));

// Exemplo 3
console.log(fib(4));
