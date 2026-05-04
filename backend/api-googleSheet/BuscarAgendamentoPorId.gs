function BuscarAgendamentoPorId(id) {
  //var u=[]
  //var json=JSON.stringify(usuario);
  // var jsonAgendamento =JSON.parse(agendamento);
  // dadosUsuario.push(usuario.id, usuario.nome, usuario.cpf, usuario.telefone, usuario.dia_agendado, usuario.hora_agendada, usuario.data);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AGENDAS");
  var agendas = sheet.getDataRange().getValues();
  // array começa com index=0, tabela já começa com index =1
  //for(var linha=2;linha<dadosDaPlanilha.length;linha++){  
  // if(dadosDaPlanilha[linha][0]==dadosUsuario[0])  {
  // linha+=1;      

  var agendamento = []
  var jsonAgendamento = {}
  var existe = false
  var agendamentoErro = { id: new Date(), erro: RangeError("Não foi encontrado").message + "===>" + id }
  for (var index = 1; index <= agendas.length; index++) {
    existe = agendas[index].find((agenda) => agenda ==id);
    if (existe) {
      agendamento = agendas[index]
      jsonAgendamento = { id: agendamento[0], nome: agendamento[1], dia_agendado: agendamento[4], hora_agendada: agendamento[5], criado: agendamento[6] }
      console.log("Linha : " + "" + " => " + "agendament0 : " + JSON.stringify(jsonAgendamento));
      return ContentService.createTextOutput(JSON.stringify(jsonAgendamento)).setMimeType(ContentService.MimeType.JSON);
      //return ContentService.createTextOutput(JSON.stringify({ id: admin.id, nome: admin.nome, email: admin.email, role: admin.role })).setMimeType(ContentService.MimeType.JSON);
    } else {
      console.log("Linha : " + "" + " => " + "agendamento : " + JSON.stringify(agendamentoErro))
      return ContentService.createTextOutput(JSON.stringify(agendamentoErro)).setMimeType(ContentService.MimeType.JSON);
    }

  }

}

