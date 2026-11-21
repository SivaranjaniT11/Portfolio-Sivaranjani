function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Sent at', 'Name', 'Email', 'Subject', 'Message']);
  }
  sheet.appendRow([
    data.sentAt || new Date(),
    data.name || '',
    data.email || '',
    data.subject || '',
    data.message || '',
  ]);
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
