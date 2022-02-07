const fs = require("fs");
const xlsx = require("node-xlsx");

const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`./meetingAttendanceList.xls`));

for (let i=0;i<workSheetsFromBuffer[0].data.length;i++){
    console.log(workSheetsFromBuffer[0].data[i]);
}
