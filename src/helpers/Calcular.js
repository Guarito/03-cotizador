export const DiferenciaAnos = (ano) => {
    const anoActual = new Date().getFullYear();
    const resta = anoActual - ano;
    return resta;
};

export const CalcularMarca = (marca) => {
    let incremento;

    switch (marca) {
        case "americano":
            incremento = 1.2;
            break;
        case "asiatico":
            incremento = 1.1;
            break;
        case "europeo":
            incremento = 1.3;
            break;
        default:
            break;
    }
    return incremento;
};
export const CalcularPlan = (plan) => {
    let incremento;
    switch (plan) {
        case "basico":
            incremento = 1.2;
            break;
        case "premium":
            incremento = 1.5;
            break;
        default:
            break;
    }
    return incremento;
};

export const PrimerLetraMayuscula = ([primeraLetra, ...restoPalabra]) => {
    const capitalizarPrimera = primeraLetra.toUpperCase(); //Capitalizando la primera letra
    const restoPalabraString = restoPalabra.join(""); //Convirtiendo el arreglo en string
    return capitalizarPrimera + restoPalabraString;
};
