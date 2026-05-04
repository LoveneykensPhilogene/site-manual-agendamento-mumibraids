function CriarNovoServicoCatalogo(novoServicoCatalogo) {
  var novoServico = [];
  var servico = JSON.parse(novoServicoCatalogo);
  novoServico.push(servico.id, servico.nome, servico.preco, servico.descricao, servico.imagem, servico.criado, servico.atualizacao);

  //dataJson.push(data.id,data.nome,data.cpf,data.telefone,data.status);
  //dataJson.push(data.id,data.nome)
  //Cadastrar um usuario
  //var spreadsheetsId="https://docs.google.com/spreadsheets/d/1vdLjmizd6SaXzNT6PIfuWXcbrJ0chIHVNF0qgakWj3o/edit?gid=0#gid=0";//var sheet = SpreadsheetApp.openByUrl(spreadsheetsId)

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CATALOGO");
  //var dadosDaPlanilha=sheet.getDataRange().getValues();
  //novoServico.push(6,"Jeanette","4556644-89","49-998","suspensa");
  //  console.log(sheet.getActiveRange().getValues())
  //var p=sheet.getActiveRange().getValues();
  sheet.appendRow(novoServico);
  return ContentService.createTextOutput(JSON.stringify(servico)).setMimeType(ContentService.MimeType.JSON)
}
