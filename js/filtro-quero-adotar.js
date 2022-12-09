let filtrar = document.getElementById("button1");
let pet_info_especie = document.getElementsByClassName("pet-info-especie");

let i_len = pet_info_especie.length;
let i;

filtrar.addEventListener("click", function () {
    // Define o filtro
    let especie = document.getElementById("especie").value;
    let genero = document.getElementById("genero").value;
    let porte = document.getElementById("porte").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;

    let filtro = [especie, genero, porte, estado, cidade];

    if (filtro[0] === "Cães"){
        filtro[0] = "Cachorro"
    }
    if (filtro[0] === "Gatos"){
        filtro[0] = "Gato"
    }
    if (filtro[0] === "Aves"){
        filtro[0] = "Ave"
    }

    console.log(filtro)

    // A lógica que vai entrar aqui é: Se todos os campos do pet foram igual ao do filtro, OK. Se não, esconde o pet.

    // Testa o filtro em cada pet
    let filt = 0;
    for (i = 0; i < i_len; i++){
        let str = pet_info_especie[i].textContent;
        console.log(str)
        if (str.includes(filtro[0])){
            filt = 1
        }
    }

})