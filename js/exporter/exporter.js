function exportToCSV(){
  $('#results').tableExport({type:'csv'});
}

function exportToXLS(){
  $('#results').tableExport({type:'excel'});
}

function exportToPDF(){

  $('#results').tableExport({type:'pdf',
                              jspdf: {orientation: 'p',
                              margins: {left:20, top:10},
                              autotable: false}
                              });
}