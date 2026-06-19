const { app, BrowserWindow, globalShortcut } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        resizable: true,
        movable: true,
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');

    // Close the app when pressing 'Esc'
    globalShortcut.register('Escape', () => {
        app.quit();
    });
}

app.whenReady().then(createWindow);
