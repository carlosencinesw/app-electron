const {
    app,
    BrowserWindow
} = require('electron');

app.on('ready', () => {
    let appWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    appWindow.loadURL(`file://${__dirname}/app/index.html`);
});