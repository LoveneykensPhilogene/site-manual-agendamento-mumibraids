function DeletarUmAgendamentoDeLinha(usuarioData) {
  var dadosUsuario = [];
  var u=[];
  //var json=JSON.stringify(usuario);
  var usuario =JSON.parse(usuarioData);
  dadosUsuario.push(usuario.id, usuario.nome, usuario.cpf, usuario.telefone, usuario.dia_agendado, usuario.hora_agendada, usuario.data);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Usuario");
  var dadosDaPlanilha=sheet.getDataRange().getValues();
  for(var linha=1;linha<dadosDaPlanilha.length;linha++){  
    if(dadosDaPlanilha[linha][0]==dadosUsuario[0])  {
      linha+=1;
      u.push(dadosDaPlanilha[linha])
      sheet.deleteRow(linha); 
       return ContentService.createTextOutput(JSON.stringify(u[0])).setMimeType(ContentService.MimeType.JSON);
    }   
  }
 
}

