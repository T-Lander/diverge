const { app, BrowserWindow, ipcMain, IpcMessageEvent } = require("electron");
const url = require("url");
const path = require("path");
const windowConfig = {
  width: 1200,
  height: 800,
  minWidth: 800,
  minHeight: 600,
  frame: false,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false
  },
  backgroundColor: '#FFF', // Makes rendering more crisp, for some reason
};

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(windowConfig);
  mainWindow.removeMenu();
  mainWindow.webContents.openDevTools();

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `../dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

// Inter-Process Communication //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
ipcMain.on('minimizeWindow', ( event, arg ) => {
  console.log('berp')
  mainWindow.minimize();
});

ipcMain.on('toggleWindow', ( event, arg ) => {
  if( mainWindow.isMaximized() ) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('closeWindow', ( event, arg ) => {
  mainWindow.close()
});
