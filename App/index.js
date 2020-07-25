const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the menu of the app.
  win.loadFile('menu.html')
}

app.whenReady().then(createWindow)
