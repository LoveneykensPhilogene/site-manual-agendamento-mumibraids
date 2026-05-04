function CadastrarUmAgendamentoNaPlanilha(agendamentoData) {  
  var dadosAgendamento=[];
var agendamento= JSON.parse(agendamentoData);
dadosAgendamento.push(agendamento.id,agendamento.nome,agendamento.cpf,agendamento.telefone,agendamento.dia_agendado,agendamento.hora_agendada,agendamento.preco,agendamento.data);

//dataJson.push(data.id,data.nome,data.cpf,data.telefone,data.status);
//dataJson.push(data.id,data.nome)
//Cadastrar um usuario
//var spreadsheetsId="https://docs.google.com/spreadsheets/d/1vdLjmizd6SaXzNT6PIfuWXcbrJ0chIHVNF0qgakWj3o/edit?gid=0#gid=0";//var sheet = SpreadsheetApp.openByUrl(spreadsheetsId)

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AGENDAS");
 //var dadosDaPlanilha=sheet.getDataRange().getValues();
//  data.push(6,"Jeanette","4556644-89","49-998","suspensa");
//  console.log(sheet.getActiveRange().getValues())
 //var p=sheet.getActiveRange().getValues();
  sheet.appendRow(dadosAgendamento);
  return ContentService.createTextOutput(JSON.stringify(agendamento)).setMimeType(ContentService.MimeType.JSON)
}

