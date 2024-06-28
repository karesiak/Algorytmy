document.getElementById('functionFormCubic').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);
    const x = parseFloat(document.getElementById('x').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(x)) {
        document.getElementById('resultCubic').innerText = 'Błędne dane wejściowe. Proszę podać poprawne liczby.';
        return;
    }

    const result = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
    document.getElementById('resultCubic').innerText = `f(${x}) = ${result}`;
});

document.getElementById('functionFormPolynomial').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a0 = parseFloat(document.getElementById('a0').value);
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    const a3 = parseFloat(document.getElementById('a3').value);
    const a4 = parseFloat(document.getElementById('a4').value);
    const a5 = parseFloat(document.getElementById('a5').value);
    const x = parseFloat(document.getElementById('x_poly').value);

    if (isNaN(a0) || isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(a4) || isNaN(a5) || isNaN(x)) {
        document.getElementById('resultPolynomial').innerText = 'Błędne dane wejściowe. Proszę podać poprawne liczby.';
        return;
    }

    const result = a0 + a1 * Math.pow(x, 1) + a2 * Math.pow(x, 2) + a3 * Math.pow(x, 3) + a4 * Math.pow(x, 4) + a5 * Math.pow(x, 5);
    document.getElementById('resultPolynomial').innerText = `f(${x}) = ${result}`;
});

document.getElementById('monteCarloForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const liczbaProb = parseInt(document.getElementById('proby').value);

    if (isNaN(liczbaProb) || liczbaProb <= 0) {
        document.getElementById('resultMonteCarlo').innerText = 'Proszę podać poprawną liczbę prób.';
        return;
    }

    const pi = oszacujPi(liczbaProb);
    document.getElementById('resultMonteCarlo').innerText = `Oszacowana wartość Pi dla ${liczbaProb} prób wynosi: ${pi}`;
});

function oszacujPi(liczbaProb) {
    let wewnatrzKola = 0;

    for (let i = 0; i < liczbaProb; i++) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;

        if (x * x + y * y <= 1) {
            wewnatrzKola++;
        }
    }

    return 4.0 * wewnatrzKola / liczbaProb;
}

document.getElementById('sieveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const n = parseInt(document.getElementById('n').value);

    if (isNaN(n) || n <= 1) {
        document.getElementById('resultSieve').innerText = 'Proszę podać poprawną wartość n.';
        return;
    }

    const primes = znajdzLiczbyPierwsze(n);
    document.getElementById('resultSieve').innerText = `Liczby pierwsze mniejsze niż ${n}: ${primes.join(', ')}`;
});

function znajdzLiczbyPierwsze(n) {
    let prime = new Array(n + 1).fill(true);
    prime[0] = prime[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (let i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }

    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (prime[i]) {
            primes.push(i);
        }
    }
    return primes;
}
