var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
var monitorsList = [[], [], []];
for(i = 0; i <= 2; i++){
    monitorsList[i][0] = newMonitorsList[i];
    monitorsList[i][1] = i+1;
}
return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;