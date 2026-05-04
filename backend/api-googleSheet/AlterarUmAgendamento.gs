function AlterarUmAgendamento(usuarioData) {
  var dadosUsuario = [];
  var u=[]
  //var json=JSON.stringify(usuario);
  var usuario =JSON.parse(usuarioData);
  dadosUsuario.push(usuario.id, usuario.nome, usuario.cpf, usuario.telefone, usuario.dia_agendado, usuario.hora_agendada, usuario.data);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Usuario");
  var dadosDaPlanilha=sheet.getDataRange().getValues();
  // array começa com index=0, tabela já começa com index =1
  for(var linha=2;linha<dadosDaPlanilha.length;linha++){  
    if(dadosDaPlanilha[linha][0]==dadosUsuario[0])  {
      linha+=1;      
      u.push(dadosDaPlanilha[linha-1])
      sheet.getRange(linha,1,1,dadosDaPlanilha[linha-1].length).setValues([dadosUsuario])//setValues([[usuario.id, usuario.nome, usuario.cpf, usuario.telefone, usuario.dia_agendado, usuario.hora_agendada, usuario.data]]); 
      var usuarioAlterado=sheet.getDataRange().getValues()[linha-1];
       return ContentService.createTextOutput(JSON.stringify(usuarioAlterado)).setMimeType(ContentService.MimeType.JSON);
    }   
  }
 
}

