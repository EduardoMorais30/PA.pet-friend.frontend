let publicar = document.getElementById("publicar");


publicar.addEventListener("click", function () {
    let nome = document.getElementById("input_nome").value;
    let idade = document.getElementById("idade").value;
    let genero = document.getElementById("genero").value;
    let adulto_filhote = document.getElementById("adulto-filhote").value;
    let tipo_pet = document.getElementById("tipo_pet").value;
    let porte = document.getElementById("porte").value;
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let descricao = document.getElementById("descricao").value;
    let telefone = document.getElementById("telefone").value;
    let doc = document.getElementById("enviar").value;
    let termos = document.getElementById("label_termos").value;

    console.log(nome, idade, genero, adulto_filhote, tipo_pet, porte, estado, cidade, descricao, telefone, doc, termos);
    // Upload para database
})


