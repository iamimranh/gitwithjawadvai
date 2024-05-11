function printPrimesUpToN(N) {
    // Create an array to store whether each number is prime or not
    const isPrime = new Array(N + 1).fill(true);
  
    // 0 and 1 are not primes, so mark them as false
    isPrime[0] = isPrime[1] = false;
  
    // Loop from 2 to sqrt(N)
    for (let i = 2; i <= Math.sqrt(N); i++) {
      // If isPrime[i] is true, then i is a prime number
      if (isPrime[i]) {
        // Mark all multiples of i as not prime
        for (let j = i * i; j <= N; j += i) {
          isPrime[j] = false;
        }
      }
    }
  
    // Print all prime numbers up to N
    for (let i = 2; i <= N; i++) {
      if (isPrime[i]) {
        console.log(i);
      }
    }
  }
  
  // Example usage:
  printPrimesUpToN(100); // Prints all prime numbers up to 100
  

function add(a, b) {
  return a + b;
}
