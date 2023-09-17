function somar(numero1, numero2) {
  return numero1 + numero2;
}
function subtrair(numero1, numero2) {
  return numero1 - numero2;
}
function dividir(numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number")
    return "Os valores devem ser números";
  if (numero2 === 0) return "Erro, não é possivel dividir por zero";
  return numero1 / numero2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.dividir = dividir;