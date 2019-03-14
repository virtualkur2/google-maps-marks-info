const {app, BrowserWindow} = require('electron');
const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();
let win;

function createWindow() {
  console.log(CURRENT_WORKING_DIR);
  win = new BrowserWindow({width: 900, height: 700});
  win.loadFile('app/index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  //macOS
  if (process.platform !== 'darwin') {
    app.quit;
  }
});

app.on('activate', () => {
  //macOS
  if (win === null) {
    createWindow();
  }
});
