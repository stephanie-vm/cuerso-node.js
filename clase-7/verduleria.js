exports.fruits = function(userFruit) {
    const arrayFruits = ["Manzana", "Pera", "Uva", "Sandía", "Banano", "Melocotón", "Piña", "Maracuyá", "Mandarina","Mango"];
    let condition = false;
    for (let i = 0; i < userFruit.length; i++) {
        if (arrayFruits[i] ===  userFruit) {
            condition = true;
        }
    }
    if (condition = true) {
        console.log(`La fruta ${userFruit} sí se encuentra disponible`);
    }
    else {
        console.log(`La fruta ${userFruit} no se encuentra disponible`);
    }
}