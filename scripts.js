const vagas = [];
function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += "( " + vaga.candidatos.length + "candidatos) \n";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Informe o nome da vaga?");
  const descrição = prompt("Informe a descrição da vaga?");
  const dataLimite = prompt("Informe a data limite da vaga?");
  const confirmação = confirm(
    "Deseja criar uma nova vaga com as seguintes informações? " +
      "\nNome: " +
      nome +
      "\nDescrição: " +
      descrição +
      "\nData limite: " +
      dataLimite
  );
  if (confirmação) {
    const novaVaga = { nome, descrição, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada!");
  }
}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");
  if (indice >= vagas.length || indice < 0) {
    alert("Indice invalido");
    return;
  }
  const vaga = vagas[indice];
  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga numero " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição : " +
      vaga.descrição +
      "\nData limite :" +
      vaga.dataLimite +
      "\nQuantidade de candidatos" +
      vaga.candidatos.length +
      "\nCandidatos Inscritos : " +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) candidato(a) :");
  const indice = prompt(
    "Informe o indice da vaga na qual o candidato deseja se inscrever :"
  );
  const vaga = vagas[indice];
  const confirmação = confirm(
    "Deseja cadastrar o candidato " +
      candidato +
      " na vaga " +
      indice +
      " ?\n" +
      "Nome : " +
      vaga.nome +
      "\nDescrição :" +
      vaga.descrição +
      "\nData limite :" +
      vaga.dataLimite
  );
  if (confirmação) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada!");
  }
}

function excluirVaga() {
  const indice = prompt("Qual o indice da vaga que deseja excluir?");
  const vaga = vagas[indice];
  const confirmação = confirm(
    "Tem certeza que deseja excluir a vaga: " +
      indice +
      "\n?" +
      "Nome : " +
      vaga.nome +
      "\nDescrição :" +
      vaga.descrição +
      "\nData limite :" +
      vaga.dataLimite
  );
  if (confirmação) {
    vagas.splice(indice, 1);
    alert("Vaga excluida");
  }
}

function exibirMenu() {
  const opção = prompt(
    "Cadastro de vagas de emprego" +
      "\nEscolha uma opção:" +
      "\n1.Listar vagas disponiveis" +
      "\n2.Criar uma nova vaga" +
      "\n3.Vizualizar uma vaga" +
      "\n4.Inscrever um candidato" +
      "\n5.Excluir uma vaga" +
      "\n6.Sair"
  );
  return opção;
}

function executar() {
  let opção = "";
  do {
    opção = exibirMenu();
    switch (opção) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;
      default:
        alert("Opção invalida");
        break;
    }
  } while (opção !== "6");
}

executar();
