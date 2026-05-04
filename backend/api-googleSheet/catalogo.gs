function MostrarCatalogo(nomePlanilha){
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nomePlanilha);
 var dadosDaPlanilha=sheet.getDataRange().getValues();
 var servicos=[];   
 var colunas=[];

 for(var cabecalho=0;cabecalho<dadosDaPlanilha[0].length;cabecalho++){
   colunas.push(dadosDaPlanilha[0][cabecalho]);
  }  
  console.log("Cabeçalho : " + colunas)
  for (var linha =1;linha<dadosDaPlanilha.length;linha++){            
      var agendamento={};     
     for(var coluna=0;coluna<dadosDaPlanilha[linha].length;coluna++){
      if(coluna<=0){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      } 
     if(coluna==1){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }
     if(coluna==2){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }
     if(coluna==3){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }    
       if(coluna==4){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }     
      if(coluna==5){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }     
      if(coluna==6){
       agendamento[colunas[coluna]]=dadosDaPlanilha[linha][coluna];
      }     
   }
   servicos.push(agendamento); 
   console.log("Linha : "+linha +" => "+ "Agendamento : "+ JSON.stringify(agendamento))   
  }  
  return ContentService.createTextOutput(JSON.stringify(servicos)).setMimeType(ContentService.MimeType.JSON);
}
