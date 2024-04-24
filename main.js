let listaSpesa = ["Acqua", "Monster Energy", "Vegan Burger"];
/*
//Ciclo con for
for (let i = 0; i < listaSpesa.length; i++) {
    const element = listaSpesa[i];
    console.log(element);
}
*/

let text = `Hello World!`;

let i = 0;
//Ciclo con while
while (i < listaSpesa.length) {
    const element = listaSpesa[i];
    console.log(element);

    //Questi due permettono la stampa, le variabili le ho messe qui, altrimenti verrebbe creato un solo <li>
    const newLi = document.createElement("li");
    let li_El = document.querySelector(".lista").appendChild(newLi);

    /*
    // document.querySelector(".lista").appendChild(newLi);
    let ciaone = document.querySelector(".lista").innerHTML += `${element}`;  //Non funziona
    */
    li_El.innerHTML += `${element}`;

    document.getElementsByClassName("lista").innerHTML = ("Sei iscritto");
    i++;
}
i = 0; //Reset in caso venga riutilizzata in futuro