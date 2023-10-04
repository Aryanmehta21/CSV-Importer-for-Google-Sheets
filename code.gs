function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CSV Importer')
    .addItem('Import CSV', 'showImportDialog')
    .addToUi();
}

function showImportDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('importDialog')
    .setWidth(400)
    .setHeight(350);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'CSV Import');
}

function importCSVData(csvData, mapping) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    var csvDataArray = Utilities.parseCsv(csvData, ','); // Specify semicolon as the delimiter

    var startRow = 1;

    for (var i = 0; i < csvDataArray.length; i++) {
      var rowData = csvDataArray[i];
      for (var j = 0; j < mapping.length; j++) {
        var columnIndex = mapping[j];
        sheet.getRange(startRow + i, columnIndex + 1).setValue(rowData[j]);
      }
    }

    return "CSV data imported successfully!";
  } catch (error) {
    return "Error importing CSV data: " + error;
  }
}
