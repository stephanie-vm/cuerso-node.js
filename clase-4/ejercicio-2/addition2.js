exports.operacionVolumen = function(diametro, altura) {
    const pi= (3,14);
    const R = diametro / 2;
    const V = pi *(R * R) * altura;
    console.log(`El volumen del cilindro es de ${V}, metros cúbicos`)
}