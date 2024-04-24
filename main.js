let listaSpesa = ["Acqua", "Monster Energy", "Vegan Burger"];

/*
//Ciclo con for
for (let i = 0; i < listaSpesa.length; i++) {
    const element = listaSpesa[i];
    console.log(element);
}
*/
let i=0;
//Ciclo con while
while (i < listaSpesa.length) {
    const element = listaSpesa[i];
    console.log(element);

    i++;
}
i=0; //Reset in caso venga riutilizzata in futuro