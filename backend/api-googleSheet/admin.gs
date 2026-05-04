function BuscarAdmins() {

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ADMIN");
  var dadosDaPlanilha = sheet.getDataRange().getValues();
  var admins = [];
  var colunas = [];

  for (var cabecalho = 0; cabecalho < dadosDaPlanilha[0].length; cabecalho++) {
    colunas.push(dadosDaPlanilha[0][cabecalho]);
  }
  console.log("Cabeçalho : " + colunas)
  for (var linha = 1; linha < dadosDaPlanilha.length; linha++) {
    var admin = {};
    for (var coluna = 0; coluna < dadosDaPlanilha[linha].length; coluna++) {
      if (coluna <= 0) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 1) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 2) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 3) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 4) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 5) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 6) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 7) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
      if (coluna == 8) {
        admin[colunas[coluna]] = dadosDaPlanilha[linha][coluna];
      }
    }
    admins.push(admin);
    console.log("Linha : " + linha + " => " + "Admin : " + JSON.stringify(admin))
  }
  return admins;
  //return ContentService.createTextOutput(JSON.stringify(admins)).setMimeType(ContentService.MimeType.JSON);

}

function LoginAdmin(admin) {
  var jsonAdmin = JSON.parse(admin)
  var admins = BuscarAdmins();
  var admin = {}
  var adminErro = { id: new Date(), erro: RangeError("Não foi encontrado").message + jsonAdmin.email + jsonAdmin.senha }
  for (var index = 1; index <= admins.length; index++) {
    admin = admins.find(s => s.email === jsonAdmin.email && s.senha === jsonAdmin.senha);
    if (admin) {
      console.log("Linha : " + "" + " => " + "Admin : " + JSON.stringify(admin))     
     return ContentService.createTextOutput(JSON.stringify({ id: admin.id, nome: admin.nome, email: admin.email, role: admin.role })).setMimeType(ContentService.MimeType.JSON);
    } else {
      console.log("Linha : " + "" + " => " + "Admin : " + JSON.stringify(adminErro))
      return ContentService.createTextOutput(JSON.stringify(adminErro)).setMimeType(ContentService.MimeType.JSON);
    }

  }
}
function BuscarAdminPorEmail(emailAdmin) {
  var admins = BuscarAdmins();
  var admin = {}
  var adminErro = { id: new Date(), erro: RangeError("Não foi encontrado").message + emailAdmin }
  for (var index = 1; index <= admins.length; index++) {
    admin = admins.find(s => s.email === emailAdmin);
    if (admin) {
      console.log("Linha : " + "" + " => " + "Admin : " + JSON.stringify({ id: admin.id, nome: admin.nome, email: admin.email, role: admin.role }))
      return admin;
     //return ContentService.createTextOutput(JSON.stringify({ id: admin.id, nome: admin.nome, email: admin.email, role: admin.role })).setMimeType(ContentService.MimeType.JSON);
    } else {
      console.log("Linha : " + "" + " => " + "Admin : " + JSON.stringify(adminErro))
      return ContentService.createTextOutput(JSON.stringify(adminErro)).setMimeType(ContentService.MimeType.JSON);
    }

  }
}


