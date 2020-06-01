// var spawn = require('child_process').spawn,
// ls    = spawn('cmd.exe', ['/c', 'D:\\MAAP_Net_Files\\ReleaseExcelObject\\ReleaseExcelObject\\bin\\Debug\\ReleaseExcelObject.exe']);

// ls.stdout.on('data', function (data) {
// console.log('stdout: ' + data);
// });

// ls.stderr.on('data', function (data) {
// console.log('stderr: ' + data);
// });

// ls.on('exit', function (code) {
// console.log('child process exited with code ' + code);
// });

//----------------------------------
// const { spawn } = require('child_process');
// const bat = spawn('cmd.exe', ['/c', 'C:\\Users\\703215266\\Desktop\\ReleaseExcelObject\\ReleaseExcelObject\\bin\\Debug\\ReleaseExcelObject']);

// bat.stdout.on('data', (data) => {
//   console.log("dd : " + data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.error(data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });

//------------------------------------------------

//----------------------------------------------
const exec = require('child_process');
    //const child = exec.execFile('D:\\MAAP_Net_Files\\ReleaseExcelObject\\ReleaseExcelObject\\bin\\Debug\\ReleaseExcelObject.exe', [30.50,18.5330,12.5330,7.95,85,'M',1,J,1], function (error, stdout, stderr) {
      const child = exec.execFile('C:\\WindIntegration\\WindIntegration\\bin\\Debug\\WindIntegration.exe', [46.367,-79.417,60.53131529322,-79.417,85,'S',5,'J',1], function (error, stdout, stderr) {

      child.stdout.on('data', (data) => {
            console.log("dd : " + data.toString());
          });
          
          child.stderr.on('data', (data) => {
            console.error(data.toString());
          });
          
          child.on('exit', (code) => {
            console.log(`Child exited with code ${code}`);
          });
          

        if (error) {
            throw error;
        }
        console.log(" Output :" + stdout);
    });


