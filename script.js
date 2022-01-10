function contar() {
  var inicio = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert('ERRO!Faltam de dados!')
  } else {
    res.innerHTML = 'Contando...'
    //convertendo para números
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido!Considerando Passo 1')
    }
    if (i < f) {
      //contagem crescente
      for (let c = 1; c <= f; c += p) {
        //emojis
        res.innerHTML += `${c} \u{1f449} `
      }
    } else {
      //contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1f449} `
      }
    }
    res.innerHTML += `\u{1f3c1}`
  }
}
