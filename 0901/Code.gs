function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('팀 과제 자료 수집')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitData(formData) {
  var sheetId = '1j9L2dZp-S6vdB1-vIup9Qy7wcb8_oC5AD5d7K1XNTrY'; 

  try {
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // 타임스탬프와 함께 제출받은 팀 자료 데이터 추가
    var timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    sheet.appendRow([timestamp, formData.memberName, formData.topic, formData.content]);
    
    return true; 
  } catch (error) {
    return false; 
  }
}
