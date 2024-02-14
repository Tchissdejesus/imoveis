function gerarNumeroAleatorio(min, max) {
    let numeroAleatorio = Math.random() * (max - min) + min;
    return Math.round(numeroAleatorio);
  }
