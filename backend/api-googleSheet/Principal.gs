// Funcionando como um controller
// Arquivo dos endpoints da api
function doGet(e) {
  var nomePlanilha = e.parameter.planilha;
  var emailAdmin = e.parameter.email
  var idAgendamento = e.parameter.idAgendamento

  if(nomePlanilha=="CATALOGO"){
    return MostrarCatalogo(nomePlanilha);
  }else{
  if (emailAdmin && nomePlanilha == "AGENDAS") {
    var admin = BuscarAdminPorEmail(emailAdmin);
    if (admin.email) {
      return BuscarTodasAsAgendasNaPlanilha(nomePlanilha);
    } else {
      return admin;
    }
  } else {
    if (idAgendamento && nomePlanilha === "AGENDAS") {
      return BuscarAgendamentoPorId(idAgendamento)
    } else {
      var agendasVazias = []
      return ContentService.createTextOutput(JSON.stringify(agendasVazias)).setMimeType(ContentService.MimeType.JSON);
    }
  }

  }


}

function doPost(e) {
  var params = e.parameters;
  var deletarLinha = params.deletarLinha;
  var cadastrarLinha = params.cadastrarLinha;
  var loginAdmin = params.login
  var atualizarLinha = params.atualizarLinha;
  var adicionarServicoCatalogo=params.servicoNoCatalogo;
  //var agendamento = e.postData.contents;
  if (deletarLinha == "deletar") {
    var agendamento = e.postData.contents;
    return DeletarUmagendamentoDeLinha(agendamento);
  }
  if (cadastrarLinha == "cadastrar") {
    var agendamento = e.postData.contents;
    return CadastrarUmAgendamentoNaPlanilha(agendamento);
  }
  if (atualizarLinha == "atualizar") {
    var agendamento = e.postData.contents;
    return AlterarUmAgendamento(agendamento);
  }

  if(adicionarServicoCatalogo=="novoServico"){
    var novoServico=e.postData.contents;
    return CriarNovoServicoCatalogo(novoServico);
  }
  if (loginAdmin == "admin") {
    var dadosAdmin = e.postData.contents;
    return LoginAdmin(dadosAdmin)
  }
}

// function onEdit(e) {
//   var usuario = e.range;
//   DeletarUmagendamentoDeLinha(usuario);
// }
