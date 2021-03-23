const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");
const windowConfig = {
  width: 1200,
  height: 800,
  minWidth: 800,
  minHeight: 600,
  webPreferences: { nodeIntegration: true },
};

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(windowConfig);
  mainWindow.removeMenu();

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
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
// ipcMain.on('eventName', (event, arg) => {
//   // Do things
// });
